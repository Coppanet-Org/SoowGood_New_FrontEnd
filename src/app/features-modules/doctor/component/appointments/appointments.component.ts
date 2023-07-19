import { Component } from '@angular/core';
import { slideInFrom } from 'src/app/animation';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
  animations: [slideInFrom('left')],
})
export class AppointmentsComponent {
  animationDirection = 'left';
}
