/* eslint-disable max-len */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef, Component, DestroyRef, Input
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigateService } from "../../../../services/navigate/navigate.service";
import { AuthStateService } from '../../../../../auth/services/auth-state.service';
import { LOGIN_ICON } from '../../constants/svg-icon';
import { TOKEN_KEY } from '../../constants/auth-constatnt';



const loginName = 'Your Name';

@Component({
  selector: 'app-login-icon',
  templateUrl: './login-icon.component.html',
  styleUrls: ['./login-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginIconComponent {
  isLogout = false;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private authStateService: AuthStateService,
    private navigateService: NavigateService,
    private cdr: ChangeDetectorRef,
    private destroyRef: DestroyRef
  ) {
    iconRegistry.addSvgIconLiteral('login-icon', sanitizer.bypassSecurityTrustHtml(LOGIN_ICON));

    this.authStateService.getAuthState
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(state => {
        this.isLogout = !!state;
        this.cdr.markForCheck();
      });
  }

  @Input() loginName: string = loginName;

  onLogout(): void {
    this.authStateService.logout();
    localStorage.removeItem(TOKEN_KEY);
    this.navigateService.navigateToLogin();
  }

  onLogin(): void {
    this.navigateService.navigateToLogin();
  }
}
