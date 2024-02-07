import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DashboardHeaderComponent } from './dashboard-header.component';
import { DynamicDialogModule } from '../dynamic-dialog/dynamic-dialog.module';

@NgModule({
  declarations: [DashboardHeaderComponent],
  imports: [CommonModule, NgOptimizedImage, DynamicDialogModule],
  exports: [DashboardHeaderComponent],
})
export class DashboardHeaderModule {}
