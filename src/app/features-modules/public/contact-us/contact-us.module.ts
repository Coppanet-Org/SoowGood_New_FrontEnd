import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';

const router: Route[] = [
  {
    path: '',
    component: ContactUsComponent
  }
]

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class ContactUsModule { }
