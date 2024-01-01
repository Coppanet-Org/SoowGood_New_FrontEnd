import { inputForCreatePatient } from './../../utils/input-info';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent implements OnInit {
createPatientForm!: FormGroup
inputConfigs:any=inputForCreatePatient
isLoading:boolean = false
profileInfo:any
formSubmitted:boolean = false
constructor( private fb : FormBuilder){}
ngOnInit(): void {
  this.loadForm()
}
loadForm() {
  this.createPatientForm = this.fb.group({
    patientName: ['', Validators.required],
    age: ['', Validators.required],
    gender: ['', Validators.required],
    bloodGroup: ['', Validators.required],
    patientMobileNo: ['', Validators.required],
    patientEmail: [
      '' || this.profileInfo?.email || 'admin@gmail.com',
      Validators.required,
    ],
    createdBy: ["" || this.profileInfo.fullName, Validators.required],
    creatorEntityId: ["" ||this.profileInfo.id, Validators.required],
  });
}

}
