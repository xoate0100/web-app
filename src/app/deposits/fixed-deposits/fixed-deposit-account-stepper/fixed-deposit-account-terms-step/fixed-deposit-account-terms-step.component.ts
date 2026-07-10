/** Angular Imports */
import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ShowHideDirective } from '@ngbracket/ngx-layout/extended';
import { MatSelect } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

/**
 * Fixed Deposits Terms Step
 */
@Component({
    selector: 'mifosx-fixed-deposit-account-terms-step',
    templateUrl: './fixed-deposit-account-terms-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./fixed-deposit-account-terms-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatInput, MatError, ShowHideDirective, MatSelect, NgFor, MatOption, MatDivider, LayoutAlignDirective, MatButton, MatStepperPrevious, FaIconComponent, MatStepperNext]
})
export class FixedDepositAccountTermsStepComponent implements OnInit, OnChanges {

  /** Fixed deposits account template */
  @Input() fixedDepositsAccountTemplate: any;
  /** Fixed deposits account and product template */
  @Input() fixedDepositsAccountProductTemplate: any;

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Fixed Deposits Account Terms Form */
  fixedDepositAccountTermsForm: FormGroup;
  /** Interest Compounding Period Type Data */
  interestCompoundingPeriodTypeData: any;
  /** Interest Posting Period Type Data */
  interestPostingPeriodTypeData: any;
  /** Interest Calculation Type Data */
  interestCalculationTypeData: any;
  /** Interest Calculation Days in Year Data */
  interestCalculationDaysInYearTypeData: any;
   /** Period Frequency Type Data */
  periodFrequencyTypeData: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   */
  constructor(private formBuilder: FormBuilder) {
    this.createFixedDepositsAccountTermsForm();
  }

  ngOnChanges() {
    if (this.fixedDepositsAccountProductTemplate) {
      this.setOptions();
    }
  }

  ngOnInit() {
    if (this.fixedDepositsAccountTemplate.interestCompoundingPeriodType) {
      this.fixedDepositAccountTermsForm.patchValue({
        'interestCompoundingPeriodType': this.fixedDepositsAccountTemplate.interestCompoundingPeriodType.id,
        'interestPostingPeriodType': this.fixedDepositsAccountTemplate.interestPostingPeriodType.id,
        'interestCalculationType': this.fixedDepositsAccountTemplate.interestCalculationType.id,
        'interestCalculationDaysInYearType': this.fixedDepositsAccountTemplate.interestCalculationDaysInYearType.id,
        'depositAmount': this.fixedDepositsAccountTemplate.depositAmount,
        'depositPeriod': this.fixedDepositsAccountTemplate.depositPeriod,
        'depositPeriodFrequencyId': this.fixedDepositsAccountTemplate.depositPeriodFrequency.id,
      });
    }
  }

  /**
   * Creates fixed deposits account terms form.
   */
  createFixedDepositsAccountTermsForm() {
    this.fixedDepositAccountTermsForm = this.formBuilder.group({
      'interestCompoundingPeriodType': ['', Validators.required],
      'interestPostingPeriodType': ['', Validators.required],
      'interestCalculationType': ['', Validators.required],
      'interestCalculationDaysInYearType': ['', Validators.required],
      'depositAmount': ['', Validators.required],
      'depositPeriod': ['', Validators.required],
      'depositPeriodFrequencyId': ['', Validators.required]
    });
  }

  /**
   * Sets all select dropdown options.
   */
  setOptions() {
    this.interestCompoundingPeriodTypeData = this.fixedDepositsAccountProductTemplate.interestCompoundingPeriodTypeOptions;
    this.interestPostingPeriodTypeData = this.fixedDepositsAccountProductTemplate.interestPostingPeriodTypeOptions;
    this.interestCalculationTypeData = this.fixedDepositsAccountProductTemplate.interestCalculationTypeOptions;
    this.interestCalculationDaysInYearTypeData = this.fixedDepositsAccountProductTemplate.interestCalculationDaysInYearTypeOptions;
    this.periodFrequencyTypeData = this.fixedDepositsAccountProductTemplate.periodFrequencyTypeOptions;
  }

  /**
   * Returns fixed deposits account terms form value.
   */
  get fixedDepositAccountTerms() {
    const fixedDepositAccountTerms = this.fixedDepositAccountTermsForm.value;
    for (const key in fixedDepositAccountTerms) {
      if (fixedDepositAccountTerms[key] === '') {
        fixedDepositAccountTerms[key] = undefined;
      }
    }
    return fixedDepositAccountTerms;
  }

}
