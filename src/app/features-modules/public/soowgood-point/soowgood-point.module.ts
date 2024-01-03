import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoowgoodPointComponent } from './soowgood-point.component';
import { Route, RouterModule } from '@angular/router';

const router: Route[] = [
  {
    path: '',
    component: SoowgoodPointComponent
  }
]

@NgModule({
  declarations: [
    SoowgoodPointComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class SoowgoodPointModule { }
