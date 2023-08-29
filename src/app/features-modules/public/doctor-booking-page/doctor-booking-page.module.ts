import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorBookingPageComponent } from './doctor-booking-page.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: DoctorBookingPageComponent,
  },
]


@NgModule({
  declarations: [DoctorBookingPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DoctorBookingPageModule { }
