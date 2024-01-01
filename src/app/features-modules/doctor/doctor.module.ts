import { DashboardHeaderModule } from './../../shared/modules/dashboard-header/dashboard-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import { Route, RouterModule } from '@angular/router';
import { DashboardMenuModule } from 'src/app/shared/modules/dashboard-menu/dashboard-menu.module';
import { isAuth } from 'src/app/auth-gurd/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from 'src/app/shared/utils/interceptors/CacheInterceptor';
import {MatSidenavModule} from '@angular/material/sidenav';

const routes: Route[] = [
  {
    path: '',
    component: DoctorComponent,
    // canActivate: [isAuth],
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
        path: 'patients',
        loadChildren: () =>
          import('./my-patients/my-patients.module').then(
            (m) => m.MyPatientsModule
          ),
      },
      {
        path: 'hospital-schedule',
        loadChildren: () =>
          import('./hospital-schedule/hospital-schedule.module').then(
            (m) => m.HospitalScheduleModule
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
      {
        path: 'build-prescription/:aptId',
        loadChildren: () =>
          import('./build-prescription/build-prescription.module').then(
            (m) => m.BuildPrescriptionModule
          ),
      }
    ],
  },
];

@NgModule({
  declarations: [
    DoctorComponent
  ],
  imports: [DashboardHeaderModule,CommonModule,DashboardMenuModule,MatSidenavModule, RouterModule.forChild(routes)],
  // providers: [
  //   { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
  // ],
  
})
export class DoctorModule {}
