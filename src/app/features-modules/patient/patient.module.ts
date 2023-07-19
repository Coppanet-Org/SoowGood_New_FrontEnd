import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PatientComponent } from './patient.component';


const routes: Route[] = [
  {
    path: '',
    component: PatientComponent,
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class PatientModule { }
