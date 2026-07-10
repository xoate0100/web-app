import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'mifosx-recurring-deposit-product-settings-step',
    templateUrl: './recurring-deposit-product-settings-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./recurring-deposit-product-settings-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, MatCheckbox, FlexDirective, MatFormField, MatLabel, MatInput, MatSelect, NgFor, MatOption, MatError, MatDivider, NgIf, LayoutAlignDirective, MatButton, MatStepperPrevious, FaIconComponent, MatStepperNext]
})
export class RecurringDepositProductSettingsStepComponent implements OnInit {

  @Input() recurringDepositProductsTemplate: any;

  recurringDepositProductSettingsForm: FormGroup;

  lockinPeriodFrequencyTypeData: any;
  periodFrequencyTypeData: any;
  preClosurePenalInterestOnTypeData: any;
  taxGroupData: any;

  constructor(private formBuilder: FormBuilder) {
    this.createrecurringDepositProductSettingsForm();
    this.setConditionalControls();
  }

  ngOnInit() {
    this.lockinPeriodFrequencyTypeData = this.recurringDepositProductsTemplate.lockinPeriodFrequencyTypeOptions;
    this.periodFrequencyTypeData = this.recurringDepositProductsTemplate.periodFrequencyTypeOptions.slice(0, -1);
    this.preClosurePenalInterestOnTypeData = this.recurringDepositProductsTemplate.preClosurePenalInterestOnTypeOptions;
    this.taxGroupData = this.recurringDepositProductsTemplate.taxGroupOptions;

    if (!(this.recurringDepositProductsTemplate === undefined) && this.recurringDepositProductsTemplate.id) {
      this.recurringDepositProductSettingsForm.patchValue({
        'isMandatoryDeposit': this.recurringDepositProductsTemplate.isMandatoryDeposit,
        'adjustAdvanceTowardsFuturePayments': this.recurringDepositProductsTemplate.adjustAdvanceTowardsFuturePayments,
        'allowWithdrawal': this.recurringDepositProductsTemplate.allowWithdrawal,
        'lockinPeriodFrequency': this.recurringDepositProductsTemplate.lockinPeriodFrequency,
        'lockinPeriodFrequencyType': this.recurringDepositProductsTemplate.lockinPeriodFrequencyType ? this.recurringDepositProductsTemplate.lockinPeriodFrequencyType.id : '',
        'minDepositTerm': this.recurringDepositProductsTemplate.minDepositTerm,
        'minDepositTermTypeId': this.recurringDepositProductsTemplate.minDepositTermType ? this.recurringDepositProductsTemplate.minDepositTermType.id : '',
        'inMultiplesOfDepositTerm': this.recurringDepositProductsTemplate.inMultiplesOfDepositTerm,
        'inMultiplesOfDepositTermTypeId': this.recurringDepositProductsTemplate.inMultiplesOfDepositTermType ? this.recurringDepositProductsTemplate.inMultiplesOfDepositTerm.id : '',
        'maxDepositTerm': this.recurringDepositProductsTemplate.maxDepositTerm,
        'maxDepositTermTypeId': this.recurringDepositProductsTemplate.maxDepositTermType ? this.recurringDepositProductsTemplate.minDepositTermType.id : '',
        'preClosurePenalApplicable': this.recurringDepositProductsTemplate.preClosurePenalApplicable,
        'preClosurePenalInterest': this.recurringDepositProductsTemplate.preClosurePenalInterest,
        'preClosurePenalInterestOnTypeId': this.recurringDepositProductsTemplate.preClosurePenalInterestOnType ? this.recurringDepositProductsTemplate.preClosurePenalInterestOnType.id : '',
        'withHoldTax': this.recurringDepositProductsTemplate.withHoldTax
      });
    }
  }

  createrecurringDepositProductSettingsForm() {
    this.recurringDepositProductSettingsForm = this.formBuilder.group({
      'isMandatoryDeposit': [false],
      'adjustAdvanceTowardsFuturePayments': [false],
      'allowWithdrawal': [false],
      'lockinPeriodFrequency': [''],
      'lockinPeriodFrequencyType': [''],
      'minDepositTerm': ['', Validators.required],
      'minDepositTermTypeId': ['', Validators.required],
      'inMultiplesOfDepositTerm': [''],
      'inMultiplesOfDepositTermTypeId': [''],
      'maxDepositTerm': [''],
      'maxDepositTermTypeId': [''],
      'preClosurePenalApplicable': [false],
      'preClosurePenalInterest': [''],
      'preClosurePenalInterestOnTypeId': [''],
      'withHoldTax': [false]
    });
  }

  setConditionalControls() {
    this.recurringDepositProductSettingsForm.get('withHoldTax')!.valueChanges
      .subscribe((withHoldTax: any) => {
        if (withHoldTax) {
          this.recurringDepositProductSettingsForm.addControl('taxGroupId', new FormControl('', Validators.required));
        } else {
          this.recurringDepositProductSettingsForm.removeControl('taxGroupId');
        }
      });
  }

  get recurringDepositProductSettings() {
    const recurringDepositProductSettings = this.recurringDepositProductSettingsForm.value;
    for (const key in recurringDepositProductSettings) {
      if (recurringDepositProductSettings[key] === '') {
        recurringDepositProductSettings[key] = undefined;
      }
    }
    return recurringDepositProductSettings;
  }

}
