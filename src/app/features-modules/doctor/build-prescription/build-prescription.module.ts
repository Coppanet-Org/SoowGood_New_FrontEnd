import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildPrescriptionComponent } from './build-prescription.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { PreviousDocumentsDialogComponent } from './previous-documents-dialog/previous-documents-dialog.component';

const routes: Route[] = [
  {
    path: '',
    component: BuildPrescriptionComponent,
  }
]

@NgModule({
  declarations: [
    BuildPrescriptionComponent,
    PreviousDocumentsDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatChipsModule,
    MatButtonToggleModule,
    
  ]
})
export class BuildPrescriptionModule { }
