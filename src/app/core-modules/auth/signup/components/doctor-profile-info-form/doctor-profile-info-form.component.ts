import { CommonService } from './../../../../../shared/services/common.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender, MaritalStatus, DoctorTitle } from 'src/app/proxy/enums';
import { SpecialityService } from 'src/app/proxy/services';
import { ListItem } from 'src/app/shared/model/common-model';
import { SubSink } from 'SubSink';
@Component({
  selector: 'app-doctor-profile-info-form',
  templateUrl: './doctor-profile-info-form.component.html',
  styleUrls: ['./doctor-profile-info-form.component.scss'],
})
export class DoctorProfileInfoFormComponent implements OnInit {
  form!: FormGroup;
  fullName: any;
  email: any;
  userId: any;
  mobileNo: any;
  isActive: boolean = false;
  genderList: ListItem[] = [];
  titleList: ListItem[] = [];
  maritalOptions: ListItem[] = [];
  specialties: any = [];
  doctorId: any
  @Output() formDataEvent = new EventEmitter<FormGroup>();
  @Output() profileData = new EventEmitter()
  subs = new SubSink();
  constructor(
    private fb: FormBuilder,
    private doctorSpeciality: SpecialityService,
  ) { }
  ngOnInit(): void {
    this.loadForm();
    this.genderList = CommonService.getEnumList(Gender);
    this.maritalOptions = CommonService.getEnumList(MaritalStatus);
    this.titleList = CommonService.getEnumList(DoctorTitle);
    this.doctorSpeciality.getList().subscribe((res) => {
      this.specialties = res;
    });
  }
  loadForm() {
    this.form = this.fb.group({
      firstName: [null],
      lastName: [null],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      city: [null],
      country: [''],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      bmdcRegNo: ['', Validators.required],
      bmdcRegExpiryDate: ['', Validators.required],
      specialityId: ['', Validators.required],
      identityNumber: ['', Validators.required],
    });
  }

  sendDataToParent() {
    this.formDataEvent.emit(this.form.value);
    //console.log(this.form.value);
  }
}
