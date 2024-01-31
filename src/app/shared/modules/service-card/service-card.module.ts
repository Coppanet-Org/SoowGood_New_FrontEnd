import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from './service-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ServiceCardComponent],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [ServiceCardComponent],
})
export class ServiceCardModule {}
