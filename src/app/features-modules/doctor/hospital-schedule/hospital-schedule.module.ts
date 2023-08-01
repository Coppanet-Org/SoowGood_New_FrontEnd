import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalScheduleComponent } from './hospital-schedule.component';
import { Route, RouterModule } from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';


const routes: Route[] = [
  {
    path: '',
    component: HospitalScheduleComponent,
  }]
@NgModule({
  declarations: [HospitalScheduleComponent],

 imports: [CommonModule, RouterModule.forChild(routes),MatStepperModule],
  
})
export class HospitalScheduleModule { }
