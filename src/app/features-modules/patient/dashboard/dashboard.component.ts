import { Component } from '@angular/core';
import { singleSlide, slideInFrom   } from '../../../animation';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [slideInFrom('right'),singleSlide('top')]
})
export class DashboardComponent {
  animationDirection = 'right';
  showWarning:boolean = false
  details=[
    {
      title : "Total appointments",
      data : 100
    },
    {
      title : "Cancel/Reschedule",
      data : '3'
    },
    {
      title : "Total Pay",
      data : '1000tk'
    }
  ]
}
