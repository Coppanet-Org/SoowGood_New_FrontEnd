import { UserinfoStateService } from './../../../shared/services/states/userinfo-state.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, map } from 'rxjs';
import { DoctorProfileDto } from 'src/app/proxy/dto-models';
import {
  DoctorScheduleService,
  FinancialSetupService,
} from 'src/app/proxy/services';
import { BookingDialogComponent } from 'src/app/shared/components/booking-dialog/booking-dialog.component';
import { environment } from 'src/environments/environment';
import { LiveConsultBookingDialogComponent } from '../landing-page/components/live-consult-booking-dialog/live-consult-booking-dialog.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TosterService } from 'src/app/shared/services/toster.service';

@Component({
  selector: 'app-doctor-profile-page',
  templateUrl: './doctor-profile-page.component.html',
  styleUrls: ['./doctor-profile-page.component.scss'],
})
export class DoctorProfilePageComponent implements OnInit {
  profileInfo!: DoctorProfileDto;
  scheduleInfo!: any[];
  public picUrl = `${environment.apis.default.url}/`;
  isAuthUser!: number;
  userType: any;
  isLoading: boolean = false;
  isLiveConsultLoading: boolean = false;
  doctorPicurl: any;

  constructor(
    private router: ActivatedRoute,
    public dialog: MatDialog,
    private UserinfoStateService: UserinfoStateService,
    private DoctorScheduleService: DoctorScheduleService,
    private FinancialSetupService: FinancialSetupService,
    private AuthService: AuthService,
    private TosterService: TosterService
  ) {}
  active: number = 0;

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isAuthUser = this.AuthService.authInfo()?.id;
    this.userType = this.AuthService.authInfo()?.userType;
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

  scheduleBooking() {
    this.isLoading = true;
    if (this.profileInfo.id) {
      this.DoctorScheduleService.getDetailsScheduleListByDoctorId(
        this.profileInfo.id
      ).subscribe((res) => {
        this.isLoading = false;
        if (res?.length > 0 && this.profileInfo) {
          this.dialog.open(BookingDialogComponent, {
            maxWidth: 600,
            minWidth: 450,
            data: {
              doctorDetails: this.profileInfo,
              doctorScheduleInfo: res,
              isAuthUser: this.isAuthUser ? true : false,
              userAccess: this.userType == 'doctor' ? false : true,
            },
          });
        } else {
          this.isLoading = false;
          this.TosterService.customToast(
            `No Details/Schedule found`,
            'warning'
          );
        }
      });
    } else {
      this.isLoading = false;
      this.TosterService.customToast(`No Details/Schedule found`, 'warning');
    }
  }
  liveBooking() {
    this.isLiveConsultLoading = true;
    if (this.profileInfo.id) {
      const detailsSchedule$ =
        this.DoctorScheduleService.getDetailsScheduleListByDoctorId(
          this.profileInfo.id
        );
      const financialSetup$ = this.FinancialSetupService.getList();
      forkJoin([detailsSchedule$, financialSetup$]).subscribe(
        ([detailsScheduleRes, financialSetupRes]) => {
          if (detailsScheduleRes?.length > 0 && this.profileInfo.id) {
            this.dialog.open(LiveConsultBookingDialogComponent, {
              maxWidth: 600,
              minWidth: 450,
              data: {
                doctorDetails: {
                  ...this.profileInfo,
                  picUrl: this.profileInfo.profilePic,
                },
                doctorScheduleInfo: detailsScheduleRes,
                isAuthUser: this.isAuthUser ? true : false,
                userAccess: this.userType == 'doctor' ? false : true,
                serviceFeeList: financialSetupRes, // Add the serviceFeeList to the data object
              },
            });
            this.isLiveConsultLoading = false;
          } else {
            this.isLiveConsultLoading = false;
            this.TosterService.customToast(
              `No Details/Schedule found`,
              'warning'
            );
          }
        }
      );
    } else {
      this.isLiveConsultLoading = false;
      this.TosterService.customToast(`No Details/Schedule found`, 'warning');
    }
  }
}
