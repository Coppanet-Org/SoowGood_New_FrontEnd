import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NgOtpInputModule } from  'ng-otp-input';
const routerConfig: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  // preloadingStrategy       : PreloadAllModules  [ R&D]
};

@NgModule({
  declarations: [
    AppComponent, 
    EmptyPageComponent, 
    SignupComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgOtpInputModule,
    CoreModule.forRoot({
      environment,
      registerLocaleFn: registerLocale(),
    }),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
