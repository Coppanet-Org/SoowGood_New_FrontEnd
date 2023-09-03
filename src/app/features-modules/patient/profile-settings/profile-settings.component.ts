import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { singleSlide, slideInFrom } from 'src/app/animation';
import { patientInputData } from 'src/app/shared/utils/input-info';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
  animations: [slideInFrom('left'),singleSlide('top')]

})
export class ProfileSettingsComponent implements OnInit {
  animationDirection = 'left';
  form!: FormGroup
  patientInputData:any =patientInputData
  isLoading!: boolean
  url!:any

  constructor(private fb: FormBuilder){

  }

ngOnInit(): void {
  this.loadForm()
}


loadForm() {
  this.form = this.fb.group({
    fullName: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    city: [''],
    country: [''],
    mobileNo:[''],
    email:[''],
    address: ['', Validators.required],
    zipCode: ['', Validators.required]
  });
}
submit(){

}
}
