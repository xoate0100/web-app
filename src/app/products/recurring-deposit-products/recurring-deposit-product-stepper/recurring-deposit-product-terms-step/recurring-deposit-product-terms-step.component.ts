import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDivider } from '@angular/material/divider';
import { MatSelect } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'mifosx-recurring-deposit-product-terms-step',
    templateUrl: './recurring-deposit-product-terms-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./recurring-deposit-product-terms-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, FlexDirective, MatFormField, MatLabel, MatInput, MatError, MatDivider, MatSelect, NgFor, MatOption, LayoutAlignDirective, MatButton, MatStepperPrevious, FaIconComponent, MatStepperNext]
})
export class RecurringDepositProductTermsStepComponent implements OnInit {

  @Input() recurringDepositProductsTemplate: any;

  recurringDepositProductTermsForm: FormGroup;

  interestCompoundingPeriodTypeData: any;
  interestPostingPeriodTypeData: any;
  interestCalculationTypeData: any;
  interestCalculationDaysInYearTypeData: any;

  constructor(private formBuilder: FormBuilder) {
    this.createrecurringDepositProductTermsForm();
  }

  ngOnInit() {
    this.interestCompoundingPeriodTypeData = this.recurringDepositProductsTemplate.interestCompoundingPeriodTypeOptions;
    this.interestPostingPeriodTypeData = this.recurringDepositProductsTemplate.interestPostingPeriodTypeOptions;
    this.interestCalculationTypeData = this.recurringDepositProductsTemplate.interestCalculationTypeOptions;
    this.interestCalculationDaysInYearTypeData = this.recurringDepositProductsTemplate.interestCalculationDaysInYearTypeOptions;
    if (!(this.recurringDepositProductsTemplate === undefined) && this.recurringDepositProductsTemplate.id) {
      this.recurringDepositProductTermsForm.patchValue({
        'minDepositAmount': this.recurringDepositProductsTemplate.minDepositAmount,
        'depositAmount': this.recurringDepositProductsTemplate.depositAmount,
        'maxDepositAmount': this.recurringDepositProductsTemplate.maxDepositAmount,
      });
    }
    this.recurringDepositProductTermsForm.patchValue({
      'interestCompoundingPeriodType': this.recurringDepositProductsTemplate.interestCompoundingPeriodType.id,
      'interestPostingPeriodType': this.recurringDepositProductsTemplate.interestPostingPeriodType.id,
      'interestCalculationType': this.recurringDepositProductsTemplate.interestCalculationType.id,
      'interestCalculationDaysInYearType': this.recurringDepositProductsTemplate.interestCalculationDaysInYearType.id
    });
  }

  createrecurringDepositProductTermsForm() {
    this.recurringDepositProductTermsForm = this.formBuilder.group({
      'minDepositAmount': [''],
      'depositAmount': ['', Validators.required],
      'maxDepositAmount': [''],
      'interestCompoundingPeriodType': ['', Validators.required],
      'interestPostingPeriodType': ['', Validators.required],
      'interestCalculationType': ['', Validators.required],
      'interestCalculationDaysInYearType': ['', Validators.required]
    });
  }

  get recurringDepositProductTerms() {
    const recurringDepositProductTerms = this.recurringDepositProductTermsForm.value;
    for (const key in recurringDepositProductTerms) {
      if (recurringDepositProductTerms[key] === '') {
        recurringDepositProductTerms[key] = undefined;
      }
    }
    return recurringDepositProductTerms;
  }

}
