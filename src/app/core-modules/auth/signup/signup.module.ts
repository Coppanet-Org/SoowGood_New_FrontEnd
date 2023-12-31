import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { DoctorSetPasswordFormComponent } from './components/doctor-set-password-form/doctor-set-password-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

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
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],

  providers: [DatePipe],
})
export class SignupModule { }
