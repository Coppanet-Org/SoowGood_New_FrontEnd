import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [CommonModule, ReactiveFormsModule, MatInputModule],
  exports: [ResetPasswordComponent],
})
export class ResetPasswordModule {}
