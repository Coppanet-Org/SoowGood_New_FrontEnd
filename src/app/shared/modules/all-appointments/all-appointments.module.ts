import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllAppointmentsComponent } from './all-appointments.component';
import { RouterModule } from '@angular/router';
import { AppointmentCardComponent } from '../../components/appointment-card/appointment-card.component';
import { SkeletonModule } from '../skeleton/skeleton.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowPrescriptionModalModule } from '../show-prescription-modal/show-prescription-modal.module';
import { AppointmentDialogComponent } from '../../components/appointment-dialog/appointment-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    AllAppointmentsComponent,
    AppointmentCardComponent,
    AppointmentDialogComponent
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


