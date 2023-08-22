import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentSignupComponent } from './agent-signup.component';

import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: AgentSignupComponent,
  },
]

@NgModule({
  declarations: [
    AgentSignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AgentSignupModule { }
