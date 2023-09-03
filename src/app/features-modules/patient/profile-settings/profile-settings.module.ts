import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ProfileSettingsComponent } from './profile-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/modules/input/input.module';
const routes: Route[] = [
  {
    path: '',
    component: ProfileSettingsComponent,
  }
]

@NgModule({
  declarations: [ProfileSettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    InputModule
  ]
})
export class ProfileSettingsModule { }




