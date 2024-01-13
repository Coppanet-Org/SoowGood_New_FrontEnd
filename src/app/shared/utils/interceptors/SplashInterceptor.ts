
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { SplashScreenService } from './splash-screen.service';

@Injectable()
export class SplashInterceptor implements HttpInterceptor {
    constructor(private loadingService: SplashScreenService) {}

    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      this.loadingService.showLoader();
  
      return next.handle(request).pipe(
        finalize(() => {
          this.loadingService.hideLoader();
        })
      );
    }
}