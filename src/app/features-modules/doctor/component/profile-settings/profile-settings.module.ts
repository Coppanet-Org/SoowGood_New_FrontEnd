import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSettingsComponent } from './profile-settings.component';
import { Route, RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper';
import { BasicInfoComponent } from '../basic-info/basic-info.component';
const routes: Route[] = [
  {
    path: '',
    component: ProfileSettingsComponent,
  },
  
]

@NgModule({
  declarations: [
    ProfileSettingsComponent,
    BasicInfoComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,MatStepperModule
  ]
})
export class ProfileSettingsModule { }
