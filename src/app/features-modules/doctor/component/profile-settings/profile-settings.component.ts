import { slideInFrom } from 'src/app/animation';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
  animations: [slideInFrom('right')],
})
export class ProfileSettingsComponent implements OnInit  {
  animationDirection = 'right';
  selectedIndex:any
  userId:any;

  constructor(
    private _fb: FormBuilder
  ){}

  ngOnInit(): void {

  }
  firstFormGroup = this._fb.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._fb.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  getUserData(userId:string): void {

  }

}
