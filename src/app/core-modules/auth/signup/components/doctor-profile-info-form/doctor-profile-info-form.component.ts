import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender } from 'src/app/proxy/enums';
@Component({
  selector: 'app-doctor-profile-info-form',
  templateUrl: './doctor-profile-info-form.component.html',
  styleUrls: ['./doctor-profile-info-form.component.scss']
})
export class DoctorProfileInfoFormComponent implements OnInit {
  form!: FormGroup;
  genderList:[]=[];
  @Output() formDataEvent = new EventEmitter<FormGroup>();
  constructor(private fb: FormBuilder){

  }
  ngOnInit(): void {
    this.loadForm();
    // this.idTypeList = CommonService.getEnumList(IdType);
  }

  loadForm() {
    this.form = this.fb.group({
      firstName:[''],
      lastName:[''],
      doctorTitle:['',Validators.required],
      gender: ['', Validators.required],
      fullName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      maritalStatus:['',Validators.required],
      city: [''],
      country: [''],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      bmdcRegNo: ['', Validators.required],
      bmdcRegExpiryDate: ['', Validators.required],
      // specialties:['',Validators.required],
      identityNumber:['',Validators.required],
    });
  }
  sendDataToParent() {
    this.formDataEvent.emit(this.form.value);
    console.log(this.form.value);
    
  }
}
