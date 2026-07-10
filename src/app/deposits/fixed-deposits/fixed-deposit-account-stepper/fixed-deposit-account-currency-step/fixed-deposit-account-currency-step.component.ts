/** Angular Imports */
import { Component, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

/**
 * Fixed Deposit Account Currency Step
 */
@Component({
    selector: 'mifosx-fixed-deposit-account-currency-step',
    templateUrl: './fixed-deposit-account-currency-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./fixed-deposit-account-currency-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatInput, LayoutAlignDirective, MatButton, MatStepperPrevious, FaIconComponent, MatStepperNext]
})
export class FixedDepositAccountCurrencyStepComponent implements OnChanges {

  /** Fixed deposits account template */
  @Input() fixedDepositsAccountTemplate: any;
  /** Fixed deposits account and product template */
  @Input() fixedDepositsAccountProductTemplate: any;

  /** Fixed Deposit Account Currency Form */
  fixedDepositAccountCurrencyForm: FormGroup;
  /** Currency Data */
  currencyData: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   */
  constructor(private formBuilder: FormBuilder) {
    this.createFixedDepositAccountCurrencyForm();
  }

  ngOnChanges() {
    if (this.fixedDepositsAccountProductTemplate) {
      this.fixedDepositAccountCurrencyForm.patchValue({
        'currencyCode': this.fixedDepositsAccountProductTemplate.currency.code,
        'decimalPlaces': this.fixedDepositsAccountProductTemplate.currency.decimalPlaces,
        'currencyMultiple': this.fixedDepositsAccountProductTemplate.currency.inMultiplesOf
      });
    }
  }

  /**
   * Creates fd currency form.
   */
  createFixedDepositAccountCurrencyForm() {
    this.fixedDepositAccountCurrencyForm = this.formBuilder.group({
      'currencyCode': [{ value: '', disabled: true}],
      'decimalPlaces': [{ value: '', disabled: true }],
      'currencyMultiple': [{ value: '', disabled: true }]
    });
  }

}
