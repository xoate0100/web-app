import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { LayoutDirective, LayoutGapDirective, FlexDirective, FlexFillDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { NgFor, NgIf } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'mifosx-share-product-accounting-step',
    templateUrl: './share-product-accounting-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./share-product-accounting-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, MatRadioGroup, FlexDirective, NgFor, MatRadioButton, MatDivider, NgIf, FlexFillDirective, MatFormField, MatLabel, MatSelect, MatOption, MatError, LayoutAlignDirective, MatButton, MatStepperPrevious, FaIconComponent, MatStepperNext]
})
export class ShareProductAccountingStepComponent implements OnInit {

  @Input() shareProductsTemplate: any;
  @Input() accountingRuleData: any;
  @Input() shareProductFormValid: boolean;

  shareProductAccountingForm: FormGroup;

  assetAccountData: any;
  incomeAccountData: any;
  equityAccountData: any;
  liabilityAccountData: any;

  constructor(private formBuilder: FormBuilder) {
    this.createShareProductAccountingForm();
    this.setConditionalControls();
  }

  ngOnInit() {
    this.assetAccountData = this.shareProductsTemplate.accountingMappingOptions.assetAccountOptions || [];
    this.incomeAccountData = this.shareProductsTemplate.accountingMappingOptions.incomeAccountOptions || [];
    this.equityAccountData = this.shareProductsTemplate.accountingMappingOptions.equityAccountOptions || [];
    this.liabilityAccountData = this.shareProductsTemplate.accountingMappingOptions.liabilityAccountOptions || [];

    if (this.shareProductsTemplate.accountingRule) {
      this.shareProductAccountingForm.patchValue({
        'accountingRule': this.shareProductsTemplate.accountingRule.id
      });

      if (this.shareProductsTemplate.accountingRule.id === 2) {
        this.shareProductAccountingForm.patchValue({
          'shareReferenceId': this.shareProductsTemplate.accountingMappings.shareReferenceId.id,
          'shareSuspenseId': this.shareProductsTemplate.accountingMappings.shareSuspenseId.id,
          'shareEquityId': this.shareProductsTemplate.accountingMappings.shareEquityId.id,
          'incomeFromFeeAccountId': this.shareProductsTemplate.accountingMappings.incomeFromFeeAccountId.id
        });
      }
    }
  }

  createShareProductAccountingForm() {
    this.shareProductAccountingForm = this.formBuilder.group({
      'accountingRule': [1]
    });
  }

  setConditionalControls() {
    this.shareProductAccountingForm.get('accountingRule')!.valueChanges
      .subscribe((accountingRule: any) => {
        if (accountingRule === 2) {
          this.shareProductAccountingForm.addControl('shareReferenceId', new FormControl('', Validators.required));
          this.shareProductAccountingForm.addControl('shareSuspenseId', new FormControl('', Validators.required));
          this.shareProductAccountingForm.addControl('shareEquityId', new FormControl('', Validators.required));
          this.shareProductAccountingForm.addControl('incomeFromFeeAccountId', new FormControl('', Validators.required));
        } else {
          this.shareProductAccountingForm.removeControl('shareReferenceId');
          this.shareProductAccountingForm.removeControl('shareSuspenseId');
          this.shareProductAccountingForm.removeControl('shareEquityId');
          this.shareProductAccountingForm.removeControl('incomeFromFeeAccountId');
        }
      });
  }

  get shareProductAccounting() {
    return this.shareProductAccountingForm.value;
  }

}
