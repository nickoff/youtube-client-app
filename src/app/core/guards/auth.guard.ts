import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TOKEN_KEY } from '../components/header/constants/auth-constatnt';

const isAuthenticated = (): boolean => !!localStorage.getItem(TOKEN_KEY);

export const authGuard: CanActivateFn = ():
Observable<boolean | UrlTree> => {
  const router = inject(Router);

  return of(isAuthenticated() ? true : router.parseUrl('/auth/login'));
};
