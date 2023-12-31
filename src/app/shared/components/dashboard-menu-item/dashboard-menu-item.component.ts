import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-menu-item',
  templateUrl: './dashboard-menu-item.component.html',
  styleUrls: ['./dashboard-menu-item.component.scss']
})
export class DashboardMenuItemComponent implements OnInit {

  @Input() menuItemDetails: any
  menuList : any[] = [];
  isActive: boolean = false;
  
  ngOnInit(): void {
    var auth = JSON.parse(localStorage.getItem("auth") || '{}') as any;
    this.isActive = auth.isActive;
    if (this.isActive) {
      this.menuList=this.menuItemDetails;
    }
    else {
      this.menuList.push(this.menuItemDetails[5]);
    }
  
  }
}
