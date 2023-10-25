import { AppointmentService } from 'src/app/proxy/services';
import { slideInFrom } from 'src/app/animation';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-my-patients',
  templateUrl: './my-patients.component.html',
  styleUrls: ['./my-patients.component.scss'],
  animations: [slideInFrom('right')],
})
export class MyPatientsComponent{
  animationDirection = 'right';
}