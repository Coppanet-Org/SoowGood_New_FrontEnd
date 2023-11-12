import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { DoctorSetPasswordFormComponent } from './components/doctor-set-password-form/doctor-set-password-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Route[] = [
  {
    path: '',
    component: SignupComponent,
  },
]
@NgModule({
  declarations: [
    SignupComponent,
    //DoctorProfileInfoFormComponent,
    DoctorSetPasswordFormComponent,
    //DegreeSpecilizationInfoFormComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    NgOtpInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],

  providers: [DatePipe],
})
export class SignupModule { }
