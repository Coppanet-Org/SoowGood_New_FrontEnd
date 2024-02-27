import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DynamicDialogComponent } from '../dynamic-dialog/dynamic-dialog.component';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent {
  authInfo: any;
  isVisible!: boolean;
  constructor(
    private NormalAuth: AuthService,
    private Router: Router,
    public dialog: MatDialog,
    private menuService: MenuService
  ) {}

  onClickMobileMenu(status: boolean) {
    console.log(status);

    this.menuService.visible(status);
  }

  ngOnInit(): void {
    this.menuService.menuVisibility$.subscribe((res) => (this.isVisible = res));

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
