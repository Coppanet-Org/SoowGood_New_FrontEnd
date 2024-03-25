import { TosterService } from './../../services/toster.service';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { LiveConsultBookingDialogComponent } from 'src/app/features-modules/public/landing-page/components/live-consult-booking-dialog/live-consult-booking-dialog.component';
import {
  DoctorScheduleService,
  FinancialSetupService,
} from 'src/app/proxy/services';

@Component({
  selector: 'app-dashboard-live-doctor-card',

  templateUrl: './dashboard-live-doctor-card.component.html',
  styleUrl: './dashboard-live-doctor-card.component.scss',
})
export class DashboardLiveDoctorCardComponent {
  @Input() details: any;
  isLoading: boolean = false;
  isAuthUser: any;
  userType: any;
  constructor(
    private DoctorScheduleService: DoctorScheduleService,
    private FinancialSetupService: FinancialSetupService,
    public dialog: MatDialog,
    private TosterService: TosterService
  ) { }
  onClickConsultNow(data: any): void {
    if (data.id) {
      this.isLoading = true;
      const detailsSchedule$ =
        this.DoctorScheduleService.getDetailsScheduleListByDoctorId(data.id);
      const financialSetup$ = this.FinancialSetupService.getList();
      forkJoin([detailsSchedule$, financialSetup$]).subscribe(
        ([detailsScheduleRes, financialSetupRes]) => {
          if (detailsScheduleRes?.length > 0 && data) {
            this.isLoading = false;
            const dialogRef = this.dialog.open(
              LiveConsultBookingDialogComponent,
              {
                maxWidth: 600,
                minWidth: 450,
                data: {
                  doctorDetails: data,
                  doctorScheduleInfo: detailsScheduleRes,
                  isAuthUser: true,
                  userAccess: true,
                  serviceFeeList: financialSetupRes, // Add the serviceFeeList to the data object
                },
              }
            );
          } else {
            this.isLoading = false;
            this.TosterService.customToast(
              `No Details/Schedule found`,
              'warning'
            );
          }
        }
      );
    } else {
      this.isLoading = false;
      this.TosterService.customToast(`No Details/Schedule found`, 'warning');
    }
  }
}
