
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  agentId: any;

  constructor(
    private NormalAuth: AuthService,
  ) { }
  ngOnInit(): void {
    let authId = this.NormalAuth.authInfo().id;
    this.agentId = authId;
  }
}
