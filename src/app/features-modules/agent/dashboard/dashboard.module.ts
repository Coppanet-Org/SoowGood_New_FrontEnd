import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { Route, RouterModule } from '@angular/router';
import { DashboardStatisticscardModule } from 'src/app/shared/modules/dashboard-statisticscard/dashboard-statisticscard.module';

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
  },
  
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    DashboardStatisticscardModule,
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
