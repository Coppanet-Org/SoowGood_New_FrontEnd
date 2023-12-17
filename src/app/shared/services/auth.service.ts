import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authenticated: boolean = false;

  constructor(
    //private oAuthService: OAuthService,
    private _router: Router,
  ) { }

  setAuthInfoInLocalStorage(data: any): void {
    localStorage.removeItem('auth');
    localStorage.setItem('auth', JSON.stringify(data));
  }

  signOut(): Observable<any> {
    localStorage.clear();
    this._authenticated = false;
    this._router.navigate(['/']);
    return of(true);
  }

  authInfo(): any {
    const authData = localStorage.getItem('auth');
    return authData ? JSON.parse(authData) : null;
  }
}




