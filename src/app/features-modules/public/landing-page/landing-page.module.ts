import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { ScrollDirective } from 'src/app/shared/directive/scroll/scroll.directive';
import { BookingReviewModule } from 'src/app/shared/modules/booking-review/booking-review.module';
import { MaterialModulesModule } from 'src/app/shared/modules/material-modules/material-modules.module';
import { AppMarketingComponent } from './components/app-marketing/app-marketing.component';
import { AvailableDoctorsComponent } from './components/available-doctors/available-doctors.component';
import { BannerComponent } from './components/banner/banner.component';
import { BestDoctorsComponent } from './components/best-doctors/best-doctors.component';
import { CategoryComponent } from './components/category/category.component';
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

const routes: Route[] = [
  {
    path: '',
    component: LandingPageComponent,
  },
];
@NgModule({
  declarations: [
    LandingPageComponent,
    BannerComponent,
    AvailableDoctorsComponent,
    BestDoctorsComponent,
    CategoryComponent,
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
  ],
  imports: [
    CommonModule,
    ScrollDirective,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModulesModule,
    BookingReviewModule,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingPageModule {}
