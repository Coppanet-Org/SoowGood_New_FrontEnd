import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { NgOtpInputModule } from 'ng-otp-input';

const route: Route[] = [
  {
    path: '',
    component: ForgotPasswordComponent,
  },
];
@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    NgOptimizedImage,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    NgOtpInputModule,
  ],
})
export class ForgotPasswordModule {}
