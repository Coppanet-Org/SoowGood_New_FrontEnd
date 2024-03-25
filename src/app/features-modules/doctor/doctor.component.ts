import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MenuService } from 'src/app/shared/services/menu.service';
import { UserinfoStateService } from 'src/app/shared/services/states/userinfo-state.service';

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
    // {
    //   menuName: 'Billing',
    //   route: 'billing',
    //   icon: 'fa-solid fa-money-bill-transfer',
    // },
    {
      menuName: 'Profile Settings',
      route: 'profile-settings',
      icon: 'fa-solid fa-gear',
    },
  ];
  visiblemenu!: boolean;

  constructor(
    private NormalAuth: AuthService,
    private UserinfoStateService: UserinfoStateService,
    private menuService: MenuService
  ) {}
  ngOnInit() {
    window.scrollTo(0, 0);
    let user = this.NormalAuth.authInfo();
    if (user.id) {
      this.UserinfoStateService.getProfileInfo(user.id, user.userType);
    }
    this.menuService.menuVisibility$.subscribe(
      (res) => (this.visiblemenu = res)
    );
  }
}
