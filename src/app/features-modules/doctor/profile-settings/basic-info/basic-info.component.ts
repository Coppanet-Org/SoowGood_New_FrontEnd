import { LoaderService } from './../../../../shared/services/loader.service';
import { DatePipe } from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorTitle, Gender, MaritalStatus } from 'src/app/proxy/enums';
import { DoctorProfileService, SpecialityService } from 'src/app/proxy/services';
import { ListItem } from 'src/app/shared/model/common-model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CommonService } from 'src/app/shared/services/common.service';
import {inputConfigs} from "../../../../shared/utils/input-info"
@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  form!: FormGroup;
  genderList: ListItem[] = [];
  titleList: ListItem[] = [];
  maritalOptions: ListItem[] = [];
  specialties:any=[];
  @Input() isLoading: boolean = false
  doctorId:any
  @Output() formDataEvent =new EventEmitter()
  @Output() profileData =new EventEmitter()
  receivedData: any;
  inputConfigs:any = inputConfigs
  constructor(
    private fb: FormBuilder,
    private doctorSpeciality : SpecialityService,
    private doctorProfileService: DoctorProfileService,
    private NormalAuth: AuthService,
    private datePipe: DatePipe,
    private LoaderService :LoaderService
    
    ) {}


  ngOnInit(): void {
 
    this.loadForm();
    this.genderList = CommonService.getEnumList(Gender);
    this.maritalOptions = CommonService.getEnumList(MaritalStatus);
    this.titleList = CommonService.getEnumList(DoctorTitle);
    this.doctorSpeciality.getList().subscribe((res) => {
      this.specialties = res;
    });
    let authId = this.NormalAuth.authInfo().id
    this.doctorId = authId
    this.fetchProfileInfo(authId)


    
    }
    fetchProfileInfo(doctorId: any): void {
      this.LoaderService.sendLoaderState(true)
      if (!doctorId) {
        this.LoaderService.sendLoaderState(false)
        return
      }
      this.LoaderService.sendLoaderState(true)
      this.doctorProfileService.get(doctorId).subscribe(
        (profileInfo) => {
          profileInfo.dateOfBirth = this.formatDate(profileInfo.dateOfBirth); // Format the date of birth
          profileInfo.bmdcRegExpiryDate = this.formatDate(profileInfo.bmdcRegExpiryDate); // Format the BMDC expiry date
          this.form?.patchValue(profileInfo);
          this.profileData.emit(profileInfo);
          this.form.get('specialityId')?.patchValue(profileInfo.specialityId)
          this.LoaderService.sendLoaderState(false)
        },
        (error) => {
          this.LoaderService.sendLoaderState(false)
          console.error('Error fetching profile information:', error);
        }
      );
    }
    private formatDate(dateString: string | undefined): string {
      if (!dateString) {
        return ''; 
      }
      const date = new Date(dateString);
      return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
    }






  loadForm() {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      doctorTitle: ['', Validators.required],
      gender: ['', Validators.required],
      fullName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      city: [''],
      country: [''],
      mobileNo:[''],
      email:[''],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      bmdcRegNo: ['', Validators.required],
      bmdcRegExpiryDate: ['', Validators.required],
      specialityId:['',Validators.required],
      identityNumber: ['', Validators.required],
    });
  }
  sendDataToParent() {
    this.formDataEvent.emit({...this.form.value,id:this.doctorId});
  }
}



