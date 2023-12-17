import { Route } from '@angular/router';
import { EmptyPageComponent } from './features-modules/public/empty-page/empty-page.component';
import { isAuth } from './auth-gurd/auth.service';
import { routerGuard } from './auth-gurd/router.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./layout-module/layout.module').then((m) => m.LayoutModule),
  },


  {
    path: 'login',
    canActivate:[routerGuard],
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
    canActivate:[routerGuard],
    loadChildren: () =>
      import('./core-modules/auth/agent/agent-signup/agent-signup.module').then(
        (m) => m.AgentSignupModule
      ),
  },
  {
    path: 'agent/login',
    canActivate:[routerGuard],
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
