/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

/** rxjs Imports */
import { finalize } from 'rxjs/operators';

/** Custom Services */
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { MfaService } from '../../core/mfa/mfa.service';
import { environment } from '../../../environments/environment';
import { LayoutDirective, FlexAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatPrefix, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatDivider } from '@angular/material/divider';

/**
 * Login form component.
 */
@Component({
    selector: 'mifosx-login-form',
    templateUrl: './login-form.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./login-form.component.scss'],
    imports: [
      ReactiveFormsModule, LayoutDirective, MatFormField, FlexAlignDirective, MatPrefix, FaIconComponent,
      MatLabel, MatInput, NgIf, MatError, MatButton, MatIconButton, MatSuffix, MatCheckbox, MatProgressSpinner,
      MatDivider
    ]
})
export class LoginFormComponent implements OnInit {

  /** Login form group. */
  loginForm: FormGroup;
  /** Password input field type. */
  passwordInputType: string;
  /** True if loading. */
  loading = false;
  /** True while a passkey ceremony is in progress. */
  passkeyLoading = false;
  /** Passkey availability. */
  passkeysSupported = false;
  /** Passkey login error. */
  passkeyError = '';
  /** MFA demo note (local vault). */
  mfaDemoMode = environment.mfa?.demoMode;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private mfaService: MfaService) {  }

  ngOnInit() {
    this.createLoginForm();
    this.passwordInputType = 'password';
    this.passkeysSupported = this.mfaService.webAuthnAvailable();
  }

  login() {
    this.loading = true;
    this.passkeyError = '';
    this.loginForm.disable();
    this.authenticationService.login(this.loginForm.value)
      .pipe(finalize(() => {
        this.loginForm.reset();
        this.loginForm.markAsPristine();
        this.loginForm.enable();
        this.loading = false;
      })).subscribe();
  }

  loginWithPasskey() {
    this.passkeyError = '';
    this.passkeyLoading = true;
    this.authenticationService.loginWithPasskey()
      .pipe(finalize(() => {
        this.passkeyLoading = false;
      }))
      .subscribe({
        error: (err) => {
          this.passkeyError = err?.message || 'Passkey sign-in failed.';
        }
      });
  }

  forgotPassword() {
    console.log('Forgot Password feature currently unavailable.');
  }

  private createLoginForm() {
    this.loginForm = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'remember': false
    });
  }

}
