import { UserinfoStateService } from './../../shared/services/userinfo-state.service';
import { DoctorProfileService } from './../../proxy/services/doctor-profile.service';
import { LoaderService } from './../../shared/services/loader.service';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent {
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
      menuName: 'Patients',
      route: 'patients',
      icon: 'fa-solid fa-bed-pulse',
    },
    {
      menuName: 'Hospital & Schedule',
      route: 'hospital-schedule',
      icon: 'fa-solid fa-calendar-days',
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

  constructor(
    private NormalAuth: AuthService,
    private LoaderService: LoaderService,
    private DoctorProfileService: DoctorProfileService,
    private UserinfoStateService: UserinfoStateService
  ) {}
  ngOnInit() {
    let user = this.NormalAuth.authInfo();
    if (user.id) {
      this.UserinfoStateService.getProfileInfo(user.id, user.userType);
    }
  }
}
