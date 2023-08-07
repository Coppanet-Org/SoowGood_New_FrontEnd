
import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DegreeService, DoctorDegreeService, DoctorSpecializationService, SpecializationService } from 'src/app/proxy/services';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DegreeDto, DoctorDegreeDto, DoctorSpecializationDto, SpecializationDto } from 'src/app/proxy/dto-models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TosterService } from '../../../../../shared/services/toster.service';
import { SubSink } from 'SubSink';

@Component({
  selector: 'app-degree-specilization-info-form',
  templateUrl: './degree-specilization-info-form.component.html',
  styleUrls: ['./degree-specilization-info-form.component.scss']
})
export class DegreeSpecilizationInfoFormComponent implements OnInit {
  isLoading: boolean = false;
  degreeList: DegreeDto[] = [];
  specializationList: SpecializationDto[] = [];
  doctorDegreeList: DoctorDegreeDto[] = [];
  doctorSpecializationList: DoctorSpecializationDto[] = [];
  degreeName: any;
  detectChnage: boolean = false;
  durationList: any = [
    { id: 1, name: '1 year' },
    { id: 2, name: '2 year' },
    { id: 3, name: '3 year' },
    { id: 4, name: '4 year' },
    { id: 5, name: '5 year' },
  ];
  form!: FormGroup;
  spForm!: FormGroup;
  doctorId: any;
  specialityId: any;
  subs = new SubSink();
  @Output() formDataEvent = new EventEmitter<any>();

  public editData: DoctorDegreeDto | undefined
  constructor(
    private degreeService: DegreeService,
    private fb: FormBuilder,
    private doctorDegreeService: DoctorDegreeService,
    private specializationService: SpecializationService,
    private doctorSpecializationService: DoctorSpecializationService,
    private normalAuth: AuthService,
    private tosterService: TosterService,
    private cdRef: ChangeDetectorRef,

  ) { }

  ngOnInit(): void {
    this.loadDegrees();
    this.loadForm();
    this.degreeService.getList().subscribe((res) => {
      this.degreeList = res;
    });
    this.doctorId = this.normalAuth.authInfo().id;
    this.specialityId = this.normalAuth.authInfo().specialityId;
    this.loadDegrees();
    this.specializationService.getListBySpecialtyId(this.specialityId).subscribe((res) => {
      this.specializationList = res;// .push(res);
    });
    this.loadSps();
    //this.cdRef.detectChanges();
  }

  loadForm() {
    this.form = this.fb.group({
      zipCode: ['1216'],
      degreeId: ['0', Validators.required],
      duration: ['0', Validators.required],
      //durationType: ['', Validators.required],
      passingYear: ['', Validators.required],
      instituteName: ['', Validators.required],
      instituteCity: ['', Validators.required],
      instituteCountry: ['', Validators.required],
    });

    this.spForm = this.fb.group({
      specializationId: ['0', Validators.required],
    });
  }

  loadDegrees() {
    if (this.doctorId > 0) {
      this.doctorDegreeService.getListByDoctorId(this.doctorId).subscribe((res) => {
        this.doctorDegreeList = res;
        this.cdRef.detectChanges();
      });
    }
  }

  loadSps() {
    if (this.doctorId > 0) {
      this.doctorSpecializationService.getListByDoctorIdSpId(this.doctorId,this.specialityId).subscribe((res) => {
        this.doctorSpecializationList = res;
        this.cdRef.detectChanges();
      });
    }
  }

  sendDataToParent() {
    let degreeId = this.form.get('degreeId')?.value;
    let duration = this.form.get('duration')?.value;
    const newDegreeData = {
      ...this.form.value,
      degreeId: Number(degreeId),
      duration: Number(duration),
      doctorId: this.doctorId,
    };

    if (!this.form.valid && !this.form.touched) {
      this.tosterService.customToast(
        'Please fill all the required fields!',
        'warning'
      );
      return;
    }

    this.doctorDegreeService.create(newDegreeData).subscribe((res) => {
      if (res) {
        this.tosterService.customToast('Successfully added!', 'success');
        this.detectChnage = true;        
        this.formDataEvent.emit(true);
      }
    });

    // this.cdRef.detectChanges();
    //this.loadDegrees();
  }

  addSpecialization() {
    let spId = this.spForm.get('specializationId')?.value;
    const spData = {
      ...this.spForm.value,
      specializationId: Number(spId),
      doctorId: this.doctorId,
      specialityId:this.specialityId
    };

    if (!this.spForm.valid && !this.form.touched) {
      this.tosterService.customToast(
        'Please fill all the required fields!',
        'warning'
      );
      return;
    }
    this.doctorSpecializationService.create(spData).subscribe((res) => {
      if (res) {
        this.tosterService.customToast('Successfully added!', 'success');
        this.detectChnage = true;
        this.formDataEvent.emit(true);
      }
    });
  }

  deleteItem(id: any) {
    this.subs.sink = this.doctorDegreeService.delete(id).subscribe(
      (reponseData) => {
        //this.load();
        //this.cdRef.detectChanges();
        this.formDataEvent.emit(true);
        this.tosterService.customToast('Data deleted successfully.', 'success');
      });
  }

  deleteSp(id: any) {
    this.subs.sink = this.doctorSpecializationService.delete(id).subscribe(
      (reponseData) => {
        //this.load();
        //this.cdRef.detectChanges();
        this.formDataEvent.emit(true);
        this.tosterService.customToast('Data deleted successfully.', 'success');
      });
  }
}
