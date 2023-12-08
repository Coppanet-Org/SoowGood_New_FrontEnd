import { NgModule } from '@angular/core';
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
  ],
  imports: [CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
})
export class LandingPageModule {}
