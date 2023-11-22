import { MaterialModulesModule } from './../../../shared/modules/material-modules/material-modules.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments.component';
import { Route, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { AllAppointmentsModule } from 'src/app/shared/modules/all-appointments/all-appointments.module';
import { PrescriptionsComponent } from 'src/app/shared/modules/prescriptions/prescriptions.component';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';

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
  declarations: [AppointmentsComponent,MedicalHistoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AllAppointmentsModule,
    MatTabsModule,
    
  ]
})
export class AppointmentsModule { }



