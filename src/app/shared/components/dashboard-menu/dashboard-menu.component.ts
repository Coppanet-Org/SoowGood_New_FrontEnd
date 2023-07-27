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
    },
    {
      menuName: 'Appointments',
      route: 'appointments',
    },
    {
      menuName: 'Patients',
      route: 'patients',
    },
    {
      menuName: 'Schedule',
      route: 'schedule',
    },
    {
      menuName: 'Billing',
      route: 'billing',
    },
    {
      menuName: 'Profile Settings',
      route: 'profile-settings',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}

