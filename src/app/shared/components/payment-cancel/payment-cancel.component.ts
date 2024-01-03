import { Component, OnInit } from '@angular/core';
import { PaymentHistoryService, SslCommerzService } from '../../../proxy/services';
import { TosterService } from '../../../shared/services/toster.service';

@Component({
  selector: 'app-payment-cancel',
  templateUrl: './payment-cancel.component.html',
  styleUrls: ['./payment-cancel.component.scss']
})
export class PaymentCancelComponent implements OnInit {
  appCode: any;
  constructor(
    private sslCommerzService: SslCommerzService,
    private paymentHistoryService: PaymentHistoryService,
    private tosterService: TosterService,
  ) { }
  ngOnInit() {
    this.appCode = JSON.parse(localStorage.getItem("patientAppointmentCode") || "");
    this.sslCommerzService.updateAppointmentPaymentStatus(this.appCode, 2).subscribe(st => {
      this.tosterService.customToast('Appointment Confirmed, Show the appoinment list', 'success');
    })
  }
}
