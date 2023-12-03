import { registerLocale } from '@abp/ng.core/locale';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';
import { EmptyPageComponent } from './features-modules/public/empty-page/empty-page.component';
import { SignupComponent } from './core-modules/auth/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CoreModule } from '@abp/ng.core';
import { NgOtpInputModule } from 'ng-otp-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotToastModule } from '@ngneat/hot-toast';
import { DoctorProfileInfoFormComponent } from './core-modules/auth/signup/components/doctor-profile-info-form/doctor-profile-info-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModulesModule } from './shared/modules/material-modules/material-modules.module';
import { LoaderModule } from './shared/modules/loader/loader.module';
import { DegreeSpecilizationInfoFormComponent } from './core-modules/auth/signup/components/degree-specilization-info-form/degree-specilization-info-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentSuccessComponent } from './shared/components/payment-success/payment-success.component';
import { LoadingDirective } from './shared/directive/loading.directive';
import { OtpInputComponent } from './shared/components/otp-input/otp-input.component';
import { SignupModule } from './core-modules/auth/signup/signup.module';
import { LoginModule } from './core-modules/auth/login/login.module';
import { PaymentFaildComponent } from './shared/components/payment-faild/payment-faild.component';
import { PaymentCancelComponent } from './shared/components/payment-cancel/payment-cancel.component';
import { FilterModule } from './shared/modules/filter/filter.module';


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
    LoadingDirective,
    OtpInputComponent,
    PaymentFaildComponent,
    PaymentCancelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgOtpInputModule,
    // SignupModule,
    // LoginModule,
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
    ReactiveFormsModule,FormsModule,
    FilterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatDialogModule,ReactiveFormsModule,FormsModule],
})
export class AppModule {}
