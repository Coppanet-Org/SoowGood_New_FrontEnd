import { PatientProfileService } from 'src/app/proxy/services';
import { AgentProfileService } from './../../proxy/services/agent-profile.service';
import { DoctorProfileService } from './../../proxy/services/doctor-profile.service';
import { AuthService } from './auth.service';
import { LoaderService } from './loader.service';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserinfoStateService implements OnInit {
  constructor(
    private LoaderService : LoaderService,
    private DoctorProfileService: DoctorProfileService,
    private AgentProfileService:AgentProfileService,
    private PatientProfileService:PatientProfileService,
    private NormalAuth : AuthService
  ) {}
  public authenticateUserInfo = new BehaviorSubject<any>({});
  sendData(data: any) {
    this.authenticateUserInfo.next(data);
  }
  getData() {
    return this.authenticateUserInfo.asObservable();
  }


  ngOnInit() {
    let user = this.NormalAuth.authInfo();
    if (user.id) {
      this.getProfileInfo(user.id, user.userType);
    }
  }

  getProfileInfo(id: any, role:string): void {
    if (id) {
      this.LoaderService.sendLoaderState(true);
      if (role == 'doctor') {
        this.DoctorProfileService.get(id).subscribe((res) => {
          this.sendData(res)
          this.LoaderService.sendLoaderState(false);
        });
      }
      if (role =='agent') {
        this.AgentProfileService.get(id).subscribe((res) => {
          this.sendData(res)
          this.LoaderService.sendLoaderState(false);
        });
      }
      if (role =='patient') {
  
        this.PatientProfileService.get(id).subscribe((res) => {
          this.sendData(res)
          this.LoaderService.sendLoaderState(false);
        });
      }
    }
  }



}
