import { CommonService } from './../../../../../shared/services/common.service';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender, MaritalStatus, DoctorTitle } from 'src/app/proxy/enums';
import { DoctorProfileService, SpecialityService } from 'src/app/proxy/services';

import { ListItem } from 'src/app/shared/model/common-model';
import { DoctorProfileInputDto } from '../../../../../proxy/input-dto';
import { SubSink } from 'SubSink';
//import { DatePipe } from '@angular/common';
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
  doctorId: any
  @Output() formDataEvent = new EventEmitter<FormGroup>();
  @Output() profileData = new EventEmitter()
  constructor(
    private fb: FormBuilder,
    private doctorSpeciality: SpecialityService,
    private cdr: ChangeDetectorRef,

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



sendDataToParent() {
  this.formDataEvent.emit(this.form.value);
}
}
