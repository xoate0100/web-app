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
    selector: 'mifosx-share-product-currency-step',
    templateUrl: './share-product-currency-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./share-product-currency-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatSelect, NgFor, MatOption, MatError, MatInput, LayoutAlignDirective, MatButton, MatStepperPrevious, FaIconComponent, MatStepperNext]
})
export class ShareProductCurrencyStepComponent implements OnInit {

  @Input() shareProductsTemplate: any;

  shareProductCurrencyForm: FormGroup;

  currencyData: any;

  constructor(private formBuilder: FormBuilder) {
    this.createShareProductCurrencyForm();
  }

  ngOnInit() {
    this.currencyData = this.shareProductsTemplate.currencyOptions;

    if (this.shareProductsTemplate.currency) {
      this.shareProductCurrencyForm.patchValue({
        'currencyCode': this.shareProductsTemplate.currency.code,
        'digitsAfterDecimal': this.shareProductsTemplate.currency.decimalPlaces,
        'inMultiplesOf': this.shareProductsTemplate.currency.inMultiplesOf
      });
    } else {
      this.shareProductCurrencyForm.patchValue({
        'currencyCode': this.currencyData[0].code,
        'digitsAfterDecimal': 2
      });
    }
  }

  createShareProductCurrencyForm() {
    this.shareProductCurrencyForm = this.formBuilder.group({
      'currencyCode': ['', Validators.required],
      'digitsAfterDecimal': ['', Validators.required],
      'inMultiplesOf': ['', Validators.required]
    });
  }

  get shareProductCurrency() {
    return this.shareProductCurrencyForm.value;
  }

}
