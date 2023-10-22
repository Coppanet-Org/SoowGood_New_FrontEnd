import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllAppointmentsComponent } from './all-appointments.component';
import { RouterModule } from '@angular/router';
import { AppointmentCardComponent } from '../../components/appointment-card/appointment-card.component';
import { SkeletonModule } from '../skeleton/skeleton.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowPrescriptionModalModule } from '../../components/appointment-card/show-prescription-modal/show-prescription-modal.module';




@NgModule({
  declarations: [
    AllAppointmentsComponent,
    AppointmentCardComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    SkeletonModule,
    ShowPrescriptionModalModule
  ],
  exports:[
    AllAppointmentsComponent
  ],
  
})
export class AllAppointmentsModule { }


