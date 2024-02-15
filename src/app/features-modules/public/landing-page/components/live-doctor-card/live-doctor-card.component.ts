import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import {
  DoctorScheduleService,
  FinancialSetupService,
} from 'src/app/proxy/services';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TosterService } from 'src/app/shared/services/toster.service';
import { environment } from 'src/environments/environment';
import { LiveConsultBookingDialogComponent } from '../live-consult-booking-dialog/live-consult-booking-dialog.component';

@Component({
  selector: 'app-live-doctor-card',
  templateUrl: './live-doctor-card.component.html',
  styleUrls: ['./live-doctor-card.component.scss'],
})
export class LiveDoctorCardComponent {
  isAuthUser: number;
  isLoading: boolean = false;
  userType: string = '';
  picUrls: any;
  @Input() doctorDetails: any;
  defaultImage = 'assets/doctor/dr.jpeg';
  public picUrl = `${environment.apis.default.url}/`;

  constructor(
    private DoctorScheduleService: DoctorScheduleService,
    private NormalAuth: AuthService,
    public dialog: MatDialog,
    private TosterService: TosterService,
    private FinancialSetupService: FinancialSetupService,
    private router: Router
  ) {
    this.isAuthUser = this.NormalAuth.authInfo()?.id;
    this.userType = this.NormalAuth.authInfo()?.userType;
    //this.picUrls = this.picUrl + this.doctorDetails.profilePic;
  }

  onClickConsultNow(data: any) {
    this.openDialog(data);
  }
  goToProfile(id: number) {
    this.router.navigate([`/search/doctors/${id}`]);
  }
  openDialog(data: any): void {
    this.isLoading = true;

    if (data.id) {
      const detailsSchedule$ =
        this.DoctorScheduleService.getDetailsScheduleListByDoctorId(data.id);
      const financialSetup$ = this.FinancialSetupService.getList();

      forkJoin([detailsSchedule$, financialSetup$]).subscribe(
        ([detailsScheduleRes, financialSetupRes]) => {
          if (detailsScheduleRes?.length > 0 && data) {
            this.isLoading = false;
            this.dialog.open(LiveConsultBookingDialogComponent, {
              maxWidth: 600,
              minWidth: 450,
              data: {
                doctorDetails: data,
                doctorScheduleInfo: detailsScheduleRes,
                isAuthUser: this.isAuthUser ? true : false,
                userAccess: this.userType == 'doctor' ? false : true,
                serviceFeeList: financialSetupRes, // Add the serviceFeeList to the data object
              },
            });
          }
        }
      );
    } else {
      this.isLoading = false;
      this.TosterService.customToast(`No Details/Schedule found`, 'warning');
    }
  }
}
