import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentCardComponent } from './appointment-card.component';



@NgModule({
  declarations: [
    AppointmentCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppointmentCardComponent
  ]
})
export class AppointmentCardModule { }
