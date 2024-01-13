import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, { data: any; etag: string }>();
  private defaultExpirationTime = 10 * 60 * 1000; // 10 minutes

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    
    if (req.method !== 'GET') {
      return next.handle(req);
    }

    const cachedEntry = this.cache.get(req.url);
    if (cachedEntry) {
      console.log("cached");
      
      // Include the If-None-Match header in the request to check if the data has changed
      const clonedRequest = req.clone({
        setHeaders: { 'If-None-Match': cachedEntry.etag },
      });

      return next.handle(clonedRequest).pipe(
        tap(event => {
          if (event instanceof HttpResponse && event.status === 304) {
            // The server indicates that the data has not changed (Not Modified)
            // Use the cached data
          } else if (event instanceof HttpResponse) {
            // The server has returned new data
           
            
            this.cache.set(req.url, { data: event.body, etag: event.headers.get('ETag') || '' });
          }
        })
      );
    }

    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log("hit");
          this.cache.set(req.url, { data: event.body, etag: event.headers.get('ETag') || '' });
        }
      })
    );
  }
}
