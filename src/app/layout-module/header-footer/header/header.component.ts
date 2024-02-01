import { TosterService } from './../../../shared/services/toster.service';

import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserinfoStateService } from 'src/app/shared/services/states/userinfo-state.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() layout: string = '';
  isAuthLogin!: boolean;
  userType: string = '';
  scrolled: boolean = false;
  logoPath: string = 'assets/SoowGood-Logo.png';
  authInfo: any;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY >= 100;
    if (window.scrollY >= 100) {
      this.logoPath = 'assets/SoowGood-Logo.png';
    } else {
      this.logoPath = 'assets/SoowGood-Logo.png';
    }
  }
  constructor(
    private NormalAuth: AuthService,
    private MainAuth: AuthService,
    private UserinfoStateService: UserinfoStateService,
    private router: Router,
    private TosterService: TosterService
  ) {}
  ngOnInit(): void {
    //let id = this.NormalAuth.authInfo().id;
    const authInfo = this.NormalAuth.authInfo();
    this.authInfo = authInfo;
    let id = authInfo ? authInfo.id : null;
    this.UserinfoStateService.getProfileInfo(id, this.authInfo?.userType);
    if (id) {
      this.isAuthLogin = true;
    } else {
      this.isAuthLogin = false;
    }
    this.userType = authInfo ? authInfo.userType : '';
  }
  signOut(): void {
    // this.NormalAuth.signOut();
    this.MainAuth.signOut();
    this.isAuthLogin = false;
    window.location.reload();
  }
  navigator(path: string) {
    let base = `/${path}`;
    this.router.navigateByUrl(base);
  }
  checkAuthUser(type: string) {
    if (type === 'doctor' || 'patient') {
      if (type === 'doctor') {
        this.TosterService.customToast(
          'Your are already login as Doctor',
          'warning'
        );
      }
      if (type === 'patient') {
        this.TosterService.customToast(
          'Your are already login as Patient',
          'warning'
        );
      } else {
        return;
        // this.TosterService.customToast('Something went wrong', 'error');
      }
    }
    return;
  }
}
