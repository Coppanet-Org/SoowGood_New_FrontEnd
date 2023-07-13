import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { Route, RouterModule } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { AvailableDoctorsComponent } from './components/available-doctors/available-doctors.component';
import { BestDoctorsComponent } from './components/best-doctors/best-doctors.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Route[] = [
  {
    path: '',
    component: LandingPageComponent,
  }
];
@NgModule({
  declarations: [LandingPageComponent, BannerComponent,AvailableDoctorsComponent,BestDoctorsComponent,CategoryComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LandingPageModule {}
