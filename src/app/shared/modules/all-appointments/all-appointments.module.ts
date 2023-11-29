import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllAppointmentsComponent } from './all-appointments.component';
import { RouterModule } from '@angular/router';
import { AppointmentCardComponent } from '../../components/appointment-card/appointment-card.component';
import { SkeletonModule } from '../skeleton/skeleton.module';
import { ShowPrescriptionModalModule } from '../show-prescription-modal/show-prescription-modal.module';
import { AppointmentDialogComponent } from '../../components/appointment-dialog/appointment-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AllAppointmentsComponent,
    AppointmentCardComponent,
    AppointmentDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    SkeletonModule,
    ShowPrescriptionModalModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
  ],
  exports: [AllAppointmentsComponent],
})
export class AllAppointmentsModule {}
