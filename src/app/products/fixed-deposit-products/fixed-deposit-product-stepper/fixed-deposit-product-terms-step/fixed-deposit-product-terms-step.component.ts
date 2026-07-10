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
    selector: 'mifosx-fixed-deposit-product-terms-step',
    templateUrl: './fixed-deposit-product-terms-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./fixed-deposit-product-terms-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, FlexDirective, MatFormField, MatLabel, MatInput, MatError, MatDivider, MatSelect, NgFor, MatOption, LayoutAlignDirective, MatButton, MatStepperPrevious, FaIconComponent, MatStepperNext]
})
export class FixedDepositProductTermsStepComponent implements OnInit {

  @Input() fixedDepositProductsTemplate: any;

  fixedDepositProductTermsForm: FormGroup;

  interestCompoundingPeriodTypeData: any;
  interestPostingPeriodTypeData: any;
  interestCalculationTypeData: any;
  interestCalculationDaysInYearTypeData: any;

  constructor(private formBuilder: FormBuilder) {
    this.createFixedDepositProductTermsForm();
  }

  ngOnInit() {
    this.interestCompoundingPeriodTypeData = this.fixedDepositProductsTemplate.interestCompoundingPeriodTypeOptions;
    this.interestPostingPeriodTypeData = this.fixedDepositProductsTemplate.interestPostingPeriodTypeOptions;
    this.interestCalculationTypeData = this.fixedDepositProductsTemplate.interestCalculationTypeOptions;
    this.interestCalculationDaysInYearTypeData = this.fixedDepositProductsTemplate.interestCalculationDaysInYearTypeOptions;

    if (!(this.fixedDepositProductsTemplate === undefined) && this.fixedDepositProductsTemplate.id) {
      this.fixedDepositProductTermsForm.patchValue({
        'minDepositAmount': this.fixedDepositProductsTemplate.minDepositAmount,
        'depositAmount': this.fixedDepositProductsTemplate.depositAmount,
        'maxDepositAmount': this.fixedDepositProductsTemplate.maxDepositAmount,
      });
    }

    this.fixedDepositProductTermsForm.patchValue({
      'interestCompoundingPeriodType': this.fixedDepositProductsTemplate.interestCompoundingPeriodType.id,
      'interestPostingPeriodType': this.fixedDepositProductsTemplate.interestPostingPeriodType.id,
      'interestCalculationType': this.fixedDepositProductsTemplate.interestCalculationType.id,
      'interestCalculationDaysInYearType': this.fixedDepositProductsTemplate.interestCalculationDaysInYearType.id
    });
  }

  createFixedDepositProductTermsForm() {
    this.fixedDepositProductTermsForm = this.formBuilder.group({
      'minDepositAmount': [''],
      'depositAmount': ['', Validators.required],
      'maxDepositAmount': [''],
      'interestCompoundingPeriodType': ['', Validators.required],
      'interestPostingPeriodType': ['', Validators.required],
      'interestCalculationType': ['', Validators.required],
      'interestCalculationDaysInYearType': ['', Validators.required]
    });
  }

  get fixedDepositProductTerms() {
    const fixedDepositProductTerms = this.fixedDepositProductTermsForm.value;
    for (const key in fixedDepositProductTerms) {
      if (fixedDepositProductTerms[key] === '') {
        fixedDepositProductTerms[key] = undefined;
      }
    }
    return fixedDepositProductTerms;
  }

}
