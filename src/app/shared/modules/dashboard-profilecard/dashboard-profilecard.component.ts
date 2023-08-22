import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-profilecard',
  templateUrl: './dashboard-profilecard.component.html',
  styleUrls: ['./dashboard-profilecard.component.scss']
})
export class DashboardProfilecardComponent {
@Input() userInfo:any = {
  userName:"Azizul Rahman",
  designation:"Agent | DBC Health",
  userType:"Agent"
}
}
