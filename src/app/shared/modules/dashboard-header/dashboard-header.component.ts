import { Router } from '@angular/router';

import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DynamicDialogComponent } from '../dynamic-dialog/dynamic-dialog.component';
import { MenuService } from '../../services/menu.service';
import { NotificationService } from '../../../proxy/services';
import { environment } from 'src/environments/environment';
import * as signalR from '@microsoft/signalr';
import { NotificationDto } from 'src/app/proxy/dto-models';
import { Observable, elementAt } from 'rxjs';
@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent {
  authInfo: any;
  isVisible!: boolean;
  notificationCount!: any;
  messageList: NotificationDto[] = [];
  constructor(
    private NormalAuth: AuthService,
    private Router: Router,
    public dialog: MatDialog,
    private menuService: MenuService,
    private notificationService: NotificationService
  ) { }

  onClickMobileMenu(status: boolean) {
    this.menuService.visible(status);
  }

  ngOnInit(): void {
    this.menuService.menuVisibility$.subscribe((res) => (this.isVisible = res));
    this.authInfo = this.NormalAuth.authInfo();
    this.getNotification();

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
  signOut(): void {
    // this.NormalAuth.signOut();
    this.NormalAuth.signOut();
  }
  goHome() {
    this.Router.navigate(['/']);
  }
  onClickModal(component: string) {
    const dialogRef = this.dialog.open(DynamicDialogComponent, {
      maxWidth: 600,
      minWidth: 450,
      data: component,
    });
  }

  //getNotificationCount() {


  //  this.notificationService.getList().subscribe(
  //    (notification) => {
  //      let nlist = notification;
  //      if (this.authInfo.userType == "doctor") {
  //        this.notificationCount = nlist.filter(n => n.notifyToEntityId == this.authInfo.id).length;
  //      }
  //      else {
  //        this.notificationCount = nlist.filter(n => n.creatorEntityId == this.authInfo.id).length;
  //      }
  //    }
  //  );

  //}
  //Message
  getNotification() {
    this.notificationService.getList().subscribe(
      (messages) => {
        if (this.authInfo.userType == "doctor") {

          this.messageList = messages.filter(m => m.notifyToEntityId == this.authInfo.id);
          
        }
        else {
          this.messageList = messages.filter(m => m.creatorEntityId == this.authInfo.id);
        }
        this.notificationCount = this.messageList.length;
      }
    );
  }
}
