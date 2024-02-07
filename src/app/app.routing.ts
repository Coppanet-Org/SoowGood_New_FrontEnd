import { Route, RouterModule } from '@angular/router';
import { EmptyPageComponent } from './features-modules/public/empty-page/empty-page.component';
import { isAuth } from './auth-gurd/auth.service';
import { routerGuard } from './auth-gurd/router.guard';
import { NgModule } from '@angular/core';
import { PublicLayoutComponent } from './layout-module/layouts/public-layout/public-layout.component';
import { PublicLayoutModule } from './layout-module/layouts/public-layout/public-layout.module';

export const appRoutes: Route[] = [
  {
    path: '',
    component: PublicLayoutComponent,
    // loadChildren: () =>
    //   import('./features-modules/public/landing-page/landing-page.module').then(
    //     (m) => m.LandingPageModule
    //   ),
  },

  {
    path: 'login',
    canActivate: [routerGuard],
    loadChildren: () =>
      import('./core-modules/auth/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'signup',
    //canActivate:[routerGuard],
    loadChildren: () =>
      import('./core-modules/auth/signup/signup.module').then(
        (m) => m.SignupModule
      ),
  },
  {
    path: 'agent/signup',
    canActivate: [routerGuard],
    loadChildren: () =>
      import('./core-modules/auth/agent/agent-signup/agent-signup.module').then(
        (m) => m.AgentSignupModule
      ),
  },
  {
    path: 'agent/login',
    canActivate: [routerGuard],
    loadChildren: () =>
      import('./core-modules/auth/agent/agent-login/agent-login.module').then(
        (m) => m.AgentLoginModule
      ),
  },
  {
    path: '**',
    component: EmptyPageComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes), PublicLayoutModule],
  exports: [RouterModule],
})
export class AppRouting {}
