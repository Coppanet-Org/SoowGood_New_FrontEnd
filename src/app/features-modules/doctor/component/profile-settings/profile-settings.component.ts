import { slideInFrom } from 'src/app/animation';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
  animations: [slideInFrom('right')],
})
export class ProfileSettingsComponent {
  animationDirection = 'right';
  selectedIndex:any
  form:any = FormGroup;
  userId:any;
  constructor(
    private _fb: FormBuilder
  ){}
  setFormConfig(): void {
    this.form = this._fb.group({
       
    });
}
}
