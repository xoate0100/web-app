/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf, NgFor, DatePipe } from '@angular/common';
import { finalize } from 'rxjs/operators';

import { MatCard } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel, MatError, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatDivider } from '@angular/material/divider';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { LayoutDirective, FlexDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';

import { AuthenticationService } from 'app/core/authentication/authentication.service';
import { MfaService } from 'app/core/mfa/mfa.service';
import { MfaPasskeyCredential, MfaStatus, TotpSetupResponse } from 'app/core/mfa/mfa.models';
import { environment } from '../../../environments/environment';

/**
 * Profile security settings: TOTP enrollment and passkey management.
 */
@Component({
  selector: 'mifosx-security-settings',
  templateUrl: './security-settings.component.html',
  styleUrls: ['./security-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    NgIf, NgFor, DatePipe, ReactiveFormsModule, MatCard, MatButton, MatFormField, MatLabel,
    MatError, MatHint, MatInput, MatProgressSpinner, MatDivider, FaIconComponent,
    LayoutDirective, FlexDirective, LayoutGapDirective
  ]
})
export class SecuritySettingsComponent implements OnInit {

  status: MfaStatus | null = null;
  setup: TotpSetupResponse | null = null;
  totpConfirmForm: FormGroup;
  passkeyNameForm: FormGroup;
  loading = false;
  message = '';
  error = '';
  demoMode = environment.mfa?.demoMode;
  passkeysSupported = false;
  username = '';

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private mfaService: MfaService
  ) {
    this.totpConfirmForm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
    });
    this.passkeyNameForm = this.formBuilder.group({
      name: ['This device', Validators.required]
    });
  }

  ngOnInit(): void {
    this.passkeysSupported = this.mfaService.webAuthnAvailable();
    this.username = this.authenticationService.getCredentials()?.username ?? '';
    this.refreshStatus();
  }

  refreshStatus(): void {
    if (!this.username) {
      return;
    }
    this.mfaService.getStatus(this.username).subscribe({
      next: (status) => {
        this.status = status;
      },
      error: (err) => {
        this.error = err?.message || 'Unable to load MFA status.';
      }
    });
  }

  beginTotpSetup(): void {
    this.clearFeedback();
    this.loading = true;
    this.mfaService.beginTotpSetup(this.username)
      .pipe(finalize(() => { this.loading = false; }))
      .subscribe({
        next: (setup) => {
          this.setup = setup;
          this.message = 'Scan the QR code with your authenticator app, then enter a code to confirm.';
        },
        error: (err) => {
          this.error = err?.message || 'Unable to start authenticator setup.';
        }
      });
  }

  confirmTotpSetup(): void {
    this.clearFeedback();
    this.loading = true;
    this.mfaService.confirmTotpSetup(this.username, this.totpConfirmForm.value.code)
      .pipe(finalize(() => { this.loading = false; }))
      .subscribe({
        next: () => {
          this.setup = null;
          this.totpConfirmForm.reset();
          this.message = 'Authenticator app enabled.';
          this.refreshStatus();
        },
        error: (err) => {
          this.error = err?.message || 'Could not confirm authenticator code.';
        }
      });
  }

  disableTotp(): void {
    this.clearFeedback();
    this.loading = true;
    this.mfaService.disableTotp(this.username)
      .pipe(finalize(() => { this.loading = false; }))
      .subscribe({
        next: () => {
          this.setup = null;
          this.message = 'Authenticator app disabled.';
          this.refreshStatus();
        },
        error: (err) => {
          this.error = err?.message || 'Could not disable authenticator.';
        }
      });
  }

  registerPasskey(): void {
    this.clearFeedback();
    this.loading = true;
    const credentials = this.authenticationService.getCredentials() ?? undefined;
    this.mfaService.registerPasskey(this.username, this.passkeyNameForm.value.name, credentials ?? undefined)
      .pipe(finalize(() => { this.loading = false; }))
      .subscribe({
        next: () => {
          this.message = 'Passkey registered. You can use it on the login screen.';
          this.refreshStatus();
        },
        error: (err) => {
          this.error = err?.message || 'Passkey registration failed.';
        }
      });
  }

  removePasskey(passkey: MfaPasskeyCredential): void {
    this.clearFeedback();
    this.loading = true;
    this.mfaService.removePasskey(this.username, passkey.id)
      .pipe(finalize(() => { this.loading = false; }))
      .subscribe({
        next: () => {
          this.message = `Removed passkey “${passkey.name}”.`;
          this.refreshStatus();
        },
        error: (err) => {
          this.error = err?.message || 'Could not remove passkey.';
        }
      });
  }

  private clearFeedback(): void {
    this.message = '';
    this.error = '';
  }
}
