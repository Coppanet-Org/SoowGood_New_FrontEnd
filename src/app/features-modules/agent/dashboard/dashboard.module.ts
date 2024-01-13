import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { Route, RouterModule } from '@angular/router';
import { DashboardStatisticscardModule } from 'src/app/shared/modules/dashboard-statisticscard/dashboard-statisticscard.module';
import { AgentAppointmentsModule } from 'src/app/shared/modules/agent-appointments/agent-appointments.module';
import { AgentBookingDialogModule } from 'src/app/shared/modules/agent-booking-dialog/agent-booking-dialog.module';
import { FormsModule } from '@angular/forms';

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
    CommonModule,RouterModule.forChild(routes),
    AgentAppointmentsModule,
    AgentBookingDialogModule,
    FormsModule
  ]
})
export class DashboardModule { }
