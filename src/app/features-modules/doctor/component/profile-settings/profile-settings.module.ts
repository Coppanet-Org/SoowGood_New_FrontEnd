import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSettingsComponent } from './profile-settings.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: ProfileSettingsComponent,
  },
  
]

@NgModule({
  declarations: [
    ProfileSettingsComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class ProfileSettingsModule { }
