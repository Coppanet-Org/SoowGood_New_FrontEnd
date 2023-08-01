import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss'],
})
export class DashboardMenuComponent implements OnInit {
  isActive: boolean = false;
  
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
      menuName: 'Hospital & Schedule',
      route: 'hospital-schedule',
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

  ngOnInit(): void {
    //var auth = JSON.parse(localStorage.getItem("auth") || '{}') as any;
    //this.isActive = auth.isActive;
    //console.log(this.isActive);
  }
}

