import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { slideInFrom } from 'src/app/animation';
@Component({
  selector: 'app-hospital-schedule',
  templateUrl: './hospital-schedule.component.html',
  styleUrls: ['./hospital-schedule.component.scss'],
  animations: [slideInFrom('right')],
})
export class HospitalScheduleComponent {
  animationDirection = 'right';
  firstFormGroup = this._formBuilder.group({
    firstCtrl: [''],
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

  onchangeStep(e:any):void{

  }
}
