import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorProfilePageComponent } from './doctor-profile-page.component';
import { Route, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { OverviewComponent } from './overview/overview.component';
import { HospitalLocationsComponent } from './hospital-locations/hospital-locations.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ReviewsComponent } from './reviews/reviews.component';


const routes: Route[] = [
  {
    path: '',
    component: DoctorProfilePageComponent,

  },
]

@NgModule({
  declarations: [
    DoctorProfilePageComponent,
    OverviewComponent,
    HospitalLocationsComponent,
    ScheduleComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule
  ]
})
export class DoctorProfilePageModule { }
