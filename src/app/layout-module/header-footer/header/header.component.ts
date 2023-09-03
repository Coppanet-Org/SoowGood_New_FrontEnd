
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{
  @Input() layout: string = '';
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
    this.NormalAuth.signOut();
  }
}
