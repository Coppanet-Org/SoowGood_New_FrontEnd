import { CommonService } from './../../../../../shared/services/common.service';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender, MaritalStatus, DoctorTitle } from 'src/app/proxy/enums';
import { DoctorProfileService, SpecialityService } from 'src/app/proxy/services';

import { ListItem } from 'src/app/shared/model/common-model';
import { DoctorProfileInputDto } from '../../../../../proxy/input-dto';
import { SubSink } from 'SubSink';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-doctor-profile-info-form',
  templateUrl: './doctor-profile-info-form.component.html',
  styleUrls: ['./doctor-profile-info-form.component.scss'],
})
export class DoctorProfileInfoFormComponent implements OnInit {
  form!: FormGroup;
  genderList: ListItem[] = [];
  titleList: ListItem[] = [];
  maritalOptions: ListItem[] = [];
  specialties: any = [];
  @Input() isLoading: boolean = false
  doctorId: any
  @Output() formDataEvent = new EventEmitter<FormGroup>();
  @Output() profileData = new EventEmitter()
  constructor(
    private fb: FormBuilder,
    private doctorSpeciality: SpecialityService,
    private _route: ActivatedRoute,
    private doctorProfileService: DoctorProfileService,
    private cdr: ChangeDetectorRef,
    private datePipe: DatePipe

  ) { }
  ngOnInit(): void {
    this.loadForm();
    this.genderList = CommonService.getEnumList(Gender);
    this.maritalOptions = CommonService.getEnumList(MaritalStatus);
    this.titleList = CommonService.getEnumList(DoctorTitle);
    this.doctorSpeciality.getList().subscribe((res) => {
      this.specialties = res;
    });
    this._route.queryParamMap.subscribe((params) => {
      params.keys.forEach((key) => {
        const doctorId = params.get(key);
        this.doctorId = doctorId
        this.fetchProfileInfo(doctorId)
      });
    });
  }
  fetchProfileInfo(doctorId: any): void {
    this.doctorProfileService.get(doctorId).subscribe(
      (profileInfo) => {
        console.log('Profile Information:', profileInfo);
        profileInfo.dateOfBirth = this.formatDate(profileInfo.dateOfBirth); // Format the date of birth
        profileInfo.bmdcRegExpiryDate = this.formatDate(profileInfo.bmdcRegExpiryDate); // Format the BMDC expiry date
        this.form?.patchValue(profileInfo);
        this.profileData.emit(profileInfo);
      },
      (error) => {
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
    address: ['', Validators.required],
    zipCode: ['', Validators.required],
    bmdcRegNo: ['', Validators.required],
    bmdcRegExpiryDate: ['', Validators.required],
    specialties: ['', Validators.required],
    identityNumber: ['', Validators.required],
  });
}

loadDoctUserInfo(userName: string) {
  //this.subs.sink=this.doctorProfileService.getByUserName()
}

sendDataToParent() {
  this.formDataEvent.emit({ ...this.form.value, id:this.doctorId });
  console.log(this.form.value);
}
}
