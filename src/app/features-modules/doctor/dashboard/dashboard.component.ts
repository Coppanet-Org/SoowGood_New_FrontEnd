import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit{
  showWarning:boolean = false
  details = [
    {
      title: 'Total appointments',
      data: 100,
    },
    {
      title: 'Total Patient',
      data: '300',
    },
    {
      title: 'Loyalty Points',
      data: '100',
    },
    {
      title: 'Total Income',
      data: '1000tk',
    },
  ];

  ngOnInit(): void {
    setTimeout(()=>{
      this.showWarning = true
    },1000)
  }
}
