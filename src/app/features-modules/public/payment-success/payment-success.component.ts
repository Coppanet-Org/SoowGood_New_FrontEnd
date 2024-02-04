import { UserinfoStateService } from 'src/app/shared/services/states/userinfo-state.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  PaymentHistoryService,
  SslCommerzService,
} from '../../../proxy/services';
import { TosterService } from '../../../shared/services/toster.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss'],
})
export class PaymentSuccessComponent implements OnInit, AfterViewInit {
  appCode: any;
  userType: string = '';
  isLoading: boolean = false;
  message: string = '';
  showTemplate: boolean = false;
  constructor(
    private sslCommerzService: SslCommerzService,
    private tosterService: TosterService,
    private AuthService: AuthService,
    private Router: Router
  ) {}
  ngOnInit() {
    this.userType = this.AuthService.authInfo()?.userType;
    this.appCode = JSON.parse(
      localStorage.getItem('patientAppointmentCode') || ''
    );
    this.isLoading = true;
    if (!this.userType) {
      this.showTemplate = false;
      return;
    } else {
      this.showTemplate = true;
      this.sslCommerzService
        .updateAppointmentPaymentStatus(this.appCode, 1)
        .subscribe((st) => {
          this.isLoading = false;
          this.message = 'Your appointment is confirmed!';
          // this.tosterService.customToast(
          //   'Appointment Confirmed, Show the appoinment list',
          //   'success'
          // );
        });
    }
  }

  ngAfterViewInit(): void {
    if (!this.userType) {
      this.tosterService.customToast(
        'You are not authorized to visit this page',
        'error'
      );
      this.Router.navigate(['/']);
    }
  }
}
