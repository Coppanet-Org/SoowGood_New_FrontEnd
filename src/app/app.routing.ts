

import { Route } from '@angular/router';
import { EmptyPageComponent } from './features-modules/public/empty-page/empty-page.component';


export const appRoutes: Route[] = [

        {
            path: '',
            loadChildren: () => import('./layout-module/layout.module').then(m => m.LayoutModule)
        },
        {
            path: 'login',
            loadChildren: () => import('./core-modules/auth/login/login.module').then(m => m.LoginModule)
        },
        {
            path: 'signup',
            loadChildren: () => import('./core-modules/auth/signup/signup.module').then(m => m.SignupModule)
        },
        {
        path:"**",
        component : EmptyPageComponent
        }
]