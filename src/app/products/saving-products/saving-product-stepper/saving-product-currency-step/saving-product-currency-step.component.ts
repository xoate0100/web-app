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
    selector: 'mifosx-saving-product-currency-step',
    templateUrl: './saving-product-currency-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./saving-product-currency-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatSelect, NgFor, MatOption, MatError, MatInput, LayoutAlignDirective, MatButton, MatStepperPrevious, FaIconComponent, MatStepperNext]
})
export class SavingProductCurrencyStepComponent implements OnInit {

  @Input() savingProductsTemplate: any;

  savingProductCurrencyForm: FormGroup;

  currencyData: any;

  constructor(private formBuilder: FormBuilder) {
    this.createSavingProductCurrencyForm();
  }

  ngOnInit() {
    this.currencyData = this.savingProductsTemplate.currencyOptions;

    this.savingProductCurrencyForm.patchValue({
      'currencyCode': this.savingProductsTemplate.currency.code || this.currencyData[0].code,
      'digitsAfterDecimal': this.savingProductsTemplate.currency.code ? this.savingProductsTemplate.currency.decimalPlaces : 2,
      'inMultiplesOf': this.savingProductsTemplate.currency.inMultiplesOf
    });
  }

  createSavingProductCurrencyForm() {
    this.savingProductCurrencyForm = this.formBuilder.group({
      'currencyCode': ['', Validators.required],
      'digitsAfterDecimal': ['', Validators.required],
      'inMultiplesOf': ['', Validators.required]
    });
  }

  get savingProductCurrency() {
    return this.savingProductCurrencyForm.value;
  }

}
