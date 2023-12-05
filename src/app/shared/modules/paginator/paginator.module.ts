import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    //PaginatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
    //NgbModule
  ],
  exports: [
    //PaginatorComponent
  ],
})
export class PaginatorModule { }
