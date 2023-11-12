import { Component, OnInit } from '@angular/core';
import { PaymentHistoryService, SslCommerzService } from '../../../proxy/services';
import { TosterService } from '../../../shared/services/toster.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})
export class PaymentSuccessComponent implements OnInit {
  appCode: any;
  constructor(
    private sslCommerzService: SslCommerzService,
    private paymentHistoryService: PaymentHistoryService,
    private tosterService: TosterService,
  ) { }
  ngOnInit() {
    this.appCode = JSON.parse(localStorage.getItem("patientAppointmentCode") || "");
    this.sslCommerzService.updateAppointmentPaymentStatus(this.appCode).subscribe(st => {
      this.tosterService.customToast(
        'Appointment Confirmed, Show the appoinment list', 'success'
      );
    })

  }

}
