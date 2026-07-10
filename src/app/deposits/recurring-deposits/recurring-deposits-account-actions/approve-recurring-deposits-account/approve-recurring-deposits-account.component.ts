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
 * Approve Recurring Deposits Account Component
 */
@Component({
    selector: 'mifosx-approve-recurring-deposits-account',
    templateUrl: './approve-recurring-deposits-account.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./approve-recurring-deposits-account.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class ApproveRecurringDepositsAccountComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Approve Recurring Deposits Account form. */
  approveRecurringDepositsAccountForm: FormGroup;
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
   * Creates the approve recurring deposits form.
   */
  ngOnInit() {
    this.createApproveRecurringDepositsAccountForm();
  }

  /**
   * Creates the approve recurring deposits account form.
   */
  createApproveRecurringDepositsAccountForm() {
    this.approveRecurringDepositsAccountForm = this.formBuilder.group({
      'approvedOnDate': ['', Validators.required],
      'note': ['']
    });
  }

  /**
   * Submits the form and approves the recurring deposit account,
   * if successful redirects to the recurring deposit account.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const prevApprovedOnDate: Date = this.approveRecurringDepositsAccountForm.value.approvedOnDate;
    this.approveRecurringDepositsAccountForm.patchValue({
      approvedOnDate: this.datePipe.transform(prevApprovedOnDate as Date, dateFormat),
    });
    const data = {
      ...this.approveRecurringDepositsAccountForm.value,
      dateFormat,
      locale
    };
    this.recurringDepositsService.executeRecurringDepositsAccountCommand(this.accountId, 'approve', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
