import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPatientComponent } from './my-patient.component';
import { CreatePatientModule } from 'src/app/shared/modules/create-patient/create-patient.module';
import { Route, RouterModule } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class MyPatientModule { }
