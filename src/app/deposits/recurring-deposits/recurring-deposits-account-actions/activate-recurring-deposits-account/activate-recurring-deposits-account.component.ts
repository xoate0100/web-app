/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { RecurringDepositsService } from '../../recurring-deposits.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { FlexDirective, LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';

/**
 * Activate Recurring Deposits Account Component
 */
@Component({
    selector: 'mifosx-activate-recurring-deposits-account',
    templateUrl: './activate-recurring-deposits-account.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./activate-recurring-deposits-account.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, MatFormField, FlexDirective, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class ActivateRecurringDepositsAccountComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Activate Recurring Deposits Account form. */
  activateRecurringDepositsAccountForm: FormGroup;
  /** Recurring Deposits Account Id */
  accountId: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {recurringDepositsService} recurringDepositsService Recurring Deposits Service
   * @param {DatePipe} datePipe Date Pipe
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   * @param {SavingsService} savingsService Savings Service
   */
  constructor(private formBuilder: FormBuilder,
    private recurringDepositsService: RecurringDepositsService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private router: Router,
    private settingsService: SettingsService) {
    this.accountId = this.route.parent!.snapshot.params['recurringDepositAccountId']!;
  }

  /**
   * Creates the activate recurring deposits form.
   */
  ngOnInit() {
    this.createActivateRecurringDepositsAccountForm();
  }

  /**
   * Creates the activate recurring deposits account form.
   */
  createActivateRecurringDepositsAccountForm() {
    this.activateRecurringDepositsAccountForm = this.formBuilder.group({
      'activatedOnDate': ['', Validators.required]
    });
  }

  /**
   * Submits the form and activates the recurring deposit account,
   * if successful redirects to the recurring deposit account.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const prevActivatedOnDate: Date = this.activateRecurringDepositsAccountForm.value.activatedOnDate;
    this.activateRecurringDepositsAccountForm.patchValue({
      activatedOnDate: this.datePipe.transform(prevActivatedOnDate as Date, dateFormat),
    });
    const data = {
      ...this.activateRecurringDepositsAccountForm.value,
      dateFormat,
      locale
    };
    this.recurringDepositsService.executeRecurringDepositsAccountCommand(this.accountId, 'activate', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }
}
