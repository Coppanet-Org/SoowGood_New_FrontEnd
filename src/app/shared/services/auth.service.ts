import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authenticated: boolean= false;

  constructor() { }

  setAuthInfoInLocalStorage( data:any): void {
    localStorage.removeItem('auth');
    localStorage.setItem('auth', JSON.stringify(data));
}

signOut(): Observable<any>
{
    // Remove the access token from the local storage
    // localStorage.removeItem('accessToken');
    localStorage.clear();

    // Set the authenticated flag to false
    this._authenticated = false;

    // Return the observable
    return of(true);
}

authInfo(): any {
  const authData = localStorage.getItem('auth');
  console.log('authData:', authData); // Check the value in the console
  return authData ? JSON.parse(authData) : null;
}
}
