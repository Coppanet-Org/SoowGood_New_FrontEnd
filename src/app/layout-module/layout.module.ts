import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { Route, RouterModule } from '@angular/router';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';

const routes: Route[] = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            '../features-modules/public/landing-page/landing-page.module'
          ).then((m) => m.LandingPageModule),
      },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children:[
    
        {
          path: '',
          loadChildren: () =>
            import(
              '../features-modules/admin/admin.module'
            ).then((m) => m.AdminModule),
        },
      
    ]
  },
  {
    path: 'doctor',
    component: DoctorLayoutComponent,
  },
  {
    path: 'patient',
    component: DoctorLayoutComponent,
  },
];

@NgModule({
  declarations: [
    AdminLayoutComponent,
    DoctorLayoutComponent,
    PatientLayoutComponent,
    PublicLayoutComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LayoutModule {}
