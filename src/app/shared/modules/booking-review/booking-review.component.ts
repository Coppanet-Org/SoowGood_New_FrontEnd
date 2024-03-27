import { AuthService } from './../../services/auth.service';
import { UserinfoStateService } from './../../services/states/userinfo-state.service';
import {
  AppointmentService,
  DoctorChamberService,
  EkPayService,
  SslCommerzService,
} from 'src/app/proxy/services';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class BookingReviewComponent implements OnInit {
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
  userType!: string;

  constructor(
    private ToasterService: TosterService,
    private AppointmentService: AppointmentService,
    private DoctorChamberService: DoctorChamberService,
    private AuthService: AuthService,
    private sslCommerzService: SslCommerzService, //private sslCommerzService: PaymentService
    private ekPayService: EkPayService //private sslCommerzService: PaymentService
  ) {
    this.appointmentType = CommonService.getEnumList(AppointmentType);
  }
  ngOnInit(): void {
    this.userType = this.AuthService.authInfo().userType;
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
          if (this.userType == "agent") {
            this.payWithEkpay(res.appointmentCode),
              localStorage.setItem(
                'patientAppointmentCode',
                JSON.stringify(res.appointmentCode)
              );
          }
          else {
            this.payWithSslCommerz(res.appointmentCode),
              localStorage.setItem(
                'patientAppointmentCode',
                JSON.stringify(res.appointmentCode)
              );
          }
        },
        error: (err) => {
          console.log(err);
          this.ToasterService.customToast(
            String(err.error.error.message),
            'error'
          ),
            (this.loading = false);
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  payWithSslCommerz(appointmentCode: any): void {
    if (this.bookingInfo) {
      const sslCommerzInputDto: SslCommerzInputDto = {} as SslCommerzInputDto;
      sslCommerzInputDto.applicationCode = appointmentCode;
      sslCommerzInputDto.totalAmount = String(
        this.bookingInfo.totalAppointmentFee
      );
      sslCommerzInputDto.transactionId = '';
      this.sslCommerzService.initiateTestPayment(sslCommerzInputDto).subscribe({
        next: (response) => {
          if (
            response &&
            response.status === 'SUCCESS' &&
            response.gatewayPageURL
          ) {
            window.location.href = response.gatewayPageURL;
            this.loading = false;
          } else {
            this.loading = false;
            this.ToasterService.customToast(
              'Unable to initiate your payment request. Please contact our support team.',
              'error'
            );
          }
        },
        error: (err) => {
          this.loading = false;
          this.ToasterService.customToast(
            String(err.error.error.message),
            'error'
          );
        },
      });
    } else {
      this.loading = false;
      this.ToasterService.customToast('Booking info not found', 'error');
    }
  }

  payWithEkpay(appointmentCode: any): void {
    if (this.bookingInfo) {
      const ekpayInputDto: EkPayInputDto = {} as EkPayInputDto;
      ekpayInputDto.applicationCode = appointmentCode;
      ekpayInputDto.totalAmount = String(
        this.bookingInfo.totalAppointmentFee
      );
      ekpayInputDto.transactionId = '';
      this.ekPayService.initiateTestPayment(ekpayInputDto).subscribe({
        next: (response) => {
          if (
            response &&
            response.status === '1000' &&
            response.gatewayPageURL
          ) {
            window.location.href = response.gatewayPageURL;
            this.loading = false;
          } else {
            this.loading = false;
            this.ToasterService.customToast(
              'Unable to initiate your payment request. Please contact our support team.',
              'error'
            );
          }
        },
        error: (err) => {
          this.loading = false;
          this.ToasterService.customToast(
            String(err.error.error.message),
            'error'
          );
        },
      });
    } else {
      this.loading = false;
      this.ToasterService.customToast('Booking info not found', 'error');
    }
  }

  getDayOfWeek(date: Date) {
    date = new Date(date);
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return daysOfWeek[date.getDay()];
  }
}
