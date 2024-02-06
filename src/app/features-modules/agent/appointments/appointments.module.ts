import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Route, RouterModule } from '@angular/router';
import { AllAppointmentsModule } from '../../../shared/modules/all-appointments/all-appointments.module';
import { PrescriptionsComponent } from '../../../shared/modules/prescriptions/prescriptions.component';
import { AppointmentsComponent } from './appointments.component';

const routes: Route[] = [
  {
    path: '',
    component: AppointmentsComponent,
  },
  {
    path: 'prescriptions/:id',
    component: PrescriptionsComponent,
  },
];

@NgModule({
  declarations: [AppointmentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AllAppointmentsModule,
    MatTabsModule,
    NgOptimizedImage,
  ],
})
export class AppointmentsModule {}

//, MedicalHistoryComponent
//import { MaterialModulesModule } from 'src/app/shared/modules/material-modules/material-modules.module';
//import { InputModule } from 'src/app/shared/modules/input/input.module';
//import { LoaderModule } from 'src/app/shared/modules/loader/loader.module';
//import { AgentAppointmentsModule } from 'src/app/shared/modules/agent-appointments/agent-appointments.module';
