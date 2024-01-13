import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SplashScreenService {

  public isLoading = new BehaviorSubject<boolean>(false);

  showLoader(): void {
    this.isLoading.next(true);
  }

  hideLoader(): void {
    this.isLoading.next(false);
  }
}
