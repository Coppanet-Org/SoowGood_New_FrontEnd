import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments.component';
import { Route, RouterModule } from '@angular/router';
import { AllAppointmentsModule } from 'src/app/shared/modules/all-appointments/all-appointments.module';
import { AllAppointmentsComponent } from 'src/app/shared/modules/all-appointments/all-appointments.component';


const routes: Route[] = [
  {
    path: '',
    component: AppointmentsComponent,
  }
]

@NgModule({
  declarations: [
    AppointmentsComponent,
    
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),
     AllAppointmentsModule,
  ]
})
export class AppointmentsModule { }
