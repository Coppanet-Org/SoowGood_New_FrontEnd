import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicPatientsComponent } from './public-patients.component';
import { AgentAppointmentsModule } from '../agent-appointments/agent-appointments.module';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
  {
    path: '',
    component: PublicPatientsComponent,
  }
]


@NgModule({
  declarations: [PublicPatientsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgentAppointmentsModule
  ],
  exports:[
    PublicPatientsComponent,

  ]
})
export class PublicPatientsModule { }
