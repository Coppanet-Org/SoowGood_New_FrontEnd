import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { Route, RouterModule } from '@angular/router';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
// import { DashboardHeaderComponent } from '../shared/components/dashboard-header/dashboard-header.component';
import { AgentLayoutComponent } from './layouts/agent-layout/agent-layout.component';
import { PublicLayoutTwoComponent } from './layouts/public-layout-two/public-layout-two.component';

import { PaymentSuccessComponent } from '../shared/components/payment-success/payment-success.component';
import { isAuth } from '../auth-gurd/auth.service';
import { ScrollDirective } from '../shared/directive/scroll/scroll.directive';
import { PaymentFaildComponent } from '../shared/components/payment-faild/payment-faild.component';
import { PaymentCancelComponent } from '../shared/components/payment-cancel/payment-cancel.component';

const routes: Route[] = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            '../features-modules/public/landing-page/landing-page.module'
          ).then((m) => m.LandingPageModule),
      },
    ],
  },
  {
    path: 'service',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../features-modules/service/service.module').then(
            (m) => m.ServiceModule
          ),
      },
    ],
  },
  {
    path: 'search',
    component: PublicLayoutTwoComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            '../features-modules/public/search-page/search-page.module'
          ).then((m) => m.SearchPageModule),
      },
      {
        path: 'doctors/:id',
        loadChildren: () =>
          import(
            '../features-modules/public/doctor-profile-page/doctor-profile-page.module'
          ).then((m) => m.DoctorProfilePageModule),
      },
      // {
      //   path: 'doctors/:id/booking/:id',
      //   loadChildren: () =>
      //     import(
      //       '../features-modules/public/doctor-booking-page/doctor-booking-page.module'
      //     ).then((m) => m.DoctorBookingPageModule),
      // },
    ],
  },
  {
    path: 'agent',
    component: DoctorLayoutComponent,
    canActivate: [isAuth],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../features-modules/agent/agent.module').then(
            (m) => m.AgentModule
          ),
      },
    ],
  },
  {
    path: 'doctor',
    canActivate: [isAuth],
    component: DoctorLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../features-modules/doctor/doctor.module').then(
            (m) => m.DoctorModule
          ),
      },
    ],
  },
  {
    path: 'patient',
    canActivate: [isAuth],
    component: DoctorLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../features-modules/patient/patient.module').then(
            (m) => m.PatientModule
          ),
      },
    ],
  },
  {
    path: 'soowgood-point',
    component: PublicLayoutTwoComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            '../features-modules/public/soowgood-point/soowgood-point.module'
          ).then((m) => m.SoowgoodPointModule),
      },
    ],
  },
  {
    path: 'soowgood-booth',
    component: PublicLayoutTwoComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            '../features-modules/public/soowgood-booth/soowgood-booth.module'
          ).then((m) => m.SoowgoodBoothModule),
      },
    ],
  },
  {
    path: 'about-us',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../features-modules/public/about-us/about-us.module').then(
            (m) => m.AboutUsModule
          ),
      },
    ],
  },
  {
    path: 'contact-us',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            '../features-modules/public/contact-us/contact-us.module'
          ).then((m) => m.ContactUsModule),
      },
    ],
  },
  {
    path: 'terms-services',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            '../features-modules/public/tearms-services/tearms-services.module'
          ).then((m) => m.TearmsServicesModule),
      },
    ],
  },
  {
    path: 'privacy',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../features-modules/public/privacy/privacy.module').then(
            (m) => m.PrivacyModule
          ),
      },
    ],
  },
  {
    path: 'payment-success',
    component: PaymentSuccessComponent,
  },
  {
    path: 'payment-cancel',
    component: PaymentCancelComponent,
  },
  {
    path: 'payment-faild',
    component: PaymentFaildComponent,
  },
];

@NgModule({
  declarations: [
    AdminLayoutComponent,
    DoctorLayoutComponent,
    PatientLayoutComponent,
    PublicLayoutComponent,
    AgentLayoutComponent,
    HeaderComponent,
    FooterComponent,

    // DashboardHeaderComponent,
    PublicLayoutTwoComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), ScrollDirective],
})
export class LayoutModule {}
