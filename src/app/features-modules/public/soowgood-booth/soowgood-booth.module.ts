import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoowgoodBoothComponent } from './soowgood-booth.component';
import { Route, RouterModule } from '@angular/router';

const router: Route[] = [
  {
    path: '',
    component: SoowgoodBoothComponent
  }
]

@NgModule({
  declarations: [
    SoowgoodBoothComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class SoowgoodBoothModule { }
