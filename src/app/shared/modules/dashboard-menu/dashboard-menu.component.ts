import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss'],
})
export class DashboardMenuComponent {

@Input()menuList : any =[]

  constructor(
    private NormalAuth: AuthService) {}

  logOut() {
    this.NormalAuth.signOut();
  }
}

