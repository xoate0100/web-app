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
 * Close Recurring Deposits Account Component
 */
@Component({
    selector: 'mifosx-close-recurring-deposits-account',
    templateUrl: './close-recurring-deposits-account.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./close-recurring-deposits-account.component.scss'],
    imports: [FaIconComponent, MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, FlexFillDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatSelect, NgFor, MatOption, FlexDirective, MatButton, MatCardActions, LayoutAlignDirective, LayoutGapDirective, RouterLink]
})
export class CloseRecurringDepositsAccountComponent implements OnInit {

  /** Maturity Amount */
  maturityAmount: any;
  /** On Account Closure Options */
  onAccountClosureOptions: any;
  /** Payment Types */
  paymentTypes: any;
  /** Title */
  title: string;
  /** Account Id */
  accountId: string;
  /** Show payment details */
  showPaymentDetails = false;
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();
  /** Close Recurring Deposit Account form. */
  closeRecurringDepositForm: FormGroup;

  /**
   * Retrieves action details template data from `resolve`
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
      this.maturityAmount = data.recurringDepositsAccountActionData.maturityAmount;
      this.onAccountClosureOptions = data.recurringDepositsAccountActionData.onAccountClosureOptions;
      this.paymentTypes = data.recurringDepositsAccountActionData.paymentTypeOptions;
      if (data.recurringDepositsAccountActionData.maturityAmount) {
        this.title = 'Recurring Deposit Closure on Maturity';
      } else {
        this.title = 'Recurring Deposit Closure';
      }
    });
    this.accountId = this.route.parent!.snapshot.params['recurringDepositAccountId']!;
  }

  ngOnInit() {
    this.createcloseRecurringDepositForm();
  }

  /**
   * Creates the close form.
   */
  createcloseRecurringDepositForm() {
    this.closeRecurringDepositForm = this.formBuilder.group({
      'closedOnDate': [new Date(), Validators.required],
      'maturityAmount': [{ value: this.maturityAmount, disabled: true}],
      'onAccountClosureId': ['', Validators.required],
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
   * Submits the close recurring deposit form
   */
  submit() {
    const closedOnDate = this.closeRecurringDepositForm.value.closedOnDate;
    const dateFormat = this.settingsService.dateFormat;
    const locale = this.settingsService.language.code;
    this.closeRecurringDepositForm.patchValue({
      closedOnDate: this.datePipe.transform(closedOnDate as Date, dateFormat)
    });
    const data = {
      ...this.closeRecurringDepositForm.value,
      dateFormat,
      locale
    };
    this.recurringDepositsService.executeRecurringDepositsAccountCommand(this.accountId, 'close', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
