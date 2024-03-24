import { AuthService } from 'src/app/shared/services/auth.service';
import { DashboardService } from './../../../proxy/services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { AppointmentDto } from 'src/app/proxy/dto-models';
import { environment } from 'src/environments/environment';
import * as signalR from '@microsoft/signalr';
import { NotificationDto } from 'src/app/proxy/dto-models';
import { NotificationService } from '../../../proxy/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  showWarning: boolean = false;
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
      data: 0,
      currency: true,
    },
  ];
  doctorId: any;
  appointmentList: AppointmentDto[] = [];
  aptLoading: boolean = false;
  authInfo: any;
  notificationCount!: any;
  messageList: NotificationDto[] = [];
  todayMessageList: NotificationDto[] = [];
  lastdayMessageList: NotificationDto[] = [];
  myDate = new Date();
  constructor(
    private NormalAuth: AuthService,
    private DashboardService: DashboardService,
    private notificationService: NotificationService
  ) { }
  selectedValue = 'All';
  ngOnInit(): void {
    setTimeout(() => {
      this.showWarning = true;
    }, 1000);
    this.authInfo = this.NormalAuth.authInfo();
    let authId = this.NormalAuth.authInfo()?.id;
    this.doctorId = authId;
    //this.getNotification();
    this.getDashboardStatisticData(authId);
    this.getDashboardAppointment(this.selectedValue);
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(environment.apis.default.url + '/notify')
      .build();

    connection
      .start()
      .then(function () {
        console.log('SignalR Connected!');
      })
      .catch(function (err) {
        console.log(err);
        //return console.error(err.toString());
      });

    connection.on('BroadcastMessage', () => {
      this.getNotification();
    });
  }
  getDashboardStatisticData(id: number) {
    this.DashboardService.getDashboadDataForDoctor(id).subscribe({
      next: (res) => {
        this.details[0].data = Number(res.totalAppointment);
        this.details[1].data = Number(res.totalPatient);
        this.details[2].data = Number(res.doctorLoyaltypoints);
        this.details[3].data = Number(res.totalFeeAmount);
      },
    });
  }
  getDashboardAppointment(value: string) {
    this.aptLoading = true;
    this.DashboardService.getDashboardAppointmentListForDoctor(
      this.doctorId,
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
  getNotification() {
    this.notificationService.getList().subscribe(
      (messages) => {
        if (this.authInfo.userType == "doctor") {

          this.messageList = messages.filter(m => m.notifyToEntityId == this.authInfo.id);
          this.todayMessageList = this.messageList.filter(d => d.creationTime?.toString() == this.myDate.toDateString())
          this.lastdayMessageList = this.messageList.filter(d => d.creationTime == this.myDate)

        }
        else {
          this.messageList = messages.filter(m => m.creatorEntityId == this.authInfo.id);
        }
        this.notificationCount = this.messageList.length;
      }
    );
  }
}
