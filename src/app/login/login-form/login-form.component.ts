/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

/** rxjs Imports */
import { finalize } from 'rxjs/operators';

/** Custom Services */
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { LayoutDirective, FlexAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatPrefix, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

/**
 * Login form component.
 */
@Component({
    selector: 'mifosx-login-form',
    templateUrl: './login-form.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./login-form.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, MatFormField, FlexAlignDirective, MatPrefix, FaIconComponent, MatLabel, MatInput, NgIf, MatError, MatButton, MatIconButton, MatSuffix, MatCheckbox, MatProgressSpinner]
})
export class LoginFormComponent implements OnInit {

  /** Login form group. */
  loginForm: FormGroup;
  /** Password input field type. */
  passwordInputType: string;
  /** True if loading. */
  loading = false;

  /**
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {AuthenticationService} authenticationService Authentication Service.
   */
  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService) {  }

  /**
   * Creates login form.
   *
   * Initializes password input field type.
   */
  ngOnInit() {
    this.createLoginForm();
    this.passwordInputType = 'password';
  }

  /**
   * Authenticates the user if the credentials are valid.
   */
  login() {
    this.loading = true;
    this.loginForm.disable();
    this.authenticationService.login(this.loginForm.value)
      .pipe(finalize(() => {
        this.loginForm.reset();
        this.loginForm.markAsPristine();
        // Angular Material Bug: Validation errors won't get removed on reset.
        this.loginForm.enable();
        this.loading = false;
      })).subscribe();
  }

  /**
   * TODO: Decision to be taken on providing this feature.
   */
  forgotPassword() {
    console.log('Forgot Password feature currently unavailable.');
  }

  /**
   * Creates login form.
   */
  private createLoginForm() {
    this.loginForm = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'remember': false
    });
  }

}
