import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';



const MatModules:any = [
  MatTabsModule
]


@NgModule({
  imports: [MatModules],
  exports:[MatModules]
})
export class MaterialModulesModule { }
