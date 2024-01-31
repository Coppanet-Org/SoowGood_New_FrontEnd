import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSettingsComponent } from './profile-settings.component';
import { Route, RouterModule } from '@angular/router';
import { InputModule } from 'src/app/shared/modules/input/input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordModule } from 'src/app/shared/modules/reset-password/reset-password.module';

const routes: Route[] = [
  {
    path: '',
    component: ProfileSettingsComponent,
  },
];

@NgModule({
  declarations: [ProfileSettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InputModule,
    ReactiveFormsModule,
    FormsModule,
    ResetPasswordModule,
  ],
})
export class ProfileSettingsModule {}
