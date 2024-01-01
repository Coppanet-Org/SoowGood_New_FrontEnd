import { TosterService } from 'src/app/shared/services/toster.service';
import { DoctorProfileService } from './../../../proxy/services/doctor-profile.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { UserinfoStateService } from '../../services/states/userinfo-state.service';
import { AvaterServiceService } from '../../services/avater-service.service';

@Component({
  selector: 'app-dashboard-profilecard',
  templateUrl: './dashboard-profilecard.component.html',
  styleUrls: ['./dashboard-profilecard.component.scss'],
})
export class DashboardProfilecardComponent implements OnInit {
  userInfo: any;
  authInfo: any;
  status: any;
  url: any;
  profilePic: string = '';

  constructor(
    private UserinfoStateService: UserinfoStateService,
    private AuthService: AuthService,
    private DoctorProfileService: DoctorProfileService,
    private profilePicService: AvaterServiceService,
    private TosterService: TosterService
  ) {}
  ngOnInit() {
    this.authInfo = this.AuthService.authInfo();

    this.UserinfoStateService.getData().subscribe((data) => {
      console.log(data);
      
      this.userInfo = data;
      this.status = data.isOnline;
      this.getProfilePic();
    });
  }

  onChangeStatus() {
    try {
      this.DoctorProfileService.updateDoctorsOnlineStatusByIdAndOnlineStatus(
        this.userInfo.id,
        this.status
      ).subscribe({
        next: (res: any) => {
          this.status = res.isOnline;
        },
        error: (err) => {
          console.log(err);
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  getProfilePic() {
    let type =
      this.authInfo.userType === 'doctor'
        ? 'Doctor'
        : this.authInfo.userType === 'patient'
        ? 'Patient'
        : this.authInfo.userType === 'agent'
        ? 'Agent'
        : '';
    if(type == ''){
      console.log("usertype not found");   
      return
    }
    this.profilePicService
      .getProfilePic(type, this.authInfo.id, 'ProfilePicture')
      .then(({ profilePic, picUrl }) => {
        this.profilePic = profilePic;
        this.url = picUrl + this.profilePic;
        // this.isLoading = false;
        console.log(this.url);
      })
      .catch((err) => {
        this.TosterService.customToast('Error getting profile picture', 'error');
        // this.isLoading = false;
      });
  }
}
