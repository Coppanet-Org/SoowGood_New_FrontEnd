import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { Route, RouterModule } from '@angular/router';

const router: Route[] = [
  {
    path: '',
    component: AboutUsComponent,
  },
];

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, RouterModule.forChild(router), NgOptimizedImage],
})
export class AboutUsModule {}
