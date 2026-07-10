import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ShowHideDirective } from '@ngbracket/ngx-layout/extended';
import { MatSelect } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'mifosx-saving-product-terms-step',
    templateUrl: './saving-product-terms-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./saving-product-terms-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatInput, MatError, ShowHideDirective, MatSelect, NgFor, MatOption, LayoutAlignDirective, MatButton, MatStepperPrevious, FaIconComponent, MatStepperNext]
})
export class SavingProductTermsStepComponent implements OnInit {

  @Input() savingProductsTemplate: any;

  savingProductTermsForm: FormGroup;

  interestCompoundingPeriodTypeData: any;
  interestPostingPeriodTypeData: any;
  interestCalculationTypeData: any;
  interestCalculationDaysInYearTypeData: any;

  constructor(private formBuilder: FormBuilder) {
    this.createSavingProductTermsForm();
  }

  ngOnInit() {
    this.interestCompoundingPeriodTypeData = this.savingProductsTemplate.interestCompoundingPeriodTypeOptions;
    this.interestPostingPeriodTypeData = this.savingProductsTemplate.interestPostingPeriodTypeOptions;
    this.interestCalculationTypeData = this.savingProductsTemplate.interestCalculationTypeOptions;
    this.interestCalculationDaysInYearTypeData = this.savingProductsTemplate.interestCalculationDaysInYearTypeOptions;

    this.savingProductTermsForm.patchValue({
      'nominalAnnualInterestRate': this.savingProductsTemplate.nominalAnnualInterestRate,
      'interestCompoundingPeriodType': this.savingProductsTemplate.interestCompoundingPeriodType.id,
      'interestPostingPeriodType': this.savingProductsTemplate.interestPostingPeriodType.id,
      'interestCalculationType': this.savingProductsTemplate.interestCalculationType.id,
      'interestCalculationDaysInYearType': this.savingProductsTemplate.interestCalculationDaysInYearType.id
    });
  }

  createSavingProductTermsForm() {
    this.savingProductTermsForm = this.formBuilder.group({
      'nominalAnnualInterestRate': ['', Validators.required],
      'interestCompoundingPeriodType': ['', Validators.required],
      'interestPostingPeriodType': ['', Validators.required],
      'interestCalculationType': ['', Validators.required],
      'interestCalculationDaysInYearType': ['', Validators.required]
    });
  }

  get savingProductTerms() {
    return this.savingProductTermsForm.value;
  }

}
