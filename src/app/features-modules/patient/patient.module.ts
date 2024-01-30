import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PatientComponent } from './patient.component';
import { DashboardMenuModule } from 'src/app/shared/modules/dashboard-menu/dashboard-menu.module';
import { isAuth } from 'src/app/auth-gurd/auth.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardHeaderModule } from 'src/app/shared/modules/dashboard-header/dashboard-header.module';

const routes: Route[] = [
  {
    path: '',
    component: PatientComponent,
    canActivate: [isAuth],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'appointments',
        loadChildren: () =>
          import('./appointments/appointments.module').then(
            (m) => m.AppointmentsModule
          ),
      },
      {
        path: 'doctors',
        loadChildren: () =>
          import('./doctors/doctors.module').then((m) => m.DoctorsModule),
      },
      {
        path: 'billing',
        loadChildren: () =>
          import('./billing/billing.module').then((m) => m.BillingModule),
      },
      {
        path: 'my-family',
        loadChildren: () =>
          import('./my-patient/my-patient.module').then(
            (m) => m.MyPatientModule
          ),
      },
      {
        path: 'profile-settings',
        loadChildren: () =>
          import('./profile-settings/profile-settings.module').then(
            (m) => m.ProfileSettingsModule
          ),
      },
      {
        path: 'patient-details/:id',
        loadChildren: () =>
          import(
            '../../shared/modules/patient-details/patient-details.module'
          ).then((m) => m.PatientDetailsModule),
      },
    ],
  },
];
@NgModule({
  declarations: [PatientComponent],
  imports: [
    DashboardHeaderModule,
    CommonModule,
    DashboardMenuModule,
    RouterModule.forChild(routes),
  ],
})
export class PatientModule {}
