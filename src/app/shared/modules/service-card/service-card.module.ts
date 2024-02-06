import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ServiceCardComponent } from './service-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ServiceCardComponent],
  imports: [CommonModule, RouterModule.forChild([]), NgOptimizedImage],
  exports: [ServiceCardComponent],
})
export class ServiceCardModule {}
