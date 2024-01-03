import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPatientComponent } from './my-patient.component';
import { CreatePatientModule } from 'src/app/shared/modules/create-patient/create-patient.module';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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
  }
]

@NgModule({
  declarations: [
    MyPatientComponent
  ],
  imports: [
    CommonModule,
    CreatePatientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MyPatientModule { }
