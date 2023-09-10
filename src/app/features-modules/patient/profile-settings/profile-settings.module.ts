import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ProfileSettingsComponent } from './profile-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/modules/input/input.module';
const routes: Route[] = [
  {
    path: '',
    component: ProfileSettingsComponent,
  },
  {
    path: 'patient-details/:id',
    loadChildren: () =>
      import('../../../shared/modules/patient-details/patient-details.module').then(
        (m) => m.PatientDetailsModule
      ),
  },
]

@NgModule({
  declarations: [ProfileSettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    InputModule
  ],
  providers:[DatePipe]
})
export class ProfileSettingsModule { }




