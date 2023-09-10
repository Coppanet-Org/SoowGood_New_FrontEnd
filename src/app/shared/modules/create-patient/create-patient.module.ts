import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePatientComponent } from './create-patient.component';



@NgModule({
  declarations: [
    CreatePatientComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CreatePatientComponent
  ]
})
export class CreatePatientModule { }
