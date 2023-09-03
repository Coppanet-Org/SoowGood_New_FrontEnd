import { Component } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent {
  menuList: any = [
    {
      menuName: 'Dashboard',
      route: 'dashboard',
      icon: 'fa-brands fa-microsoft',
    },
    {
      menuName: 'Appointments',
      route: 'appointments',
      icon: 'fa-solid fa-calendar-check',
    },
    {
      menuName: 'Doctors',
      route: 'doctors',
      icon: 'fa-solid fa-bed-pulse',
    },
    {
      menuName: 'Billing',
      route: 'billing',
      icon: 'fa-solid fa-money-bill-transfer',
    },
    {
      menuName: 'Profile Settings',
      route: 'profile-settings',
      icon: 'fa-solid fa-gear',
    },
  ];
}
