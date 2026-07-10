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
    selector: 'mifosx-fixed-deposit-product-currency-step',
    templateUrl: './fixed-deposit-product-currency-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./fixed-deposit-product-currency-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatSelect, NgFor, MatOption, MatError, MatInput, LayoutAlignDirective, MatButton, MatStepperPrevious, FaIconComponent, MatStepperNext]
})
export class FixedDepositProductCurrencyStepComponent implements OnInit {

  @Input() fixedDepositProductsTemplate: any;

  fixedDepositProductCurrencyForm: FormGroup;

  currencyData: any;

  constructor(private formBuilder: FormBuilder) {
    this.createFixedDepositProductCurrencyForm();
  }

  ngOnInit() {
    this.currencyData = this.fixedDepositProductsTemplate.currencyOptions;

    if (!(this.fixedDepositProductsTemplate === undefined) && this.fixedDepositProductsTemplate.id) {
      this.fixedDepositProductCurrencyForm.patchValue({
        'currencyCode': this.fixedDepositProductsTemplate.currency.code,
        'digitsAfterDecimal': this.fixedDepositProductsTemplate.currency.decimalPlaces,
        'inMultiplesOf': this.fixedDepositProductsTemplate.currency.inMultiplesOf
      });
    } else {
      this.fixedDepositProductCurrencyForm.patchValue({
        'currencyCode': this.currencyData[0].code,
        'digitsAfterDecimal': 2
      });
    }
  }

  createFixedDepositProductCurrencyForm() {
    this.fixedDepositProductCurrencyForm = this.formBuilder.group({
      'currencyCode': ['', Validators.required],
      'digitsAfterDecimal': ['', Validators.required],
      'inMultiplesOf': ['', Validators.required]
    });
  }

  get fixedDepositProductCurrency() {
    return this.fixedDepositProductCurrencyForm.value;
  }

}
