import { DoctorProfileService } from './../../../proxy/services/doctor-profile.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { UserinfoStateService } from '../../services/states/userinfo-state.service';

@Component({
  selector: 'app-dashboard-profilecard',
  templateUrl: './dashboard-profilecard.component.html',
  styleUrls: ['./dashboard-profilecard.component.scss'],
})
export class DashboardProfilecardComponent implements OnInit {
  userInfo: any;
  authInfo: any;
  status:any;
  constructor(
    private UserinfoStateService: UserinfoStateService,
    private AuthService: AuthService,
    private DoctorProfileService: DoctorProfileService
  ) {}
  ngOnInit() {
    this.authInfo = this.AuthService.authInfo();

    this.UserinfoStateService.getData().subscribe(
      (data) => {
        this.userInfo = data
        this.status = data.isOnline
        
      }
    );
  }

  onChangeStatus() {

    try {
      this.DoctorProfileService.updateDoctorsOnlineStatusByIdAndOnlineStatus(
        this.userInfo.id,
        this.status
      ).subscribe({
        next: (res: any) => {
          this.status = res.isOnline
        },
        error: (err) => {
          console.log(err);
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
 