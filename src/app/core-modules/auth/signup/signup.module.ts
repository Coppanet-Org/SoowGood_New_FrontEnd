import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { DoctorSetPasswordFormComponent } from './components/doctor-set-password-form/doctor-set-password-form.component';
import { DoctorProfileInfoFormComponent } from './components/doctor-profile-info-form/doctor-profile-info-form.component';
import { DegreeSpecilizationInfoFormComponent } from './components/degree-specilization-info-form/degree-specilization-info-form.component';



const routes: Route[] = [
  {
    path: '',
    component: SignupComponent,
  },
]
@NgModule({
  declarations: [
    //DoctorProfileInfoFormComponent,
    DoctorSetPasswordFormComponent,
    //DegreeSpecilizationInfoFormComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    NgOtpInputModule
  ],
  providers: [DatePipe],
})
export class SignupModule { }
