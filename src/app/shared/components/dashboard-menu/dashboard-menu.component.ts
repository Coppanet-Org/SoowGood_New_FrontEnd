import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss'],
})
export class DashboardMenuComponent implements OnInit {
  doctorMenuList:any = [
    {
      menuName: 'Dashboard',
      route: 'dashboard',
      icon: "fa-brands fa-microsoft"
    },
    {
      menuName: 'Appointments',
      route: 'appointments',
      icon: "fa-solid fa-calendar-check"
    },
    {
      menuName: 'Patients',
      route: 'patients',
      icon: "fa-solid fa-bed-pulse"
    },
    {
      menuName: 'Hospital & Schedule',
      route: 'hospital-schedule',
      icon: "fa-solid fa-calendar-days"
    },
    {
      menuName: 'Billing',
      route: 'billing',
      icon: "fa-solid fa-money-bill-transfer"
    },
    {
      menuName: 'Profile Settings',
      route: 'profile-settings',
      icon: "fa-solid fa-gear"
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}

