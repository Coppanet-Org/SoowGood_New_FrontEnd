import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients.component';
import { Route, RouterModule } from '@angular/router';
import { PublicPatientsModule } from 'src/app/shared/modules/public-patients/public-patients.module';

const routes: Route[] = [
  {
    path: '',
    component: PatientsComponent,
  },
  {
    path: 'patient-details/:patientProfileId',
    loadChildren: () =>
      import('../../../shared/modules/patient-details/patient-details.module').then(
        (m) => m.PatientDetailsModule
      ),
  },
];

@NgModule({
  declarations: [
    PatientsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PublicPatientsModule
  ]
})
export class PatientsModule { }
