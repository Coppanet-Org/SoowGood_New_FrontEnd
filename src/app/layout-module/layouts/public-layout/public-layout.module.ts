import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicLayoutComponent } from './public-layout.component';
import { HeaderModule } from '../../header-footer/header/header.module';
import { Route, RouterModule } from '@angular/router';
import { DoctorLayoutComponent } from '../doctor-layout/doctor-layout.component';
import { isAuth } from 'src/app/auth-gurd/auth.service';
import { LandingPageComponent } from 'src/app/features-modules/public/landing-page/landing-page.component';
import { LandingPageModule } from 'src/app/features-modules/public/landing-page/landing-page.module';
import { FooterModule } from '../../header-footer/footer/footer.module';

const routes: Route[] = [
  {
    path: '',

    children: [
      {
        path: '',
        pathMatch: 'full',
        component: LandingPageComponent,
        // loadChildren: () =>
        //   import(
        //     '../../../features-modules/public/landing-page/landing-page.module'
        //   ).then((m) => m.LandingPageModule),
      },
      {
        path: 'search',
        component: PublicLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import(
                '../../../features-modules/public/search-page/search-page.module'
              ).then((m) => m.SearchPageModule),
          },
          {
            path: 'doctors/:id',
            loadChildren: () =>
              import(
                '../../../features-modules/public/doctor-profile-page/doctor-profile-page.module'
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
              import('../../../features-modules/agent/agent.module').then(
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
              import('../../../features-modules/doctor/doctor.module').then(
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
              import('../../../features-modules/patient/patient.module').then(
                (m) => m.PatientModule
              ),
          },
        ],
      },
      {
        path: 'soowgood-point',
        component: PublicLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import(
                '../../../features-modules/public/soowgood-point/soowgood-point.module'
              ).then((m) => m.SoowgoodPointModule),
          },
        ],
      },
      {
        path: 'soowgood-booth',
        component: PublicLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import(
                '../../../features-modules/public/soowgood-booth/soowgood-booth.module'
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
              import(
                '../../../features-modules/public/about-us/about-us.module'
              ).then((m) => m.AboutUsModule),
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
                '../../../features-modules/public/contact-us/contact-us.module'
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
                '../../../features-modules/public/tearms-services/tearms-services.module'
              ).then((m) => m.TearmsServicesModule),
          },
        ],
      },
      {
        path: 'refund-policy',
        component: PublicLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import(
                '../../../features-modules/public/refund-policy/refund-policy.module'
              ).then((m) => m.RefundPolicyModule),
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
              import(
                '../../../features-modules/public/privacy/privacy.module'
              ).then((m) => m.PrivacyModule),
          },
        ],
      },
      {
        path: 'complete-profile',
        component: PublicLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import(
                '../../../core-modules/auth/complete-profile/complete-profile.module'
              ).then((m) => m.CompleteProfileModule),
          },
        ],
      },
    ],
  },
];

@NgModule({
  declarations: [PublicLayoutComponent, DoctorLayoutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild(routes),
    LandingPageModule,
    FooterModule,
  ],
  exports: [PublicLayoutComponent],
})
export class PublicLayoutModule {}
