import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorProfilePageComponent } from './doctor-profile-page.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: DoctorProfilePageComponent,
  },
]

@NgModule({
  declarations: [
    DoctorProfilePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DoctorProfilePageModule { }
