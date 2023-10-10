import {  Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.scss'],
})
export class AppointmentCardComponent {
  @Input() appointment: any;
  @Input() user:any
  constructor(private Router: Router) {}
  goToBuildPrescription(aptCode: string) {
    if (aptCode != null || undefined) {
      this.Router.navigate(['/doctor/build-prescription/' + aptCode]);
    } else {
      console.log('appointment not found');
    }
  }
}
