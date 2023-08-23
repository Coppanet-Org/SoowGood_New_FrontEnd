import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorCardComponent } from './doctor-card.component';



@NgModule({
  declarations: [
    DoctorCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DoctorCardComponent
  ]
})
export class DoctorCardModule { }
