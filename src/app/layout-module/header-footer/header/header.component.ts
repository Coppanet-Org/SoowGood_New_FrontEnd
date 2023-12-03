import { AuthService } from 'src/app/shared/services/auth.service';

import { Component, Input, OnInit } from '@angular/core';

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
  authInfo: any;
  constructor(
    private NormalAuth: AuthService,
    private UserinfoStateService: UserinfoStateService
  ) {}
  ngOnInit(): void {
    this.userType = this.NormalAuth.authInfo()?.userType
    let id = this.NormalAuth.authInfo()?.id;
    if (id) {
      this.isAuthLogin = true;
    } else {
      this.isAuthLogin = false;
    }
  
  }

  signOut(): void {
    this.NormalAuth.signOut();
    location.reload()
  }

}
