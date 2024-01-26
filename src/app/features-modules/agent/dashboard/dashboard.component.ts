import { FinancialSetupService } from './../../../proxy/services/financial-setup.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentDto, DoctorProfileDto } from 'src/app/proxy/dto-models';
import { DashboardService, DoctorScheduleService } from 'src/app/proxy/services';
import { AgentBookingDialogComponent } from 'src/app/shared/modules/agent-booking-dialog/agent-booking-dialog.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DoctorStateService } from 'src/app/shared/services/states/doctors-states/doctor-state.service';
import { TosterService } from 'src/app/shared/services/toster.service';
import { LiveConsultBookingDialogComponent } from '../../public/landing-page/components/live-consult-booking-dialog/live-consult-booking-dialog.component';
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
      data: 0,
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
  aptLoading: boolean = false
  btnLoading: boolean = false;
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
  
  getDashboardStatisticData(id:number){
    this.DashboardService.getDashboadDataForPatient(id,'agent').subscribe({
      next:(res)=>{
        this.details[0].data= Number(res.totalAppointment)
        this.details[1].data= Number(res.totalFeeAmount)
        this.details[2].data= Number(res.doctorLoyaltypoints)
      }
    })
  }
  getDashboardAppointment(value: string) {
    this.aptLoading = true
    this.DashboardService.getDashboardAppointmentListForPatient(this.isAuthUser, 'agent', value).subscribe({
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
  onClickConsultNow(data:any): void {

    this.btnLoading = true;
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


  
  




}
