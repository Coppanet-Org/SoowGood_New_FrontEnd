import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AppointmentsComponent } from './appointments.component';
import { Route, RouterModule } from '@angular/router';
import { AllAppointmentsModule } from 'src/app/shared/modules/all-appointments/all-appointments.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { PrescriptionsModule } from 'src/app/shared/modules/prescriptions/prescriptions.module';

const routes: Route[] = [
  {
    path: '',
    component: AppointmentsComponent,
  },
];

@NgModule({
  declarations: [AppointmentsComponent, MedicalHistoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AllAppointmentsModule,
    MatTabsModule,
    PrescriptionsModule,
    NgOptimizedImage,
  ],
})
export class AppointmentsModule {}
