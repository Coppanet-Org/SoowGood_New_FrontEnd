import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicDoctorsComponent } from './public-doctors.component';
import { DoctorCardModule } from '../doctor-card/doctor-card.module';




@NgModule({
  declarations: [
    PublicDoctorsComponent
    ],
  imports: [
    CommonModule,
    DoctorCardModule
  ],
exports:[
  PublicDoctorsComponent
]
})
export class PublicDoctorsModule { }
