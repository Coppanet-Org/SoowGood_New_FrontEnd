import { TosterService } from './../../../shared/services/toster.service';

import {
  Component,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MenuService } from 'src/app/shared/services/menu.service';
import { UserinfoStateService } from 'src/app/shared/services/states/userinfo-state.service';

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
  isVisible!: boolean;

  constructor(
    private NormalAuth: AuthService,
    private MainAuth: AuthService,
    private UserinfoStateService: UserinfoStateService,
    private router: Router,
    private TosterService: TosterService,
    private ElementRef: ElementRef
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
  openHomeMenu() {
    // this.menuService.homeMenuVisible(true);
    this.isVisible = !this.isVisible;
  }
  @HostListener('document:click', ['$event.target'])
  onClick(target: any) {
    const clickedInside = this.ElementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.isVisible = false;
    }
  }
}
