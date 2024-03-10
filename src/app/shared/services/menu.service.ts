import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private mobileMenu = new Subject<boolean>();
  menuVisibility$: Observable<boolean> = this.mobileMenu.asObservable();
  isVisible = false;
  constructor() {}

  visible(status: boolean) {
    this.mobileMenu.next(!status);
  }
}
