import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ProfileSettingsComponent } from './profile-settings.component';
import { Route, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule
  ],
  providers: [DatePipe], 
})
export class ProfileSettingsModule { }
