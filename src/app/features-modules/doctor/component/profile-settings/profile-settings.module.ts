import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSettingsComponent } from './profile-settings.component';
import { Route, RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

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
    CommonModule,RouterModule.forChild(routes),
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class ProfileSettingsModule { }
