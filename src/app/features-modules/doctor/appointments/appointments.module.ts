import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: AppointmentsComponent,
  },
  
]

@NgModule({
  declarations: [
    AppointmentsComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class AppointmentsModule { }
