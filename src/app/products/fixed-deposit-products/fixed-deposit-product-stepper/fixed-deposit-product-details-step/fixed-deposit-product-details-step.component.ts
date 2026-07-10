import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'mifosx-fixed-deposit-product-details-step',
    templateUrl: './fixed-deposit-product-details-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./fixed-deposit-product-details-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatInput, NgIf, MatError, LayoutAlignDirective, MatButton, MatStepperPrevious, FaIconComponent, MatStepperNext]
})
export class FixedDepositProductDetailsStepComponent implements OnInit {

  @Input() fixedDepositProductsTemplate: any;

  fixedDepositProductDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createFixedDepositProductDetailsForm();
  }

  ngOnInit() {
    if (!(this.fixedDepositProductsTemplate === undefined) && this.fixedDepositProductsTemplate.id) {
      this.fixedDepositProductDetailsForm.patchValue({
        'name': this.fixedDepositProductsTemplate.name,
        'shortName': this.fixedDepositProductsTemplate.shortName,
        'description': this.fixedDepositProductsTemplate.description,
      });
    }
  }

  createFixedDepositProductDetailsForm() {
    this.fixedDepositProductDetailsForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'shortName': ['', Validators.required],
      'description': ['', Validators.required]
    });
  }

  get fixedDepositProductDetails() {
    return this.fixedDepositProductDetailsForm.value;
  }

}
