
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { isAuth } from 'src/app/auth-gurd/auth.service';


const routes: Route[] = [
  {
    path: '',
    component: LoginComponent,
    // canActivate:[isAuth],
  },
]

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
   
    
  ]
})
export class LoginModule { }
