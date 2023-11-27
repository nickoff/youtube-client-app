import {
  Component, OnInit, ChangeDetectionStrategy, DestroyRef, ChangeDetectorRef
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { TOKEN_KEY, TOKEN_VALUE } from 'src/app/core/components/header/constants/auth-constatnt';
import { NavigateService } from 'src/app/core/services/navigate/navigate.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthStateService } from '../../services/auth-state.service';
import { validatePasswordStrength } from '../../services/validate-password.service';
import { CredentialsModel } from '../../models';
import { AuthEmailErrors, AuthPasswordErrors } from '../../enums';
import { ERROR_EMAIL_MESSAGE, ERROR_PASSWORD_MESSAGE } from '../../constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  isSubmitted = false;

  credentials: FormGroup<CredentialsModel> = new FormGroup({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required, validatePasswordStrength()] })
  });

  password = this.credentials.controls.password;
  email = this.credentials.controls.email;

  errorKeys?: string[];
  isShowEmailError = false;
  isShowPasswordError = false;
  isShowNonRequiredPasswordErrors = false;
  emailErrors?: string;
  passwordErrors?: string;
  nonRequiredPasswordError?: ValidationErrors;


  constructor(
    private authStateService: AuthStateService,
    private navigateService: NavigateService,
    private destroyRef: DestroyRef,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.credentials.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.refreshErrorsState();
        this.cdr.markForCheck();
      });
  }

  getShowEmailError(): boolean {
    return this.email.errors !== null
      && this.email.errors && (this.email.dirty || this.isSubmitted);
  }

  getEmailErrors(): string {
    return this.email.errors !== null
      && ((this.email.errors[AuthEmailErrors.invalidEmail] && ERROR_EMAIL_MESSAGE.email)
        || (this.email.errors[AuthEmailErrors.required] && ERROR_EMAIL_MESSAGE.required));
  }

  getShowPasswordError(): boolean {
    return this.password.errors !== null
      && this.password.errors && (this.password.dirty
        || this.isSubmitted);
  }

  getShowNonRequiredPasswordErrors(): boolean {
    return this.password.errors !== null
      && this.password.errors
      && !this.password.errors[AuthPasswordErrors.required]
      && this.password.dirty;
  }

  getPasswordErrors(): string {
    return this.password.errors !== null
      && ((this.password.errors[AuthPasswordErrors.required] && ERROR_PASSWORD_MESSAGE.required)
        || (this.password.errors && ERROR_PASSWORD_MESSAGE.validatePasswordStrength));
  }

  getPasswordErrorKeys(): string[] {
    return this.password.errors
      ? Object.keys(this.password.errors)
      : [];
  }

  getNonRequiredPasswordError(): ValidationErrors | undefined {
    return this.password.errors ?? undefined;
  }

  private refreshErrorsState(): void {
    this.errorKeys = this.getPasswordErrorKeys();
    this.isShowEmailError = this.getShowEmailError();
    this.emailErrors = this.getEmailErrors();
    this.isShowPasswordError = this.getShowPasswordError();
    this.passwordErrors = this.getPasswordErrors();
    this.isShowNonRequiredPasswordErrors = this.getShowNonRequiredPasswordErrors();
    this.nonRequiredPasswordError = this.getNonRequiredPasswordError();
  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.refreshErrorsState();

    if (!this.credentials.valid) return;

    this.authStateService.authenticate();
    localStorage.setItem(TOKEN_KEY, TOKEN_VALUE);
    this.navigateService.navigateToRoot();
  }
}
