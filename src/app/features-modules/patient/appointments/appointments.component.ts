
import { Component, OnInit } from '@angular/core';
import { singleSlide, slideInFrom } from 'src/app/animation';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
  animations: [slideInFrom('right'), singleSlide('top')],
})
export class AppointmentsComponent implements OnInit {
  animationDirection = 'right';
  patientId: any;

  constructor(
    private NormalAuth: AuthService,
  ) {}
  ngOnInit(): void {
    let authId = this.NormalAuth.authInfo().id;
    this.patientId = authId;
  }
}
