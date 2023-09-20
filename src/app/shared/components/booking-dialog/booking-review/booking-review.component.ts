import { DoctorBookingStateService } from './../../../services/states/doctor-booking-state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-review',
  templateUrl: './booking-review.component.html',
  styleUrls: ['./booking-review.component.scss']
})
export class BookingReviewComponent implements OnInit {
  bookingInfo: any;
  constructor(private DoctorBookingStateService : DoctorBookingStateService){
  }
  ngOnInit(): void {
    this.DoctorBookingStateService.getBookingData().subscribe((res:any)=> this.bookingInfo = res
    )
  }
}
