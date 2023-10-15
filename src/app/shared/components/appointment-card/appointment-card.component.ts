import {  Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.scss'],
})
export class AppointmentCardComponent {
  @Input() appointment:any;
  @Input() user:any
  constructor(private Router: Router) {

    
  }
  goToBuildPrescription(aptCode: string) {
    if (aptCode != null && aptCode !== undefined) {
      const url = '/doctor/build-prescription/' + aptCode;
      window.open(url, '_blank'); 
    } else {
      console.log('Appointment not found');
    }
  }
  goToPatientProfile(patientProfileId:number){    
   this.Router.navigate(['/doctor/patients/patient-details/' + patientProfileId])
  }
}
