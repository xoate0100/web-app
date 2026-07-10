import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'mifosx-share-product-currency-step',
  templateUrl: './share-product-currency-step.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./share-product-currency-step.component.scss']
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
