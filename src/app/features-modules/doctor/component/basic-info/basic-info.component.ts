import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  form:any = FormGroup;
  titles:any=[
    {value: 'professor', viewValue: 'Professor'},
    {value: 'ass. professor', viewValue: 'Ass. Professor'},
    {value: 'general medicine', viewValue: 'General Medicine'},
  ]
  genders = [
    {name: 'Male', id: 1},
    {name: 'Female', id: 2},
    {name: 'Other', id: 3}
];
specialties =[
  {name:"Cardiology",id:1},
  {name:"Eye",id:2},
]

constructor(private _fb: FormBuilder){

}

ngOnInit(): void {
  this.loadForm();  
}


loadForm() {
  this.form = this._fb.group({
    // id: [this.userId],
    firstName:[''],
    lastName:[''],
    title:['',Validators.required],
    gender: ['0', Validators.required],
    fullName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    email: [''], 
    dob: ['', Validators.required],
    maritalStatus:['',Validators.required],
    city: [''],
    userName: ['', Validators.required],
    country: [''],
    address: ['', Validators.required],
    zipCode: ['', Validators.required],
    bmdcreg: ['', Validators.required],
    bmdcexdate: ['', Validators.required],
    specialties:['',Validators.required]
  })
}
onUpdateUserData(){
  // this.service.getUserInfo().subscribe((res) => {})
}
}
