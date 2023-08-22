import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMenuComponent } from './dashboard-menu.component';
import { DashboardMenuItemComponent } from '../../components/dashboard-menu-item/dashboard-menu-item.component';
import { Route, RouterModule } from '@angular/router';
import { DashboardProfilecardComponent } from '../dashboard-profilecard/dashboard-profilecard.component';
const routes: Route[] = [
  {
    path: '*',
    component: DashboardMenuComponent,
  }
]
@NgModule({
  declarations: [DashboardMenuComponent,DashboardMenuItemComponent,DashboardProfilecardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[DashboardMenuComponent,]
})
export class DashboardMenuModule { }
