import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowPrescriptionModalComponent } from './show-prescription-modal.component';



@NgModule({
  declarations: [
    ShowPrescriptionModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ShowPrescriptionModalComponent
  ]
})
export class ShowPrescriptionModalModule { }
