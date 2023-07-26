import { slideInFrom } from 'src/app/animation';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-patients',
  templateUrl: './my-patients.component.html',
  styleUrls: ['./my-patients.component.scss'],
  animations: [slideInFrom('right')],
})
export class MyPatientsComponent {
  animationDirection = 'right';
}
