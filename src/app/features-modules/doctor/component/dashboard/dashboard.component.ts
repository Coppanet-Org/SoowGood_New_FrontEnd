import { slideInFrom   } from './../../../../animation';
import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [slideInFrom('right')],

})
export class DashboardComponent {
  animationDirection = 'right';
}
