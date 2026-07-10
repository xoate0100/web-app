import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'mifosx-recurring-deposit-product-currency-step',
    templateUrl: './recurring-deposit-product-currency-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./recurring-deposit-product-currency-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatSelect, NgFor, MatOption, MatError, MatInput, LayoutAlignDirective, MatButton, MatStepperPrevious, FaIconComponent, MatStepperNext]
})
export class RecurringDepositProductCurrencyStepComponent implements OnInit {

  @Input() recurringDepositProductsTemplate: any;

  recurringDepositProductCurrencyForm: FormGroup;

  currencyData: any;

  constructor(private formBuilder: FormBuilder) {
    this.createrecurringDepositProductCurrencyForm();
  }

  ngOnInit() {
    this.currencyData = this.recurringDepositProductsTemplate.currencyOptions;
    if (!(this.recurringDepositProductsTemplate === undefined) && this.recurringDepositProductsTemplate.id) {
      this.recurringDepositProductCurrencyForm.patchValue({
        'currencyCode': this.recurringDepositProductsTemplate.currency.code,
        'digitsAfterDecimal': this.recurringDepositProductsTemplate.currency.decimalPlaces,
        'inMultiplesOf': this.recurringDepositProductsTemplate.currency.inMultiplesOf
      });
    } else {
      this.recurringDepositProductCurrencyForm.patchValue({
        'currencyCode': this.currencyData[0].code,
        'digitsAfterDecimal': 2
      });
    }

  }

  createrecurringDepositProductCurrencyForm() {
    this.recurringDepositProductCurrencyForm = this.formBuilder.group({
      'currencyCode': ['', Validators.required],
      'digitsAfterDecimal': ['', Validators.required],
      'inMultiplesOf': ['', Validators.required]
    });
  }

  get recurringDepositProductCurrency() {
    return this.recurringDepositProductCurrencyForm.value;
  }

}
