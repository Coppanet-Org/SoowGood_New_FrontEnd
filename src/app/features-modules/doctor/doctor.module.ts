import { PatientModule } from './../patient/patient.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import { Route, RouterModule } from '@angular/router';
import { RightSidebarComponent } from './component/right-sidebar/right-sidebar.component';
import { DashboardMenuComponent } from 'src/app/shared/components/dashboard-menu/dashboard-menu.component';
import { DashboardMenuItemComponent } from 'src/app/shared/components/dashboard-menu-item/dashboard-menu-item.component';
import { MyPatientsComponent } from './component/my-patients/my-patients.component';


const routes: Route[] = [
  {
    path: '',
    component: DoctorComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./component/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'appointments',
        loadChildren: () =>
          import('./component/appointments/appointments.module').then(
            (m) => m.AppointmentsModule
          ),
      },
      {
        path: 'patients',
        loadChildren: () =>
          import('./component/my-patients/my-patients.module').then(
            (m) => m.MyPatientsModule
          ),
      },
      {
        path: 'schedule',
        loadChildren: () =>
          import('./component/appointments/appointments.module').then(
            (m) => m.AppointmentsModule
          ),
      },
      {
        path: 'billing',
        loadChildren: () =>
          import('./component/billing/billing.module').then(
            (m) => m.BillingModule
          ),
      },
      {
        path: 'profile-settings',
        loadChildren: () =>
          import('./component/profile-settings/profile-settings.module').then(
            (m) => m.ProfileSettingsModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [
    DoctorComponent,
    DashboardMenuComponent,
    RightSidebarComponent,
    DashboardMenuItemComponent,

  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DoctorModule {}
