import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicDoctorsComponent } from './public-doctors.component';
import { DoctorCardModule } from '../doctor-card/doctor-card.module';
import { SkeletonModule } from '../skeleton/skeleton.module';




@NgModule({
  declarations: [
    PublicDoctorsComponent
    ],
  imports: [
    CommonModule,
    DoctorCardModule,
    SkeletonModule,
  ],
exports:[
  PublicDoctorsComponent
]
})
export class PublicDoctorsModule { }
