import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DoctorProfilePageComponent } from './doctor-profile-page.component';
import { Route, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { OverviewComponent } from './overview/overview.component';
import { HospitalLocationsComponent } from './hospital-locations/hospital-locations.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const routes: Route[] = [
  {
    path: '',
    component: DoctorProfilePageComponent,
    children: [
      {
        path: 'schedule',
        component: ScheduleComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    DoctorProfilePageComponent,
    OverviewComponent,
    HospitalLocationsComponent,
    ScheduleComponent,
    ReviewsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [DatePipe],
})
export class DoctorProfilePageModule {}
