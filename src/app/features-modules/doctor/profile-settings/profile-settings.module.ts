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
import {MatDialogModule} from '@angular/material/dialog';
import { DegreeDialogComponentnt } from '../component/degree-dialog/degree-dialog.component';
import { DegreeCardComponent } from '../component/degree-card/degree-card.component';
import { SpecializationDialogComponent } from '../component/specialization-dialog/specialization-dialog.component';


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
    SpecializationInfoComponent,
    DegreeDialogComponentnt,
    DegreeCardComponent,
    SpecializationDialogComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatDialogModule
  ],
  providers: [DatePipe], 
})
export class ProfileSettingsModule { }
