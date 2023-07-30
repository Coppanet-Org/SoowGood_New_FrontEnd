import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ProfileSettingsComponent } from './profile-settings.component';
import { Route, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { BasicInfoComponent } from '../component/basic-info/basic-info.component';
import { EducationInfoComponent } from '../component/education-info/education-info.component';
import { HospitalInfoComponent } from '../component/hospital-info/hospital-info.component';
import { SpecializationInfoComponent } from '../component/specialization-info/specialization-info.component';

const routes: Route[] = [
  {
    path: '',
    component: ProfileSettingsComponent,

    children: [
      {
        path: '',
        redirectTo: 'basic-info',
        pathMatch: 'full',
      },
      {
        path: 'basic-info',
        component: BasicInfoComponent,

      },
      {
        path: 'education',
        component: EducationInfoComponent
      },
      {
        path: 'specialization',
        component: SpecializationInfoComponent
      },
      {
        path: 'hospital',
        component: HospitalInfoComponent
      },
    ],
  },
  
]

@NgModule({
  declarations: [
    ProfileSettingsComponent,
    BasicInfoComponent,
    EducationInfoComponent,
    HospitalInfoComponent,
    SpecializationInfoComponent
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
