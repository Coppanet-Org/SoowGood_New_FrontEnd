import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingReviewComponent } from './booking-review.component';



@NgModule({
  declarations: [BookingReviewComponent],
  imports: [
    CommonModule
  ],
  exports:[
    BookingReviewComponent
  ]
})
export class BookingReviewModule { }
