import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmbulanceServiceComponent } from './ambulance-service.component';
import { Route, RouterModule } from '@angular/router';

const router: Route[] = [
  {
    path: '',
    component: AmbulanceServiceComponent,
  },
];

@NgModule({
  declarations: [AmbulanceServiceComponent],
  imports: [CommonModule, RouterModule.forChild(router)],
})
export class AmbulanceServiceModule {}
