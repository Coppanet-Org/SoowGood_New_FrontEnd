import { MaterialModulesModule } from './../../shared/modules/material-modules/material-modules.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PatientComponent } from './patient.component';
import { DashboardMenuModule } from 'src/app/shared/modules/dashboard-menu/dashboard-menu.module';




const routes: Route[] = [
  {
    path: '',
    component: PatientComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
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
          import('./doctors/doctors.module').then(
            (m) => m.DoctorsModule
          ),
      },
      {
        path: 'billing',
        loadChildren: () =>
          import('./billing/billing.module').then(
            (m) => m.BillingModule
          ),
      },
      {
        path: 'profile-settings',
        loadChildren: () =>
          import('./profile-settings/profile-settings.module').then(
            (m) => m.ProfileSettingsModule
          ),
      },
    ],
  },
];
@NgModule({
  declarations: [PatientComponent],
  imports: [
    CommonModule,DashboardMenuModule,RouterModule.forChild(routes)
  ]
})
export class PatientModule { }
