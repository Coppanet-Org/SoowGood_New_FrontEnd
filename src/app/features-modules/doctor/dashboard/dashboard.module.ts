import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { DashboardStatisticscardModule } from 'src/app/shared/modules/dashboard-statisticscard/dashboard-statisticscard.module';
import { FormsModule } from '@angular/forms';
import { TableSkeletonModule } from 'src/app/shared/modules/table-skeleton/table-skeleton.module';

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardStatisticscardModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    TableSkeletonModule,
  ],
})
export class DashboardModule {}
