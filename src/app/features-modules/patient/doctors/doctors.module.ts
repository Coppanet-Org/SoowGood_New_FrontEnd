import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from './doctors.component';
import { Route, RouterModule } from '@angular/router';
import { PublicDoctorsModule } from 'src/app/shared/modules/public-doctors/public-doctors.module';

const routes: Route[] = [
  {
    path: '',
    component: DoctorsComponent,
  }
]

@NgModule({
  declarations: [
    DoctorsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PublicDoctorsModule
  ]
})
export class DoctorsModule { }



