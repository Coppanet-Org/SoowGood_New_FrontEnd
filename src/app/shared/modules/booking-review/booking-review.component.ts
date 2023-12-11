import { AppointmentService, SslCommerzService } from 'src/app/proxy/services';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SslCommerzInputDto } from 'src/app/proxy/input-dto';
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
    private sslCommerzService: SslCommerzService
  ) //private sslCommerzService: PaymentService
  {
    this.appointmentType = CommonService.getEnumList(AppointmentType);
  }

  getTitle(id: any, type: string) {
    if (type == 'appointmentType') {
      return this.appointmentType.find((res) => res.id == id);
    } else {
      return;
    }
  }

  createAppointmentAndPayment() {
    this.loading = true;
    this.AppointmentService.create(this.bookingInfo).subscribe((res) => {
      this.payWithSslCommerz(res.appointmentCode);
    });
  }

  payWithSslCommerz(appointmentCode: any): void {
    if (this.bookingInfo) {
      const sslCommerzInputDto: SslCommerzInputDto = {} as SslCommerzInputDto;
      sslCommerzInputDto.applicationCode = appointmentCode;
      sslCommerzInputDto.totalAmount = String(
        this.bookingInfo.totalAppointmentFee
      );
      sslCommerzInputDto.transactionId = '';

      this.sslCommerzService.initiateTestPayment(sslCommerzInputDto).subscribe(
        (response: any) => {
          if (response && response.status === 'SUCCESS') {
            window.location = response.gatewayPageURL;
            this.loading = false;
          } else {
            this.ToasterService.customToast(
              'Unable to initiate your payment request. Please contact our support team.',
              'error'
            );
          }
        },
        (error) => {
          this.ToasterService.customToast(String(error.error.message), 'error');
        }
      );
    } else {
      this.ToasterService.customToast('Booking info not found', 'error');
    }
  }
}
