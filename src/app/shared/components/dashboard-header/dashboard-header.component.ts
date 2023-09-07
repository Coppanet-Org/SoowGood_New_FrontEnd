
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent {

  isAuthLogin!: boolean;
  constructor(private NormalAuth: AuthService) {}
  ngOnInit(): void {
    let id = this.NormalAuth.authInfo().id
    if (id) {
      this.isAuthLogin = true
    }else{
      this.isAuthLogin = false
    }
  
  }
  signOut(): void {
    // this.NormalAuth.signOut();
    this.NormalAuth.signOut()
  }
}
