import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';


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

  constructor(
    private NormalAuth: AuthService) {}

  ngOnInit(): void {
  }

  logOut() {
    this.NormalAuth.signOut();
  }
}

