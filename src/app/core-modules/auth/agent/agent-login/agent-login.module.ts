import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentLoginComponent } from './agent-login.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MatInputModule } from '@angular/material/input';

const routes: Route[] = [
  {
    path: '',
    component: AgentLoginComponent,
  },
]

@NgModule({
  declarations: [
    AgentLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class AgentLoginModule { }
