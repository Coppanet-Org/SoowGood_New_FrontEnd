import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { Route, RouterModule } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { AvailableDoctorsComponent } from './components/available-doctors/available-doctors.component';
import { BestDoctorsComponent } from './components/best-doctors/best-doctors.component';
import { CategoryComponent } from './components/category/category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LiveDoctorsComponent } from './components/live-doctors/live-doctors.component';
import { LiveDoctorCardComponent } from './components/live-doctor-card/live-doctor-card.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { SignupMarketingBannerComponent } from './components/signup-marketing-banner/signup-marketing-banner.component';
import { LiveConsultBookingDialogComponent } from './components/live-consult-booking-dialog/live-consult-booking-dialog.component';
import { MaterialModulesModule } from 'src/app/shared/modules/material-modules/material-modules.module';
import { BookingReviewModule } from 'src/app/shared/modules/booking-review/booking-review.module';

const routes: Route[] = [
  {
    path: '',
    component: LandingPageComponent,
  }
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
  ],
  imports: [CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModulesModule,
    BookingReviewModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LandingPageModule {}
