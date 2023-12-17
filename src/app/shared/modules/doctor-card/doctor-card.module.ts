import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorCardComponent } from './doctor-card.component';
import { BookingDialogComponent } from '../../components/booking-dialog/booking-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputModule } from '../input/input.module';
import { MaterialModulesModule } from '../material-modules/material-modules.module';
import {MatButtonModule} from '@angular/material/button';
import { SlotsModule } from '../slots/slots.module';
import { BookingPaymentComponent } from '../../components/booking-dialog/booking-payment/booking-payment.component';
import { BookingReviewModule } from '../booking-review/booking-review.module';

@NgModule({
  declarations: [DoctorCardComponent,BookingDialogComponent,BookingPaymentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([]),
    InputModule,
    MaterialModulesModule,
    MatButtonModule,
    SlotsModule,
    BookingReviewModule
  ],
  exports:[
    DoctorCardComponent
  ]
})
export class DoctorCardModule { }
