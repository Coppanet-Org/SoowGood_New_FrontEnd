import { HospitalInfoComponent } from './hospital-info/hospital-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MaterialModulesModule } from 'src/app/shared/modules/material-modules/material-modules.module';
import { HospitalScheduleComponent } from './hospital-schedule.component';
import { HospitalDialogComponent } from './hospital-dialog/hospital-dialog.component';
import { ScheduleInfoComponent } from './schedule-info/schedule-info.component';
import { SectionHeaderComponent } from 'src/app/shared/components/section-header/section-header.component';
import { ScheduleDialogComponent } from './schedule-dialog/schedule-dialog.component';
import { DialogHeaderComponent } from 'src/app/shared/components/dialog-header/dialog-header.component';
import { ScheduleFormComponent } from './schedule-form/schedule-form.component';

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
    ScheduleInfoComponent,
    SectionHeaderComponent,
    ScheduleDialogComponent,
    DialogHeaderComponent,
    ScheduleFormComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModulesModule
  ],
})
export class HospitalScheduleModule {}
