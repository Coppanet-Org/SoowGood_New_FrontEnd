import { MaterialModulesModule } from './../../../shared/modules/material-modules/material-modules.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments.component';
import { Route, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { AllAppointmentsModule } from 'src/app/shared/modules/all-appointments/all-appointments.module';
const routes: Route[] = [
  {
    path: '',
    component: AppointmentsComponent,
  },
  {
    path: 'prescriptions',
    component: PrescriptionsComponent,
  }
]

@NgModule({
  declarations: [AppointmentsComponent,PrescriptionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AllAppointmentsModule,
    MatTabsModule
  ]
})
export class AppointmentsModule { }



