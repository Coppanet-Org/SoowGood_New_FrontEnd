import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { ScrollDirective } from 'src/app/shared/directive/scroll/scroll.directive';
import { BookingReviewModule } from 'src/app/shared/modules/booking-review/booking-review.module';
import { MaterialModulesModule } from 'src/app/shared/modules/material-modules/material-modules.module';
import { AppMarketingComponent } from './components/app-marketing/app-marketing.component';
import { BannerComponent } from './components/banner/banner.component';
import { ClientFeedbackComponent } from './components/client-feedback/client-feedback.component';
import { LiveConsultBookingDialogComponent } from './components/live-consult-booking-dialog/live-consult-booking-dialog.component';
import { LiveDoctorCardComponent } from './components/live-doctor-card/live-doctor-card.component';
import { LiveDoctorsComponent } from './components/live-doctors/live-doctors.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { PricingCardIncludeListComponent } from './components/pricing/pricing-card-include-list/pricing-card-include-list.component';
import { PricingCardComponent } from './components/pricing/pricing-card/pricing-card.component';
import { PricingModalComponent } from './components/pricing/pricing-modal/pricing-modal.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { SignupMarketingBannerComponent } from './components/signup-marketing-banner/signup-marketing-banner.component';
import { LandingPageComponent } from './landing-page.component';
import { AccoutDeleteRequestComponent } from '../accout-delete-request/accout-delete-request.component';
import { PaymentSuccessComponent } from '../payment-success/payment-success.component';
import { PaymentCancelComponent } from '../payment-cancel/payment-cancel.component';
import { PaymentFaildComponent } from '../payment-faild/payment-faild.component';
import { HeaderModule } from 'src/app/layout-module/header-footer/header/header.module';
import { FooterComponent } from 'src/app/layout-module/header-footer/footer/footer.component';
import { FooterModule } from 'src/app/layout-module/header-footer/footer/footer.module';
import { SkeletonModule } from 'src/app/shared/modules/skeleton/skeleton.module';
import { ServiceCardComponent } from './components/service-card/service-card.component';
const routes: Route[] = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'acoount-delete-request',
    component: AccoutDeleteRequestComponent,
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
    LandingPageComponent,
    BannerComponent,
    LiveDoctorsComponent,
    LiveDoctorCardComponent,
    PricingComponent,
    SignupMarketingBannerComponent,
    LiveConsultBookingDialogComponent,
    AppMarketingComponent,
    ClientFeedbackComponent,
    NewsletterComponent,
    PricingCardComponent,
    PricingCardIncludeListComponent,
    PricingModalComponent,
    AccoutDeleteRequestComponent,
    ServiceCardComponent,
  ],
  imports: [
    CommonModule,
    ScrollDirective,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModulesModule,
    BookingReviewModule,
    NgOptimizedImage,
    FormsModule,
    HeaderModule,
    FooterModule,
    SkeletonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingPageModule {}
