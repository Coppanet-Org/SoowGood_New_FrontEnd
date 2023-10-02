import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments.component';
import { Route, RouterModule } from '@angular/router';
import { AppointmentCardModule } from 'src/app/shared/modules/appointment-card/appointment-card.module';

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
    CommonModule,RouterModule.forChild(routes),
    AppointmentCardModule
  ]
})
export class AppointmentsModule { }
