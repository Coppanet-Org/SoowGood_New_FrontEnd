import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicDoctorsComponent } from './public-doctors.component';
import { DoctorCardComponent } from '../doctor-card/doctor-card.component';
import { RouterModule } from '@angular/router';
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
