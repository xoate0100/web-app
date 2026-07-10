/** Angular Imports */
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

/** rxjs Imports */
import { Subscription } from 'rxjs';

/** Custom Models */
import { Alert } from '../core/alert/alert.model';

/** Custom Services */
import { AlertService } from '../core/alert/alert.service';

/** Environment Imports */
import { environment } from '../../environments/environment';
import { LayoutDirective, FlexDirective, LayoutAlignDirective, FlexAlignDirective } from '@ngbracket/ngx-layout/flex';
import { ShowHideDirective } from '@ngbracket/ngx-layout/extended';
import { LanguageSelectorComponent } from '../shared/language-selector/language-selector.component';
import { NgIf } from '@angular/common';
import { ServerSelectorComponent } from '../shared/server-selector/server-selector.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { TwoFactorAuthenticationComponent } from './two-factor-authentication/two-factor-authentication.component';
import { MatList, MatListItem } from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { FooterComponent } from '../shared/footer/footer.component';

/**
 * Login component.
 */
@Component({
    selector: 'mifosx-login',
    templateUrl: './login.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./login.component.scss'],
    imports: [LayoutDirective, FlexDirective, LayoutAlignDirective, ShowHideDirective, LanguageSelectorComponent, NgIf, ServerSelectorComponent, LoginFormComponent, ResetPasswordComponent, TwoFactorAuthenticationComponent, MatList, FlexAlignDirective, MatListItem, MatButton, MatMenuTrigger, FooterComponent, MatMenu, MatMenuItem]
})
export class LoginComponent implements OnInit, OnDestroy {

  public environment = environment;

  /** True if password requires a reset. */
  resetPassword = false;
  /** True if user requires two factor authentication. */
  twoFactorAuthenticationRequired = false;
  /** Subscription to alerts. */
  alert$: Subscription;

  /**
   * @param {AlertService} alertService Alert Service.
   * @param {Router} router Router for navigation.
   */
  constructor(private alertService: AlertService,
              private router: Router) { }

  /**
   * Subscribes to alert event of alert service.
   */
  ngOnInit() {
    this.alert$ = this.alertService.alertEvent.subscribe((alertEvent: any) => {
      const alertType = alertEvent.type;
      if (alertType === 'Password Expired') {
        this.twoFactorAuthenticationRequired = false;
        this.resetPassword = true;
      } else if (alertType === 'Two Factor Authentication Required') {
        this.resetPassword = false;
        this.twoFactorAuthenticationRequired = true;
      } else if (alertType === 'Authentication Success') {
        this.resetPassword = false;
        this.twoFactorAuthenticationRequired = false;
        this.router.navigate(['/'], { replaceUrl: true });
      }
    });
  }

  /**
   * Unsubscribes from alerts.
   */
  ngOnDestroy() {
    this.alert$.unsubscribe();
  }

}
