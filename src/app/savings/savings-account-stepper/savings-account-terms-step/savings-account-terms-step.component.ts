/** Angular Imports */
import { Component, OnChanges, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { LayoutDirective, LayoutGapDirective, LayoutAlignDirective, FlexDirective, FlexFillDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

/**
 * Savings Account Terms Step
 */
@Component({
    selector: 'mifosx-savings-account-terms-step',
    templateUrl: './savings-account-terms-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./savings-account-terms-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, LayoutAlignDirective, MatFormField, FlexDirective, MatLabel, MatInput, MatError, MatSelect, NgFor, MatOption, MatCheckbox, MatDivider, NgIf, FlexFillDirective, MatButton, MatStepperPrevious, FaIconComponent, MatStepperNext]
})
export class SavingsAccountTermsStepComponent implements OnChanges, OnInit {

  /** Savings Account and Product Template */
  @Input() savingsAccountProductTemplate: any;
  /** Savings Account Template */
  @Input() savingsAccountTemplate: any;

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Savings Account Terms Form */
  savingsAccountTermsForm: FormGroup;
  /** Lockin Period Frequency Type Data */
  lockinPeriodFrequencyTypeData: any;
  /** Interest Compounding Period Type Data */
  interestCompoundingPeriodTypeData: any;
  /** Interest Posting Period Type Data */
  interestPostingPeriodTypeData: any;
  /** Interest Calculation Type Data */
  interestCalculationTypeData: any;
  /** Interest Calculation Days in Year Data */
  interestCalculationDaysInYearTypeData: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   */
  constructor(private formBuilder: FormBuilder) {
    this.createSavingsAccountTermsForm();
    this.buildDependencies();
  }

  ngOnChanges() {
    if (this.savingsAccountProductTemplate) {
      this.savingsAccountTermsForm.patchValue({
        'currencyCode': this.savingsAccountProductTemplate.currency.code,
        'decimal': this.savingsAccountProductTemplate.currency.decimalPlaces,
        'currencyMultiple': this.savingsAccountProductTemplate.currency.inMultiplesOf,
        'minBalanceForInterestCalculation': this.savingsAccountProductTemplate.minBalanceForInterestCalculation
      });
      this.setOptions();
    }
  }

  ngOnInit() {
    if (this.savingsAccountTemplate) {
      this.savingsAccountTermsForm.patchValue({
        'nominalAnnualInterestRate': this.savingsAccountTemplate.nominalAnnualInterestRate,
        'interestCompoundingPeriodType': this.savingsAccountTemplate.interestCompoundingPeriodType.id,
        'interestPostingPeriodType': this.savingsAccountTemplate.interestPostingPeriodType.id,
        'interestCalculationType': this.savingsAccountTemplate.interestCalculationType.id,
        'interestCalculationDaysInYearType': this.savingsAccountTemplate.interestCalculationDaysInYearType.id,
        'minRequiredOpeningBalance': this.savingsAccountTemplate.minRequiredOpeningBalance,
        'withdrawalFeeForTransfers': this.savingsAccountTemplate.withdrawalFeeForTransfers,
        'lockinPeriodFrequency': this.savingsAccountTemplate.lockinPeriodFrequency,
        'lockinPeriodFrequencyType': this.savingsAccountTemplate.lockinPeriodFrequencyType && this.savingsAccountTemplate.lockinPeriodFrequencyType.id,
        'allowOverdraft': this.savingsAccountTemplate.allowOverdraft,
        'enforceMinRequiredBalance': this.savingsAccountTemplate.enforceMinRequiredBalance,
        'minRequiredBalance': this.savingsAccountTemplate.minRequiredBalance,
      });
    }
  }

  /**
   * Creates savings account terms form.
   */
  createSavingsAccountTermsForm() {
    this.savingsAccountTermsForm = this.formBuilder.group({
      'currencyCode': [{value: '', disabled: true}],
      'decimal': [{value: '',  disabled: true}],
      'nominalAnnualInterestRate': ['', Validators.required],
      'interestCompoundingPeriodType': ['', Validators.required],
      'currencyMultiple': [{value: '', disabled: true}],
      'interestPostingPeriodType': ['', Validators.required],
      'interestCalculationType': ['', Validators.required],
      'interestCalculationDaysInYearType': ['', Validators.required],
      'minRequiredOpeningBalance': [''],
      'withdrawalFeeForTransfers': [false],
      'lockinPeriodFrequency': [''],
      'lockinPeriodFrequencyType': [''],
      'allowOverdraft': [false],
      'enforceMinRequiredBalance': [false],
      'minRequiredBalance': [''],
      'minBalanceForInterestCalculation': [{value: '', disabled: true}]
    });
  }

  /**
   * Sets all select dropdown options.
   */
  setOptions() {
    this.lockinPeriodFrequencyTypeData = this.savingsAccountProductTemplate.lockinPeriodFrequencyTypeOptions;
    this.interestCompoundingPeriodTypeData = this.savingsAccountProductTemplate.interestCompoundingPeriodTypeOptions;
    this.interestPostingPeriodTypeData = this.savingsAccountProductTemplate.interestPostingPeriodTypeOptions;
    this.interestCalculationTypeData = this.savingsAccountProductTemplate.interestCalculationTypeOptions;
    this.interestCalculationDaysInYearTypeData = this.savingsAccountProductTemplate.interestCalculationDaysInYearTypeOptions;
  }

  /**
   * Subscribes to value changes and sets new form controls accordingly.
   */
  buildDependencies() {
    this.savingsAccountTermsForm.get('allowOverdraft')!.valueChanges.subscribe((allowOverdraft: any) => {
      if (allowOverdraft) {
        this.savingsAccountTermsForm.addControl('minOverdraftForInterestCalculation', new FormControl(''));
        this.savingsAccountTermsForm.addControl('nominalAnnualInterestRateOverdraft', new FormControl(''));
        this.savingsAccountTermsForm.addControl('overdraftLimit', new FormControl(''));
      } else {
        this.savingsAccountTermsForm.removeControl('minOverdraftForInterestCalculation');
        this.savingsAccountTermsForm.removeControl('nominalAnnualInterestRateOverdraft');
        this.savingsAccountTermsForm.removeControl('overdraftLimit');
      }
    });
  }

  /**
   * Returns savings account terms form value.
   */
  get savingsAccountTerms() {
    return this.savingsAccountTermsForm.value;
  }

}
