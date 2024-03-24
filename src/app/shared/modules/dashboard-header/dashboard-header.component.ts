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
import { Observable } from 'rxjs';
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
  ) {}

  onClickMobileMenu(status: boolean) {
    this.menuService.visible(status);
  }

  ngOnInit(): void {
    this.menuService.menuVisibility$.subscribe((res) => (this.isVisible = res));
    this.getNotificationMessage();
    this.authInfo = this.NormalAuth.authInfo();
    this.getNotificationCount();
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
      console.log('notif');

      this.getNotificationCount();
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

  getNotificationCount() {
    this.notificationService.getCount().subscribe(
      (notification) => {
        this.notificationCount = notification;
      }
      //,      error => this.errorMessage = <any>error
    );
  }

  getNotificationMessage() {
    this.notificationService.getList().subscribe(
      (messages) => {
        console.log(messages);

        this.messageList = messages;
      }
      //,      error => this.errorMessage = <any>error
    );
  }
}
