import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: CategoryComponent,
  }
]

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],

})
export class CategoryModule { }
