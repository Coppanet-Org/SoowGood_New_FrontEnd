import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.component';
import { Route, RouterModule } from '@angular/router';
import { ServiceCardModule } from 'src/app/shared/modules/service-card/service-card.module';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: ServiceComponent,
  },
  {
    path: 'diagnostic-center',
    loadChildren: () =>
      import('../service/diagnostic-center/diagnostic-center.module').then(
        (m) => m.DiagnosticCenterModule
      ),
  },
  {
    path: 'ambulance-service',
    loadChildren: () =>
      import('../service/ambulance-service/ambulance-service.module').then(
        (m) => m.AmbulanceServiceModule
      ),
  },
];

@NgModule({
  declarations: [ServiceComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ServiceCardModule],
})
export class ServiceModule {}
