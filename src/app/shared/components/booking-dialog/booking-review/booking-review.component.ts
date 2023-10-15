import { AppointmentService,  SslCommerzService } from 'src/app/proxy/services';
import { Component, OnInit } from '@angular/core';
import { SslCommerzInputDto } from 'src/app/proxy/input-dto';
import { DoctorBookingStateService } from 'src/app/shared/services/states/doctors-states/doctor-booking-state.service';
import { TosterService } from 'src/app/shared/services/toster.service';

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
    private ToasterService :TosterService,
    private appointmentService: AppointmentService,
    private sslCommerzService: SslCommerzService
    //private sslCommerzService: PaymentService
  ) { }

  ngOnInit(): void {
    
    this.DoctorBookingStateService.getBookingData().subscribe((res:any)=> {
      this.bookingInfo = res;
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
         localStorage.removeItem('booking-info')
         this.ToasterService.customToast("Payemnt success",'success')
       } else {
        this.ToasterService.customToast("Unable to initiate your payment request. Please contact our support team.",'error')
       }
     });
   }
}
