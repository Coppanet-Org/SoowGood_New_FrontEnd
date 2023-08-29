
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DegreeService, DoctorDegreeService, DoctorSpecializationService, SpecialityService, SpecializationService } from 'src/app/proxy/services';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DegreeDto, DoctorDegreeDto, DoctorSpecializationDto, SpecializationDto } from 'src/app/proxy/dto-models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TosterService } from '../../../../../shared/services/toster.service';
import { SubSink } from 'SubSink';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-degree-specilization-info-form',
  templateUrl: './degree-specilization-info-form.component.html',
  styleUrls: ['./degree-specilization-info-form.component.scss']
})
export class DegreeSpecilizationInfoFormComponent implements OnInit {

  //@ViewChild('attachments') attachment: any;
  //fileList: File[] = [];
  //fileNames: any[] = [];
  //fileData = new FormData();
  //imagePath: any;
  //upload: any;
  //auth: any;
  //url: any;
  //profilePic: string = '';

  //private apiUrl = `${environment.apis.default.url}/api`;
  //public fileUrl = `${environment.apis.default.url}/`;



  isLoading: boolean = false;
  degreeList: DegreeDto[] = [];
  specializationList: SpecializationDto[] = [];
  doctorDegreeList: DoctorDegreeDto[] = [];
  doctorDegrees: DoctorDegreeDto[] = [];
  doctorSpecializationList: DoctorSpecializationDto[] = [];
  doctorSpecializations: DoctorSpecializationDto[] = [];
  degreeName: any;
  specializationName: any;
  specialityName: any;
  detectChnage: boolean = false;
  durationList: any = [
    { id: 1, name: '1 year' },
    { id: 2, name: '2 year' },
    { id: 3, name: '3 year' },
    { id: 4, name: '4 year' },
    { id: 5, name: '5 year' },
  ];
  formDegree!: FormGroup;
  formSpecialization!: FormGroup;
  doctorId: any;
  specialityId: any;
  subs = new SubSink();

  public editData: DoctorDegreeDto | undefined
  constructor(
    private degreeService: DegreeService,
    private fb: FormBuilder,
    private doctorDegreeService: DoctorDegreeService,
    private specializationService: SpecializationService,
    private specialityService: SpecialityService,
    private doctorSpecializationService: DoctorSpecializationService,
    private normalAuth: AuthService,
    private tosterService: TosterService,
    private cdRef: ChangeDetectorRef,

  ) { }

  ngOnInit(): void {
    this.loadForm();
    this.degreeService.getList().subscribe((res) => {
      this.degreeList = res;
    });
    this.doctorId = this.normalAuth.authInfo().id;
    this.specialityId = this.normalAuth.authInfo().specialityId;
    this.subs.sink = this.specialityService.get(this.specialityId).subscribe(n => {
      this.specialityName = n.specialityName;
    });
    this.specializationService.getListBySpecialtyId(this.specialityId).subscribe((res) => {
      this.specializationList = res;
    });
  }

  loadForm() {
    this.formDegree = this.fb.group({
      zipCode: ['1216'],
      degreeId: ['0', Validators.required],
      duration: ['0', Validators.required],
      passingYear: ['', Validators.required],
      instituteName: ['', Validators.required],
      instituteCity: ['', Validators.required],
      instituteCountry: ['', Validators.required],
    });

    this.formSpecialization = this.fb.group({
      specializationId: ['0', Validators.required],
    });
  }

  getDegreeName(event: any) {
    let t = event.target.value;
    this.subs.sink = this.degreeService.get(t).subscribe(n => {
      this.degreeName = n.degreeName;
    });
  }

  getSpName(event: any): void {
    let t = event.target.value;
    this.subs.sink = this.specializationService.get(t).subscribe(n => {
      this.specializationName = n.specializationName;
    });
  }

  addDegree() {
    let degreeId = this.formDegree.get('degreeId')?.value;
    let duration = this.formDegree.get('duration')?.value;

    let uniqueId = this.GenerateId();
    const newDegreeData = {
      ...this.formDegree.value,
      id: uniqueId,
      degreeId: Number(degreeId),
      degreeName: this.degreeName,
      duration: Number(duration),
      doctorId: this.doctorId,
    };

    if (!this.formDegree.valid && !this.formDegree.touched) {
      this.tosterService.customToast(
        'Please fill all the required fields!',
        'warning'
      );
      return;
    }
    this.doctorDegrees.push(newDegreeData);
    

    
  }
  
  addSpecialization() {
    let spId = this.formSpecialization.get('specializationId')?.value;
    let specialityName = this.specialityName;
    let uniId = this.GenerateId();
    const spData = {
      ...this.formSpecialization.value,
      id: uniId,
      specializationId: Number(spId),
      specializationName: this.specializationName,
      doctorId: this.doctorId,
      specialityId: this.specialityId,
      specialityName: specialityName
    };

    if (!this.formSpecialization.valid && !this.formSpecialization.touched) {
      this.tosterService.customToast(
        'Please fill all the required fields!',
        'warning'
      );
      return;
    }
    this.doctorSpecializations.push(spData);
    
  }
  
  remove(id: any): void {
    let objectIndex = 0;
    objectIndex = this.doctorDegrees.findIndex(
      (obj) => obj.id?.toString() === id
    );
    if (objectIndex > -1) {
      this.doctorDegrees.splice(objectIndex, 1);
    }
  }

  removeSp(id: any): void {
    let objectIndex = 0;
    objectIndex = this.doctorSpecializations.findIndex(
      (obj) => obj.id?.toString() === id
    );
    if (objectIndex > -1) {
      this.doctorSpecializations.splice(objectIndex, 1);
    }
  }

  

  save() {
    let x = 0;
    let y = +(this.doctorDegrees.length + this.doctorSpecializations.length);
    if (this.doctorDegrees.length === 0 && this.doctorSpecializations.length === 0) {
      return;
    }
    else {
      
      this.doctorDegrees.forEach(d => {
        let ddDto: DoctorDegreeDto = {} as DoctorDegreeDto;
        ddDto.degreeId = d.degreeId;
        ddDto.doctorProfileId = this.doctorId;
        ddDto.duration = d.duration;
        ddDto.passingYear = d.passingYear;
        ddDto.instituteName = d.instituteName;
        ddDto.instituteCity = d.instituteCity;
        ddDto.instituteCountry = d.instituteCountry;
        this.subs.sink = this.doctorDegreeService.create(ddDto).subscribe((res) => {
          if (res) {
            x++;
          }
        });
      });

      this.doctorSpecializations.forEach(s => {
        let spDto: DoctorSpecializationDto = {} as DoctorSpecializationDto;
        spDto.doctorProfileId = this.doctorId;;
        spDto.specialityId = s.specialityId;
        spDto.specializationId = s.specializationId;
        this.subs.sink = this.doctorSpecializationService.create(spDto).subscribe((res) => {
          if (res) {
            x++;
          }
        });
      });
      if (x == y) {}
    }
  }

  GenerateId(): string {
    return '_' + Math.random().toString().substring(2, 9);
  }
}
