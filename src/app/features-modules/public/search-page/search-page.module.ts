import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page.component';
import { Route, RouterModule } from '@angular/router';
import { PublicDoctorsModule } from 'src/app/shared/modules/public-doctors/public-doctors.module';

const routes: Route[] = [
  {
    path: '',
    component: SearchPageComponent,
  },
]

@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PublicDoctorsModule
  ],

})
export class SearchPageModule { }
