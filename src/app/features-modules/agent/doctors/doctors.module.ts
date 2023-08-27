import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from './doctors.component';
import { Route, RouterModule } from '@angular/router';
import { DoctorCardModule } from 'src/app/shared/modules/doctor-card/doctor-card.module';



const routes: Route[] = [
  {
    path: '',
    component: DoctorsComponent,
  },
];
@NgModule({
  declarations: [
    DoctorsComponent
  ],
  imports: [
    CommonModule,
    DoctorCardModule,
    RouterModule.forChild(routes)
  ]
})
export class DoctorsModule { }
