import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefundPolicyComponent } from './refund-policy.component';
import { Route, RouterModule } from '@angular/router';
const routes: Route[] = [
  {
    path: '',
    component: RefundPolicyComponent,
  },
];
@NgModule({
  declarations: [RefundPolicyComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RefundPolicyModule {}
