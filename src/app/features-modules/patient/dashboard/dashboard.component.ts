import { DashboardService } from './../../../proxy/services/dashboard.service';
import { DoctorStateService } from 'src/app/shared/services/states/doctors-states/doctor-state.service';
import { AppointmentDto, DoctorProfileDto } from 'src/app/proxy/dto-models';
import { DoctorProfileService } from './../../../proxy/services/doctor-profile.service';
import { Component, OnInit } from '@angular/core';
import { DoctorScheduleService, FinancialSetupService } from 'src/app/proxy/services';
import { LiveConsultBookingDialogComponent } from '../../public/landing-page/components/live-consult-booking-dialog/live-consult-booking-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TosterService } from 'src/app/shared/services/toster.service';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  showWarning: boolean = false;
  currentOnlineDoctorList: DoctorProfileDto[] = [];
  details = [
    {
      title: 'Total appointments',
      data: 0,
    },
    {
      title: 'Total Pay',
      data: '',
      currency : true
    },
    {
      title: 'Loyalty Points',
      data: '',
    },

  ];
  isLoading: boolean=false;
  isAuthUser: any;
  userType: any;
  appointmentList:AppointmentDto[]=[];
  selectedValue= "All"
  aptLoading:boolean = false
  constructor(
    // private DoctorProfileService: DoctorProfileService,
    private DoctorStateService :DoctorStateService,
    private DoctorScheduleService: DoctorScheduleService,
    public dialog: MatDialog,
    private NormalAuth : AuthService,
    private TosterService : TosterService,
    private DashboardService: DashboardService,
    private FinancialSetupService : FinancialSetupService
    ) {
      this.isAuthUser =  this.NormalAuth.authInfo()?.id;
      this.userType =  this.NormalAuth.authInfo()?.userType;
    }

  ngOnInit(): void {
    this.getDashboardAppointment(this.selectedValue)
    this.getDashboardStatisticData(this.isAuthUser)
    try {
      this.DoctorStateService.getCurrentlyOnlineDoctorList().subscribe({
        next: (res) => {
          this.currentOnlineDoctorList = res;
        },
      });
    } catch (error) {}
  }
  onClickConsultNow(data:any){
    this.openDialog(data)
 }


 openDialog(data:any): void {
  this.isLoading = true;
  if (data.id) {
    const detailsSchedule$ = this.DoctorScheduleService.getDetailsScheduleListByDoctorId(data.id);
    const financialSetup$ = this.FinancialSetupService.getList();
    forkJoin([detailsSchedule$, financialSetup$]).subscribe(([detailsScheduleRes, financialSetupRes]) => {
      if (detailsScheduleRes?.length > 0 && data) {
        const dialogRef = this.dialog.open(LiveConsultBookingDialogComponent, {
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

        dialogRef.afterClosed().subscribe((result) => {});
      } else {
        this.TosterService.customToast(`No Details/Schedule found`, "warning");
      }
    })
  }
 }
  getDashboardStatisticData(id:number){
    this.DashboardService.getDashboadDataForPatient(id,'patient').subscribe({
      next:(res)=>{
        this.details[0].data= Number(res.totalAppointment)
        this.details[1].data= Number(res.totalFeeAmount)
        this.details[2].data= Number(res.doctorLoyaltypoints)
      }
    })
  }
  getDashboardAppointment(value: string) {
    this.aptLoading = true
    this.DashboardService.getDashboardAppointmentListForPatient(this.isAuthUser, 'patient', value).subscribe({
      next: (res) => {
        this.appointmentList = res
        this.aptLoading = false
      },
      error: (err) => {
        console.log(err);
        this.aptLoading = false
      }
    })
  }
  changeSelection(e: any) {
    if (e) {
      this.getDashboardAppointment(e.target.value)
      return
    }
  }
}
