import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailableDoctorsComponent } from './available-doctors.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: AvailableDoctorsComponent,
  }
]

@NgModule({
  declarations: [
    AvailableDoctorsComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AvailableDoctorsModule { }
