import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorTitle, Gender, MaritalStatus } from 'src/app/proxy/enums';
import { SpecialityService } from 'src/app/proxy/services';
import { ListItem } from 'src/app/shared/model/common-model';
import { CommonService } from 'src/app/shared/services/common.service';

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
  @Output() formDataEvent = new EventEmitter<FormGroup>();
  constructor(private fb: FormBuilder,private doctorSpeciality : SpecialityService) {}
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
      mobileNo:[''],
      email:[''],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      bmdcRegNo: ['', Validators.required],
      bmdcRegExpiryDate: ['', Validators.required],
      specialties:['',Validators.required],
      identityNumber: ['', Validators.required],
    });
  }
  sendDataToParent() {
    this.formDataEvent.emit(this.form.value);
    console.log(this.form.value);
  }
}
