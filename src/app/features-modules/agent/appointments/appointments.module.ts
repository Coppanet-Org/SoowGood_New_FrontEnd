import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments.component';
import { Route, RouterModule } from '@angular/router';
import { MaterialModulesModule } from 'src/app/shared/modules/material-modules/material-modules.module';
import { InputModule } from 'src/app/shared/modules/input/input.module';
import { LoaderModule } from 'src/app/shared/modules/loader/loader.module';
import { AgentAppointmentsModule } from 'src/app/shared/modules/agent-appointments/agent-appointments.module';
const routes: Route[] = [
  {
    path: '',
    component: AppointmentsComponent,
  },
];


@NgModule({
  declarations: [
    AppointmentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModulesModule,
    InputModule,
    LoaderModule,
   AgentAppointmentsModule
  ]
})
export class AppointmentsModule { }
