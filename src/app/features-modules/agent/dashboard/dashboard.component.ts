import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentDto, DoctorProfileDto } from 'src/app/proxy/dto-models';
import { DashboardService, DoctorScheduleService } from 'src/app/proxy/services';
import { AgentBookingDialogComponent } from 'src/app/shared/modules/agent-booking-dialog/agent-booking-dialog.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DoctorStateService } from 'src/app/shared/services/states/doctors-states/doctor-state.service';
import { TosterService } from 'src/app/shared/services/toster.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
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
  selectedValue= "Passed"
  constructor(
    // private DoctorProfileService: DoctorProfileService,
    private DoctorStateService :DoctorStateService,
    private DoctorScheduleService: DoctorScheduleService,
    public dialog: MatDialog,
    private NormalAuth : AuthService,
    private TosterService : TosterService,
    private DashboardService: DashboardService
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
    this.DashboardService.getDashboardAppointmentListForPatient(this.isAuthUser, 'agent', value).subscribe({
      next: (res) => {
        this.appointmentList = res
      },
      error: (err) => {
        console.log(err);
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
    const dialogRef = this.dialog.open(AgentBookingDialogComponent, {
      width: '40vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // this.getDegreeDataList(this.doctorId)
    });
  }
}
