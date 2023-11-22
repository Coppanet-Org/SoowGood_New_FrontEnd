import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-hospital-schedule',
  templateUrl: './hospital-schedule.component.html',
  styleUrls: ['./hospital-schedule.component.scss'],

})
export class HospitalScheduleComponent {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: [false],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: [''],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: [''],
  });
  isLinear = false;
  isEditable = false;
  activeTab:any
  constructor(private _formBuilder: FormBuilder) {}

}
