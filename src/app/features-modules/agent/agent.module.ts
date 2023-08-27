import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentComponent } from './agent.component';
import { Route, RouterModule } from '@angular/router';
import { DashboardMenuModule } from 'src/app/shared/modules/dashboard-menu/dashboard-menu.module';
import { MaterialModulesModule } from 'src/app/shared/modules/material-modules/material-modules.module';
import { InputModule } from 'src/app/shared/modules/input/input.module';
import { LoaderModule } from 'src/app/shared/modules/loader/loader.module';

const routes: Route[] = [
  {
    path: '',
    component: AgentComponent,
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
        path: 'patients',
        loadChildren: () =>
          import('./patients/patients.module').then(
            (m) => m.PatientsModule
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
  declarations: [
    AgentComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    DashboardMenuModule,
  ]
})
export class AgentModule { }
