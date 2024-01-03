import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments.component';
import { Route, RouterModule } from '@angular/router';
import { AllAppointmentsModule } from '../../../shared/modules/all-appointments/all-appointments.module';
import { MatTabsModule } from '@angular/material/tabs';
import { PrescriptionsComponent } from '../../../shared/modules/prescriptions/prescriptions.component';
import { MedicalHistoryComponent } from '../../patient/appointments/medical-history/medical-history.component';

const routes: Route[] = [
  {
    path: '',
    component: AppointmentsComponent,
  },
  {
    path: 'prescriptions/:id',
    component: PrescriptionsComponent,
  }
]

@NgModule({
  declarations: [AppointmentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AllAppointmentsModule,
    MatTabsModule,
  ]
})
export class AppointmentsModule { }

//, MedicalHistoryComponent
//import { MaterialModulesModule } from 'src/app/shared/modules/material-modules/material-modules.module';
//import { InputModule } from 'src/app/shared/modules/input/input.module';
//import { LoaderModule } from 'src/app/shared/modules/loader/loader.module';
//import { AgentAppointmentsModule } from 'src/app/shared/modules/agent-appointments/agent-appointments.module';
