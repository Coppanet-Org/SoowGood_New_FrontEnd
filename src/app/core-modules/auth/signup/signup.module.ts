import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { DoctorSetPasswordFormComponent } from './components/doctor-set-password-form/doctor-set-password-form.component';



const routes: Route[] = [
  {
    path: '',
    component: SignupComponent,
  },
]
@NgModule({
  declarations: [
    
  
    DoctorSetPasswordFormComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    NgOtpInputModule
  ]
})
export class SignupModule { }
