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
    selector: 'mifosx-loan-product-currency-step',
    templateUrl: './loan-product-currency-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./loan-product-currency-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatSelect, NgFor, MatOption, MatError, MatInput, LayoutAlignDirective, MatButton, MatStepperPrevious, FaIconComponent, MatStepperNext]
})
export class LoanProductCurrencyStepComponent implements OnInit {

  @Input() loanProductsTemplate: any;

  loanProductCurrencyForm: FormGroup;

  currencyData: any;

  constructor(private formBuilder: FormBuilder) {
    this.createLoanProductCurrencyForm();
  }

  ngOnInit() {
    this.currencyData = this.loanProductsTemplate.currencyOptions;

    this.loanProductCurrencyForm.patchValue({
      'currencyCode': this.loanProductsTemplate.currency.code || this.currencyData[0].code,
      'digitsAfterDecimal': this.loanProductsTemplate.installmentAmountInMultiplesOf ? this.loanProductsTemplate.currency.decimalPlaces : 2,
      'inMultiplesOf': this.loanProductsTemplate.currency.inMultiplesOf,
      'installmentAmountInMultiplesOf': this.loanProductsTemplate.installmentAmountInMultiplesOf
    });
  }

  createLoanProductCurrencyForm() {
    this.loanProductCurrencyForm = this.formBuilder.group({
      'currencyCode': ['', Validators.required],
      'digitsAfterDecimal': ['', Validators.required],
      'inMultiplesOf': ['', Validators.required],
      'installmentAmountInMultiplesOf': ['', Validators.required]
    });
  }

  get loanProductCurrency() {
    return this.loanProductCurrencyForm.value;
  }

}
