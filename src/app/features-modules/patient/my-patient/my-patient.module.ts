import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPatientComponent } from './my-patient.component';
import { CreatePatientModule } from 'src/app/shared/modules/create-patient/create-patient.module';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicPatientsModule } from 'src/app/shared/modules/public-patients/public-patients.module';

// const routes: Route[] = [
//   {
//     path: 'patient-details/:id',
//     component: MyPatientComponent,
//   }
// ]
const routes: Route[] = [
  {
    path: '',
    component: MyPatientComponent,
  },
  {
    path: 'patient-details/:patientProfileId', 
    loadChildren: () =>
      import('../../../shared/modules/patient-details/patient-details.module').then(
        (m) => m.PatientDetailsModule
      ),
  },
]

@NgModule({
  declarations: [
    MyPatientComponent
  ],
  imports: [
    CommonModule,
    CreatePatientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    PublicPatientsModule
  ]
})
export class MyPatientModule { }
