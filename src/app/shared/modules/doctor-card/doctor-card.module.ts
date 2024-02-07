import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { BookingDialogComponent } from '../../components/booking-dialog/booking-dialog.component';
import { BookingReviewModule } from '../booking-review/booking-review.module';
import { InputModule } from '../input/input.module';
import { MaterialModulesModule } from '../material-modules/material-modules.module';
import { SlotsModule } from '../slots/slots.module';
import { DoctorCardComponent } from './doctor-card.component';

@NgModule({
  declarations: [DoctorCardComponent, BookingDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([]),
    InputModule,
    MaterialModulesModule,
    MatButtonModule,
    SlotsModule,
    BookingReviewModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    NgOptimizedImage,
  ],
  exports: [DoctorCardComponent],
})
export class DoctorCardModule {}
