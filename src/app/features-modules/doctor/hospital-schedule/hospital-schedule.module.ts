import { HospitalInfoComponent } from './hospital-info/hospital-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MaterialModulesModule } from 'src/app/shared/modules/material-modules/material-modules.module';
import { HospitalScheduleComponent } from './hospital-schedule.component';
import { HospitalDialogComponent } from './hospital-dialog/hospital-dialog.component';

const routes: Route[] = [
  {
    path: '',
    component: HospitalScheduleComponent,
  },
];
@NgModule({
  declarations: [
    HospitalInfoComponent,
    HospitalScheduleComponent,
    HospitalDialogComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModulesModule
  ],
})
export class HospitalScheduleModule {}
