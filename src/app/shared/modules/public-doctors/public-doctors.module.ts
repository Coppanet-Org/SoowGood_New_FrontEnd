import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicDoctorsComponent } from './public-doctors.component';
import { DoctorCardComponent } from '../../components/doctor-card/doctor-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PublicDoctorsComponent,
    DoctorCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
exports:[
  PublicDoctorsComponent,
  
]
})
export class PublicDoctorsModule { }
