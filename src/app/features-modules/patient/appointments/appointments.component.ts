import { Component } from '@angular/core';
import { singleSlide, slideInFrom } from 'src/app/animation';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
  animations: [slideInFrom('right'),singleSlide('top')]
})
export class AppointmentsComponent {
  animationDirection = 'right';
}
