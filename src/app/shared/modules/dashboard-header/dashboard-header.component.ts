import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DynamicDialogComponent } from '../dynamic-dialog/dynamic-dialog.component';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent {
  authInfo: any;
  constructor(
    private NormalAuth: AuthService,
    private Router: Router,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.authInfo = this.NormalAuth.authInfo();
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
}
