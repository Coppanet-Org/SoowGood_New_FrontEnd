

import { Component, Input, OnInit } from '@angular/core';
//import { AuthService } from '../../services/auth.service';
//import { AuthService } from 'src/app/shared/services/auth.service';
import { UserinfoStateService } from 'src/app/shared/services/states/userinfo-state.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() layout: string = '';
  isAuthLogin!: boolean;
  userType: string = '';
  constructor(
    private NormalAuth: AuthService,
    private MainAuth: AuthService,
    private UserinfoStateService: UserinfoStateService
  ) { }
  ngOnInit(): void {
    if (this.NormalAuth.authInfo() != null) {
      let id = this.NormalAuth.authInfo().id ? this.NormalAuth.authInfo().id : 0;

      if (id) {
        this.isAuthLogin = true;
      } else {
        this.isAuthLogin = false;
      }
      this.userType = this.NormalAuth.authInfo().userType;
    }
  }
  signOut(): void {
     this.NormalAuth.signOut();
    //this.MainAuth.signOut();
  }
}
