import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ProfileSettingsComponent } from './profile-settings.component';
import { Route, RouterModule } from '@angular/router';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { EducationInfoComponent } from './education-info/education-info.component';
import { SpecializationInfoComponent } from './specialization-info/specialization-info.component';
import { DegreeDialogComponentnt } from './degree-dialog/degree-dialog.component';
import { DegreeCardComponent } from './degree-card/degree-card.component';
import { SpecializationDialogComponent } from './specialization-dialog/specialization-dialog.component';
import { PictureDialogComponent } from './picture-dialog/picture-dialog.component';
import { MaterialModulesModule } from 'src/app/shared/modules/material-modules/material-modules.module';
import { DocumentsComponent } from './documents/documents.component';
import { InputModule } from 'src/app/shared/modules/input/input.module';
import { LoaderModule } from 'src/app/shared/modules/loader/loader.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Route[] = [
  {
    path: '',
    component: ProfileSettingsComponent,

    children: [
      {
        path: '',
        redirectTo: 'basic-info',
        pathMatch: 'full',
      },
      {
        path: 'basic-info',
        component: BasicInfoComponent,

      },
      {
        path: 'education',
        component: EducationInfoComponent
      },
      {
        path: 'specialization',
        component: SpecializationInfoComponent
      },
      {
        path: 'documents',
        component: DocumentsComponent
      },
    ],
  },
  
]

@NgModule({
  declarations: [
    ProfileSettingsComponent,
    BasicInfoComponent,
    EducationInfoComponent,
    SpecializationInfoComponent,
    DegreeDialogComponentnt,
    DegreeCardComponent,
    SpecializationDialogComponent,
    PictureDialogComponent,
    DocumentsComponent,
    
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    MaterialModulesModule,
    InputModule,
    LoaderModule,
    MatFormFieldModule,
    MatInputModule
  ],

  providers: [DatePipe], 
})
export class ProfileSettingsModule { }
