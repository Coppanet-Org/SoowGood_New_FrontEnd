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
  fullName: any;
  email: any;
  userId: any;
  mobileNo: any;
  isActive: boolean = false;

  genderList: ListItem[] = [];
  titleList: ListItem[] = [];
  maritalOptions: ListItem[] = [];
  specialties: any = [];
  @Input() doctorId: any;
  @Output() formDataEvent = new EventEmitter<FormGroup>();
  @Output() profileData = new EventEmitter()

  subs = new SubSink();
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
  }

  loadForm() {
    this.form = this.fb.group({
      firstName: [null],
      lastName: [null],
      fullName: ['', Validators.required],
      doctorTitle: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      city: [null],
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
    console.log(this.form.value);
  }
}
