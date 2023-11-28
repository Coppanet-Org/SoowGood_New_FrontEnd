
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DoctorStateService } from 'src/app/shared/services/states/doctors-states/doctor-state.service';
import { UserinfoStateService } from 'src/app/shared/services/states/userinfo-state.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
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
      menuName: 'My Patient',
      route: 'my-patient',
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

  constructor(
    private NormalAuth: AuthService,
    private UserinfoStateService: UserinfoStateService,
    private DoctorStateService:  DoctorStateService,
  ) {}
  ngOnInit(): void {
    let user = this.NormalAuth.authInfo();
    if (user.id) {
      this.UserinfoStateService.getProfileInfo(user.id, user.userType);
      this.DoctorStateService.getAllDoctorList()
    }
  }




}
