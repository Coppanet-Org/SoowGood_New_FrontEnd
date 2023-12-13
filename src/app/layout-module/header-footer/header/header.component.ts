

import { Component, HostListener, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserinfoStateService } from 'src/app/shared/services/states/userinfo-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() layout: string = '';
  isAuthLogin!: boolean;
  userType: string='';
  scrolled: boolean = false;
  logoPath:string= "assets/auth/clr-logo.png"
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY >= 100;
    if (window.scrollY >= 100) {
      this.logoPath = "assets/SoowGood-Logo.png"
    } else {
      this.logoPath = "assets/auth/clr-logo.png"
    }
    
  }
  constructor(
    private NormalAuth: AuthService,
    private MainAuth: AuthService,
    private UserinfoStateService: UserinfoStateService
  ) {}
  ngOnInit(): void {
    let id = this.NormalAuth.authInfo().id;
    if (id) {
      this.isAuthLogin = true;
    } else {
      this.isAuthLogin = false;
    }
    this.userType = this.NormalAuth.authInfo().userType;
  }
  signOut(): void {
    // this.NormalAuth.signOut();
    this.MainAuth.signOut();
    this.isAuthLogin = false;
  }
}
