import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { slideInFrom } from 'src/app/animation';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
  animations: [slideInFrom('left')],
})
export class AppointmentsComponent implements OnInit {
  animationDirection = 'left';
  doctorId: any;
  constructor(
    private NormalAuth: AuthService,
  ) {}
  ngOnInit(): void {
    let authId = this.NormalAuth.authInfo().id;
    this.doctorId = authId;
  }
}
