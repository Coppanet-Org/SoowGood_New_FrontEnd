import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagnosticCenterComponent } from './diagnostic-center.component';
import { Route, RouterModule } from '@angular/router';
import { HospitalCardComponent } from './components/hospital-card.component';

const routes: Route[] = [
  {
    path: '',
    component: DiagnosticCenterComponent,
  },
];

@NgModule({
  declarations: [DiagnosticCenterComponent, HospitalCardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DiagnosticCenterModule {}
