import { AppointmentService,  SslCommerzService } from 'src/app/proxy/services';
import { DoctorBookingStateService } from './../../../services/states/doctor-booking-state.service';
import { Component, OnInit } from '@angular/core';
import { SslCommerzInputDto } from 'src/app/proxy/input-dto';

@Component({
  selector: 'app-booking-review',
  templateUrl: './booking-review.component.html',
  styleUrls: ['./booking-review.component.scss']
})
export class BookingReviewComponent implements OnInit {

  //SSLCommerz
  sslInputDto = {
    applicantCode: '',
    examFee: 100,
    serviceCharge: 0,
    customAmount: 10,
    isCustomAmount: false
  }
  hasValidCode = false;

  sslCInputDto: SslCommerzInputDto = {} as SslCommerzInputDto;

  bookingInfo: any;
  constructor(
    private DoctorBookingStateService: DoctorBookingStateService,

    private appointmentService: AppointmentService,
    private sslCommerzService: SslCommerzService
    //private sslCommerzService: PaymentService
  ) { }

  ngOnInit(): void {
    
    this.DoctorBookingStateService.getBookingData().subscribe((res:any)=> {
      this.bookingInfo = res;
      console.log(res);
    });

  }

   payWithSslCommerz(): void {
     const sslCommerzInputDto: SslCommerzInputDto = {} as SslCommerzInputDto;
     sslCommerzInputDto.applicationCode = this.bookingInfo.appointmenCode;
     sslCommerzInputDto.totalAmount = String(this.bookingInfo.totalAppointmentFee);
     sslCommerzInputDto.transactionId = '';

     this.sslCommerzService.initiateTestPayment(sslCommerzInputDto).subscribe((response: any) => {
       if (response && response.status === 'SUCCESS') {
         window.location = response.gatewayPageURL;
       } else {
         console.log(response);
         //abp.message.error("Unable to initiate your payment request. Please contact our support team.", "FAILED!");
       }
     });
   }
}
