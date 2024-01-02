import { AuthService } from 'src/app/shared/services/auth.service';
import { DashboardService } from './../../../proxy/services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { AppointmentDto } from 'src/app/proxy/dto-models';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  showWarning: boolean = false
  details = [
    {
      title: 'Total appointments',
      data: 0,
    },
    {
      title: 'Total Patient',
      data: '',
    },
    {
      title: 'Loyalty Points',
      data: '',
    },
    {
      title: 'Total Income',
      data:  0,
      currency : true
    },
  ];
  doctorId: any;
  appointmentList: AppointmentDto[] = [];
  constructor(private NormalAuth: AuthService, private DashboardService: DashboardService) { }
  selectedValue = "Today"
  ngOnInit(): void {
    setTimeout(() => {
      this.showWarning = true
    }, 1000)
    let authId = this.NormalAuth.authInfo()?.id;
    this.doctorId = authId
    this.getDashboardStatisticData(authId)
    this.getDashboardAppointment(this.selectedValue)
  }
  getDashboardStatisticData(id: number) {
    this.DashboardService.getDashboadDataForDoctor(id).subscribe({
      next: (res) => {
        this.details[0].data = Number(res.totalAppointment)
        this.details[1].data = Number(res.totalPatient)
        this.details[2].data = Number(res.doctorLoyaltypoints)
        this.details[3].data = Number(res.totalFeeAmount) 
 
      }
    })
  }
  getDashboardAppointment(value: string) {
    this.DashboardService.getDashboardAppointmentListForDoctor(this.doctorId, value).subscribe({
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
}
