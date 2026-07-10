/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { RecurringDepositsService } from '../../recurring-deposits.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';


/**
 * Reject Recurring Deposits Account Component
 */
@Component({
    selector: 'mifosx-reject-recurring-deposits-account',
    templateUrl: './reject-recurring-deposits-account.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./reject-recurring-deposits-account.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class RejectRecurringDepositsAccountComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Reject Recurring Deposits Account form. */
  rejectRecurringDepositsAccountForm: FormGroup;
  /** Recurring Deposits Account Id */
  accountId: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {RecurringDepositsService} recurringDepositsService Recurring Deposits Service
   * @param {DatePipe} datePipe Date Pipe
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   * @param {SettingsService} settingsService Settings Service
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
   * Creates the reject recurring deposits form.
   */
  ngOnInit() {
    this.createRejectRecurringDepositsAccountForm();
  }

  /**
   * Creates the reject recurring deposits account form.
   */
  createRejectRecurringDepositsAccountForm() {
    this.rejectRecurringDepositsAccountForm = this.formBuilder.group({
      'rejectedOnDate': ['', Validators.required],
      'note': ['']
    });
  }

  /**
   * Submits the form and rejects the recurring deposit account,
   * if successful redirects to the recurring deposit account.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const prevRejectedOnDate: Date = this.rejectRecurringDepositsAccountForm.value.rejectedOnDate;
    this.rejectRecurringDepositsAccountForm.patchValue({
      rejectedOnDate: this.datePipe.transform(prevRejectedOnDate as Date, dateFormat),
    });
    const data = {
      ...this.rejectRecurringDepositsAccountForm.value,
      dateFormat,
      locale
    };
    this.recurringDepositsService.executeRecurringDepositsAccountCommand(this.accountId, 'reject', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
