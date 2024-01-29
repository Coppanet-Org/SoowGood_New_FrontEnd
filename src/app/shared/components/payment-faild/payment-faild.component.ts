import { Component, OnInit } from '@angular/core';
import { PaymentHistoryService, SslCommerzService } from '../../../proxy/services';
import { TosterService } from '../../../shared/services/toster.service';
@Component({
  selector: 'app-payment-faild',
  templateUrl: './payment-faild.component.html',
  styleUrls: ['./payment-faild.component.scss']
})
export class PaymentFaildComponent implements OnInit {
  appCode: any;
  constructor(
    private sslCommerzService: SslCommerzService,
    private paymentHistoryService: PaymentHistoryService,
    private tosterService: TosterService,
  ) { }
  ngOnInit() {
    this.appCode = JSON.parse(localStorage.getItem("patientAppointmentCode") || "");
    this.sslCommerzService.updateAppointmentPaymentStatus(this.appCode,2).subscribe(st => {
      this.tosterService.customToast('Appointment Cancelled due to payment faild', 'error');
    })
  }
}
