import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-menu-item',
  templateUrl: './dashboard-menu-item.component.html',
  styleUrls: ['./dashboard-menu-item.component.scss']
})
export class DashboardMenuItemComponent implements OnInit {
@Input() menuItemDetails:any

ngOnInit(){
  console.log(this.menuItemDetails);
  
}
}
