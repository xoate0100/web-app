/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgIf, NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { RecurringDepositsService } from '../../recurring-deposits.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, FlexFillDirective, FlexDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

/**
 * Deposits Recurring Deposits Account Component
 */
@Component({
    selector: 'mifosx-deposit-recurring-deposits-account',
    templateUrl: './deposit-recurring-deposits-account.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./deposit-recurring-deposits-account.component.scss'],
    imports: [FaIconComponent, MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatSelect, NgFor, MatOption, FlexFillDirective, FlexDirective, MatButton, MatCardActions, LayoutAlignDirective, LayoutGapDirective, RouterLink]
})
export class DepositRecurringDepositsAccountComponent implements OnInit {

  /** Transactions Amount */
  transactionAmount: any;
  /** Outstanding Charge Amount */
  outstandingChargeAmount: any;
  /** Payment Types */
  paymentTypes: any;
  /** Account Id */
  accountId: string;
  /** Show payment details */
  showPaymentDetails = false;
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();
  /** Deposits Recurring Deposit Account form. */
  depositRecurringDepositForm: FormGroup;

  /**
   * Retrieves action details transactions template data from `resolve`
   * @param {FormBuilder} formBuilder Form Builder
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   * @param {DatePipe} datePipe Date Pipe
   * @param {SettingsService} settingsService Settings Service
   */
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private recurringDepositsService: RecurringDepositsService,
    private settingsService: SettingsService
  ) {
    this.route.data.subscribe((data: any) => {
      this.transactionAmount = data.recurringDepositsAccountActionData.amount;
      this.paymentTypes = data.recurringDepositsAccountActionData.paymentTypeOptions;
      if (data.recurringDepositsAccountActionData.outstandingChargeAmount && data.recurringDepositsAccountActionData.outstandingChargeAmount > 0) {
        this.outstandingChargeAmount = data.recurringDepositsAccountActionData.outstandingChargeAmount;
        this.transactionAmount = this.transactionAmount + this.outstandingChargeAmount;
      }
    });
    this.accountId = this.route.parent!.snapshot.params['recurringDepositAccountId']!;
  }

  ngOnInit() {
    this.createdepositRecurringDepositForm();
  }

  /**
   * Creates the deposits form.
   */
  createdepositRecurringDepositForm() {
    this.depositRecurringDepositForm = this.formBuilder.group({
      'transactionDate': [new Date(), Validators.required],
      'transactionAmount': [this.transactionAmount, Validators.required],
      'paymentTypeId': ['', Validators.required],
      'accountNumber': '',
      'chequeNumber': '',
      'routingCode': '',
      'receiptNumber': '',
      'bankNumber': '',
      'note': ''
    });
  }

  /**
   * Toggles the display of payment details
   */
  toggleDisplay() {
    this.showPaymentDetails = !(this.showPaymentDetails);
  }

  /**
   * Submits the deposits recurring deposit form
   */
  submit() {
    const transactionDate = this.depositRecurringDepositForm.value.transactionDate;
    const dateFormat = this.settingsService.dateFormat;
    const locale = this.settingsService.language.code;
    this.depositRecurringDepositForm.patchValue({
      transactionDate: this.datePipe.transform(transactionDate as Date, dateFormat)
    });
    const data = {
      ...this.depositRecurringDepositForm.value,
      dateFormat,
      locale
    };
    this.recurringDepositsService.executeRecurringDepositsAccountCommand(this.accountId, 'deposit', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
