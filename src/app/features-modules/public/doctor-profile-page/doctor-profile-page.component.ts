import { UserinfoStateService } from './../../../shared/services/states/userinfo-state.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { DoctorProfileDto } from 'src/app/proxy/dto-models';
import { DoctorScheduleService } from 'src/app/proxy/services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-doctor-profile-page',
  templateUrl: './doctor-profile-page.component.html',
  styleUrls: ['./doctor-profile-page.component.scss'],
})
export class DoctorProfilePageComponent implements OnInit {
  profileInfo!: DoctorProfileDto;
  scheduleInfo!: any[];
  public picUrl = `${environment.apis.default.url}/`;

  constructor(
    private router: ActivatedRoute,
    private UserinfoStateService: UserinfoStateService,
    private DoctorScheduleService: DoctorScheduleService
  ) {}
  active: number = 0;

  ngOnInit() {
    window.scrollTo(0, 0);

    this.router.params.subscribe((val) => {
      this.UserinfoStateService.getProfileInfo(val['id'], 'doctor');
      this.UserinfoStateService.getData().subscribe({
        next: (res) => {
          console.log(res);

          this.profileInfo = res;
        },
      });
      this.DoctorScheduleService.getDetailsScheduleListByDoctorId(val['id'])
        .pipe(
          map((res) => {
            // Iterate over each object in the array and remove the 'appointment' property
            const modifiedRes = res.map((item) => {
              const { appointments, ...newItem } = item;
              return newItem;
            });
            return modifiedRes;
          })
        )
        .subscribe({
          next: (modifiedRes) => {
            // Assign the modified response to this.scheduleInfo
            this.scheduleInfo = modifiedRes;
            console.log(modifiedRes);
          },
        });
    });

    const prePaths: string | undefined = this.profileInfo.profilePic;
    const re = /wwwroot/gi;
    const profilePic = prePaths?.replace(re, '');
    this.profileInfo = {
      ...this.profileInfo,
      profilePic: this.picUrl + profilePic,
    };
  }
}
