import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';



const MatModules:any = [
  MatStepperModule,
  FormsModule,
  ReactiveFormsModule,
]


@NgModule({
  imports: [MatModules],
  exports:[MatModules]
})
export class MaterialModulesModule { }
