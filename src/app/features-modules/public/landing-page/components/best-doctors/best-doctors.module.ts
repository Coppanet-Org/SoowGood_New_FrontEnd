import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestDoctorsComponent } from './best-doctors.component';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
  {
    path: '',
    component: BestDoctorsComponent,
  }
]

@NgModule({
  declarations: [
    BestDoctorsComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],

})
export class BestDoctorsModule { }
