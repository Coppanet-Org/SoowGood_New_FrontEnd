import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TearmsServicesComponent } from './tearms-services.component';
import { Route, RouterModule } from '@angular/router';

const routes:[Route]=[
  {
    path:'',
    component:TearmsServicesComponent
  }
]

@NgModule({
  declarations: [TearmsServicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[TearmsServicesComponent]
})
export class TearmsServicesModule { }
