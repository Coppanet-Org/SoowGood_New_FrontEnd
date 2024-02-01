import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/modules/input/input.module';
import { ProfileSettingsComponent } from './profile-settings.component';
import { ResetPasswordModule } from 'src/app/shared/modules/reset-password/reset-password.module';
const routes: Route[] = [
  {
    path: '',
    component: ProfileSettingsComponent,
  },
  {
    path: 'patient-details/:id',
    loadChildren: () =>
      import(
        '../../../shared/modules/patient-details/patient-details.module'
      ).then((m) => m.PatientDetailsModule),
  },
];

@NgModule({
  declarations: [ProfileSettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    InputModule,
    ResetPasswordModule,
  ],
  providers: [DatePipe],
})
export class ProfileSettingsModule {}
