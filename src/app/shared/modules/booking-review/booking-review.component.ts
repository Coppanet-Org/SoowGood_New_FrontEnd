import { AppointmentService, DoctorChamberService, EkPayService, SslCommerzService } from 'src/app/proxy/services';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EkPayInputDto, SslCommerzInputDto } from 'src/app/proxy/input-dto';
import { TosterService } from 'src/app/shared/services/toster.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { AppointmentType } from 'src/app/proxy/enums';
import { ListItem } from 'src/app/shared/model/common-model';

@Component({
  selector: 'app-booking-review',
  templateUrl: './booking-review.component.html',
  styleUrls: ['./booking-review.component.scss'],
})
export class BookingReviewComponent {
  @Input() bookingInfo: any;
  @Output() gotToBack = new EventEmitter<any>();
  //SSLCommerz
  sslInputDto = {
    applicantCode: '',
    examFee: 100,
    serviceCharge: 0,
    customAmount: 10,
    isCustomAmount: false,
  };
  hasValidCode = false;

  sslCInputDto: SslCommerzInputDto = {} as SslCommerzInputDto;
  loading: boolean = false;
  appointmentType: ListItem[];

  constructor(
    private ToasterService: TosterService,
    private AppointmentService: AppointmentService,
    private DoctorChamberService: DoctorChamberService,
    private sslCommerzService: SslCommerzService, //private sslCommerzService: PaymentService
    private ekPayService: EkPayService //private sslCommerzService: PaymentService
  ) {
    this.appointmentType = CommonService.getEnumList(AppointmentType);
  }

  getTitle(id: any, type: string) {
    if (type == 'appointmentType') {
      return this.appointmentType.find((res) => res.id == id);
    } else {
      return;
    }
  }
  //getChamber(id: any) {
  //  this.DoctorChamberService.get(id).subscribe(c => {
  //    return c.chamberName?c.chamberName:'N/A';
  //  });
    
  //}

  createAppointmentAndPayment() {
    this.loading = true;

    try {
      this.AppointmentService.create(this.bookingInfo).subscribe({
        next: (res) => {
     
          
          this.payWithSslCommerz(res.appointmentCode), 
          localStorage.setItem("patientAppointmentCode",JSON.stringify(res.appointmentCode))
        },
        error: (err) => {
          console.log(err);
          this.ToasterService.customToast(String(err.error.error.message), 'error'),
          this.loading = false;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  payWithSslCommerz(appointmentCode: any): void {
    if (this.bookingInfo) {
      const sslCommerzInputDto: EkPayInputDto = {} as EkPayInputDto;
      sslCommerzInputDto.applicationCode = appointmentCode;
      sslCommerzInputDto.totalAmount = String(
        this.bookingInfo.totalAppointmentFee
      );
      //sslCommerzInputDto.totalAmount = this.bookingInfo.totalAppointmentFee;
      sslCommerzInputDto.transactionId = '';

      this.ekPayService.initiateTestPayment(sslCommerzInputDto).subscribe({
      //this.sslCommerzService.initiatePayment(sslCommerzInputDto).subscribe({
           next:(response)=>{
            if (response && response.status === 'SUCCESS' && response.gatewayPageURL) {
              window.location.href = response.gatewayPageURL;
              this.loading = false;
            } else {
              this.ToasterService.customToast(
                'Unable to initiate your payment request. Please contact our support team.',
                'error'
              );
            }
           },
           error:(err)=>{
            this.ToasterService.customToast(String(err.error.error.message), 'error'),
            this.loading = false;
           }
      })
        
      
    } else {
      this.ToasterService.customToast('Booking info not found', 'error');
    }
  }
}
