import { Component, OnInit } from '@angular/core';
import { AppointmentDto, DoctorProfileDto } from 'src/app/proxy/dto-models';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DoctorStateService } from 'src/app/shared/services/states/doctors-states/doctor-state.service';
import { DashboardService } from './../../../proxy/services/dashboard.service';
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
      currency: true,
    },
    {
      title: 'Loyalty Points',
      data: '',
    },
  ];
  // isLoading: boolean = false;
  isAuthUser: any;
  userType: any;
  appointmentList: AppointmentDto[] = [];
  selectedValue = 'All';
  aptLoading: boolean = false;
  constructor(
    // private DoctorProfileService: DoctorProfileService,
    private DoctorStateService: DoctorStateService,

    private NormalAuth: AuthService,

    private DashboardService: DashboardService
  ) {
    this.isAuthUser = this.NormalAuth.authInfo()?.id;
    this.userType = this.NormalAuth.authInfo()?.userType;
  }

  ngOnInit(): void {
    this.getDashboardAppointment(this.selectedValue);
    this.getDashboardStatisticData(this.isAuthUser);
    try {
      this.DoctorStateService.getCurrentlyOnlineDoctorList().subscribe({
        next: (res) => {
          this.currentOnlineDoctorList = res;
        },
      });
    } catch (error) {}
  }

  getDashboardStatisticData(id: number) {
    this.DashboardService.getDashboadDataForPatient(id, 'patient').subscribe({
      next: (res) => {
        this.details[0].data = Number(res.totalAppointment);
        this.details[1].data = Number(res.totalFeeAmount);
        this.details[2].data = Number(res.doctorLoyaltypoints);
      },
    });
  }
  getDashboardAppointment(value: string) {
    this.aptLoading = true;
    this.DashboardService.getDashboardAppointmentListForPatient(
      this.isAuthUser,
      'patient',
      value
    ).subscribe({
      next: (res) => {
        this.appointmentList = res;
        this.aptLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.aptLoading = false;
      },
    });
  }
  changeSelection(e: any) {
    if (e) {
      this.getDashboardAppointment(e.target.value);
      return;
    }
  }
}
