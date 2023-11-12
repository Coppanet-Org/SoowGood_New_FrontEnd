import { Component, OnInit } from '@angular/core';
import { SslCommerzService } from '../../../proxy/services';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})
export class PaymentSuccessComponent implements OnInit {
  appCode: any;
  constructor(
    private sslCommerzService: SslCommerzService,
  ) { }
  ngOnInit() {
    this.appCode = JSON.parse(localStorage.getItem("patientAppointmentCode") || "");

  }

}
