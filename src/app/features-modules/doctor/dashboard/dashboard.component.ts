import { singleSlide, slideInFrom   } from '../../../animation';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [slideInFrom('right'),singleSlide('top')],

})
export class DashboardComponent implements OnInit{
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

  ngOnInit(): void {
    setTimeout(()=>{
      this.showWarning = true
    },1000)
  }
}
