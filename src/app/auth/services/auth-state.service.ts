import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TOKEN_KEY } from 'src/app/core/components/header/constants/auth-constatnt';
import { AuthState } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  private authState = new BehaviorSubject<AuthState>(localStorage.getItem(TOKEN_KEY)
    ? AuthState.Authenticated
    : AuthState.Anonymous);

  get getAuthState(): Observable<AuthState> {
    return this.authState.asObservable();
  }

  authenticate(): void {
    this.authState.next(AuthState.Authenticated);
  }

  logout(): void {
    this.authState.next(AuthState.Anonymous);
  }
}
