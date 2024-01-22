import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureDialogComponent } from './picture-dialog.component';



@NgModule({
  declarations: [PictureDialogComponent],
  imports: [
    CommonModule
  ],
  exports:[PictureDialogComponent]
})
export class PictureDialogModule { }
