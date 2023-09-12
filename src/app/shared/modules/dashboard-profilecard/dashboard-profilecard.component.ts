import { Component, Input, OnInit } from '@angular/core';
import { UserinfoStateService } from '../../services/states/userinfo-state.service';


@Component({
  selector: 'app-dashboard-profilecard',
  templateUrl: './dashboard-profilecard.component.html',
  styleUrls: ['./dashboard-profilecard.component.scss'],
})
export class DashboardProfilecardComponent implements OnInit {
  userInfo: any;

  constructor(private UserinfoStateService: UserinfoStateService) {}
  ngOnInit() {
    this.UserinfoStateService.getData().subscribe(
      (data) => (this.userInfo = data)
    );
  }
}
