/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

/** rxjs Imports */
import { finalize } from 'rxjs/operators';

/** Custom Services */
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { MfaService } from '../../core/mfa/mfa.service';
import { MfaStatus } from '../../core/mfa/mfa.models';
import { MatDivider } from '@angular/material/divider';
import { NgIf, NgFor } from '@angular/common';
import { LayoutDirective, FlexAlignDirective, FlexFillDirective } from '@ngbracket/ngx-layout/flex';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatFormField, MatPrefix, MatLabel, MatHint, MatError } from '@angular/material/form-field';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatInput } from '@angular/material/input';
import { MatButtonToggleGroup, MatButtonToggle } from '@angular/material/button-toggle';

type ChallengeView = 'choose' | 'legacy-delivery' | 'legacy-otp' | 'totp' | 'passkey';

/**
 * Two factor / MFA authentication component.
 * Supports legacy Fineract SMS/email OTP, TOTP authenticator codes, and passkeys.
 */
@Component({
    selector: 'mifosx-two-factor-authentication',
    templateUrl: './two-factor-authentication.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./two-factor-authentication.component.scss'],
    imports: [
      MatDivider, NgIf, ReactiveFormsModule, LayoutDirective, MatRadioGroup, FlexAlignDirective,
      NgFor, MatRadioButton, MatButton, FlexFillDirective, MatProgressSpinner, MatFormField,
      MatPrefix, FaIconComponent, MatLabel, MatInput, MatHint, MatError,
      MatButtonToggleGroup, MatButtonToggle
    ]
})
export class TwoFactorAuthenticationComponent implements OnInit {

  /** Available delivery methods to receive OTP. */
  twoFactorAuthenticationDeliveryMethods: any[] = [];
  /** Delivery method selected to receive OTP. */
  selectedTwoFactorAuthenticationDeliveryMethod: any;
  /** True if OTP is requested. */
  otpRequested = false;
  /** Time for which OTP is valid. */
  tokenValidityTime: number;
  /** Two factor authentication delivery method form group. */
  twoFactorAuthenticationDeliveryMethodForm: FormGroup;
  /** Two factor authentication form group. */
  twoFactorAuthenticationForm: FormGroup;
  /** TOTP challenge form. */
  totpForm: FormGroup;
  /** True if loading. */
  loading = false;
  /** True if loading. */
  resendOTPLoading = false;
  /** App MFA status for the pending user. */
  mfaStatus: MfaStatus | null = null;
  /** Active challenge view. */
  view: ChallengeView = 'choose';
  /** Error message for MFA failures. */
  errorMessage = '';
  /** Whether passkeys are usable in this browser. */
  passkeysSupported = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private mfaService: MfaService
  ) { }

  ngOnInit() {
    this.createTwoFactorAuthenticationDeliveryMethodForm();
    this.createTotpForm();
    this.passkeysSupported = this.mfaService.webAuthnAvailable();

    const pending = this.authenticationService.getPendingCredentials();
    if (pending?.username) {
      this.mfaService.getStatus(pending.username).subscribe({
        next: (status) => {
          this.mfaStatus = status;
          this.bootstrapView();
        },
        error: () => this.bootstrapView()
      });
    } else {
      this.bootstrapView();
    }

    this.authenticationService.getDeliveryMethods()
      .subscribe({
        next: (deliveryMethods: any) => {
          this.twoFactorAuthenticationDeliveryMethods = Array.isArray(deliveryMethods)
            ? deliveryMethods
            : (deliveryMethods ?? []);
          this.bootstrapView();
        },
        error: () => {
          this.twoFactorAuthenticationDeliveryMethods = [];
          this.bootstrapView();
        }
      });
  }

  get hasTotp(): boolean {
    return !!this.mfaStatus?.totpEnabled;
  }

  get hasPasskey(): boolean {
    return (this.mfaStatus?.passkeys?.length ?? 0) > 0 && this.passkeysSupported;
  }

  get hasLegacyDelivery(): boolean {
    return this.twoFactorAuthenticationDeliveryMethods.length > 0;
  }

  selectView(view: ChallengeView): void {
    this.errorMessage = '';
    this.view = view;
  }

  requestOTP() {
    this.loading = true;
    this.twoFactorAuthenticationDeliveryMethodForm.disable();
    this.selectedTwoFactorAuthenticationDeliveryMethod =
      this.twoFactorAuthenticationDeliveryMethodForm.value.twoFactorAuthenticationDeliveryMethod;

    this.authenticationService.requestOTP(this.selectedTwoFactorAuthenticationDeliveryMethod)
      .pipe(finalize(() => {
        this.twoFactorAuthenticationDeliveryMethodForm.reset();
        this.twoFactorAuthenticationDeliveryMethodForm.markAsPristine();
        this.twoFactorAuthenticationDeliveryMethodForm.enable();
        this.loading = false;
      }))
      .subscribe((response: any) => {
        this.createTwoFactorAuthenticationForm();
        this.otpRequested = true;
        this.view = 'legacy-otp';
        this.tokenValidityTime = response.tokenLiveTimeInSec;
      });
  }

  validateOTP() {
    this.loading = true;
    this.twoFactorAuthenticationForm.disable();
    this.authenticationService.validateOTP(this.twoFactorAuthenticationForm.value.otp)
      .pipe(finalize(() => {
        this.twoFactorAuthenticationForm.reset();
        this.twoFactorAuthenticationForm.markAsPristine();
        this.twoFactorAuthenticationForm.enable();
        this.loading = false;
      })).subscribe();
  }

  resendOTP() {
    this.resendOTPLoading = true;
    this.twoFactorAuthenticationForm.disable();
    this.authenticationService.requestOTP(this.selectedTwoFactorAuthenticationDeliveryMethod)
      .pipe(finalize(() => {
        this.twoFactorAuthenticationForm.reset();
        this.twoFactorAuthenticationForm.markAsPristine();
        this.twoFactorAuthenticationForm.enable();
        this.resendOTPLoading = false;
      })).subscribe();
  }

  validateTotp() {
    this.errorMessage = '';
    this.loading = true;
    this.totpForm.disable();
    this.authenticationService.validateTotpChallenge(this.totpForm.value.code)
      .pipe(finalize(() => {
        this.totpForm.reset();
        this.totpForm.markAsPristine();
        this.totpForm.enable();
        this.loading = false;
      }))
      .subscribe({
        error: (err) => {
          this.errorMessage = err?.message || 'Invalid authenticator code.';
        }
      });
  }

  validatePasskey() {
    this.errorMessage = '';
    this.loading = true;
    this.authenticationService.validatePasskeyChallenge()
      .pipe(finalize(() => {
        this.loading = false;
      }))
      .subscribe({
        error: (err) => {
          this.errorMessage = err?.message || 'Passkey authentication failed.';
        }
      });
  }

  private bootstrapView(): void {
    const options = [
      this.hasTotp ? 'totp' : null,
      this.hasPasskey ? 'passkey' : null,
      this.hasLegacyDelivery ? 'legacy-delivery' : null
    ].filter(Boolean) as ChallengeView[];

    if (options.length === 1) {
      this.view = options[0] === 'legacy-delivery' ? 'legacy-delivery' : options[0];
      return;
    }
    if (options.length > 1) {
      this.view = 'choose';
      return;
    }
    // Fineract required 2FA but no methods yet — keep legacy delivery form ready.
    this.view = 'legacy-delivery';
  }

  private createTwoFactorAuthenticationDeliveryMethodForm() {
    this.twoFactorAuthenticationDeliveryMethodForm = this.formBuilder.group({
      'twoFactorAuthenticationDeliveryMethod': ['', Validators.required]
    });
  }

  private createTwoFactorAuthenticationForm() {
    this.twoFactorAuthenticationForm = this.formBuilder.group({
      'otp': ['', Validators.required]
    });
  }

  private createTotpForm() {
    this.totpForm = this.formBuilder.group({
      'code': ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
    });
  }

}
