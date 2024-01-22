import { registerLocale } from '@abp/ng.core/locale';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';
import { EmptyPageComponent } from './features-modules/public/empty-page/empty-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CoreModule } from '@abp/ng.core';
import { NgOtpInputModule } from 'ng-otp-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotToastModule } from '@ngneat/hot-toast';
import { DoctorProfileInfoFormComponent } from './core-modules/auth/signup/components/doctor-profile-info-form/doctor-profile-info-form.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MaterialModulesModule } from './shared/modules/material-modules/material-modules.module';
import { LoaderModule } from './shared/modules/loader/loader.module';
import { DegreeSpecilizationInfoFormComponent } from './core-modules/auth/signup/components/degree-specilization-info-form/degree-specilization-info-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentSuccessComponent } from './shared/components/payment-success/payment-success.component';
import { OtpInputComponent } from './shared/components/otp-input/otp-input.component';
import { PaymentFaildComponent } from './shared/components/payment-faild/payment-faild.component';
import { PaymentCancelComponent } from './shared/components/payment-cancel/payment-cancel.component';
import { CacheInterceptor } from './shared/utils/interceptors/CacheInterceptor';
import { MatNativeDateModule } from '@angular/material/core';



const routerConfig: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  // preloadingStrategy       : PreloadAllModules  [ R&D]
};



@NgModule({
  declarations: [
    AppComponent,
    EmptyPageComponent,
    DoctorProfileInfoFormComponent,
    DegreeSpecilizationInfoFormComponent,
    PaymentSuccessComponent,
    OtpInputComponent,
    PaymentFaildComponent,
    PaymentCancelComponent,
  ],
  imports: [
    BrowserModule,
    MatNativeDateModule,
    HttpClientModule,
    NgOtpInputModule,
    MatNativeDateModule,
    CoreModule.forRoot({
      environment,
      registerLocaleFn: registerLocale(),
    }),
    BrowserAnimationsModule,
    MaterialModulesModule,
    RouterModule.forRoot(appRoutes, routerConfig),
    HotToastModule.forRoot({
      position: 'bottom-right',
    }),
    LoaderModule,
    ReactiveFormsModule, FormsModule
  ],
  // add this interceptors on static page

  // providers: [
  //   { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
  // ],
  // providers: [
  //   SplashScreenService,
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: SplashInterceptor,
  //     multi: true,
  //   },
  // ],
  bootstrap: [AppComponent],
  exports: [MatDialogModule, ReactiveFormsModule, FormsModule
    //, PaginatorComponent
  ],
})
export class AppModule { }
