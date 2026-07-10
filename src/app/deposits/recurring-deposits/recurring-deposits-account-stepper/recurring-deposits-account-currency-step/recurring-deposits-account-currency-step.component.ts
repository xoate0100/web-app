/** Angular Imports */
import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Recurring Deposit Account Currency Step
 */
@Component({
  standalone: false,
  selector: 'mifosx-recurring-deposits-account-currency-step',
  templateUrl: './recurring-deposits-account-currency-step.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./recurring-deposits-account-currency-step.component.scss']
})
export class RecurringDepositsAccountCurrencyStepComponent implements OnInit, OnChanges {


  @Input() recurringDepositsAccountTemplate: any;
  @Input() recurringDepositsAccountProductTemplate: any;

  /** Recurring Deposit Account Currency Form */
  recurringDepositAccountCurrencyForm: FormGroup;
  /** Currency Data */
  currencyData: any;

  constructor(private formBuilder: FormBuilder) {
    this.createRecurringDepositAccountCurrencyForm();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.recurringDepositsAccountProductTemplate) {
      this.recurringDepositAccountCurrencyForm.patchValue({
        'currencyCode': this.recurringDepositsAccountProductTemplate.currency.code,
        'decimalPlaces': this.recurringDepositsAccountProductTemplate.currency.decimalPlaces
      });
    }
  }

  createRecurringDepositAccountCurrencyForm() {
    this.recurringDepositAccountCurrencyForm = this.formBuilder.group({
      'currencyCode': [{ value: '', disabled: true }],
      'decimalPlaces': [{ value: '', disabled: true }]
    });
  }

  /**
   * Returns Recurring Deposits Account Currency Form
   */
  get recurringDepositAccountCurrency() {
    return this.recurringDepositAccountCurrencyForm.value;
  }

}
