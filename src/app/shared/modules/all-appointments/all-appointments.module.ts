import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllAppointmentsComponent } from './all-appointments.component';
import { RouterModule } from '@angular/router';
import { AppointmentCardComponent } from '../../components/appointment-card/appointment-card.component';
import { SkeletonModule } from '../skeleton/skeleton.module';




@NgModule({
  declarations: [
    AllAppointmentsComponent,
    AppointmentCardComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    SkeletonModule,

  ],
  exports:[
    AllAppointmentsComponent
  ],
  
})
export class AllAppointmentsModule { }


