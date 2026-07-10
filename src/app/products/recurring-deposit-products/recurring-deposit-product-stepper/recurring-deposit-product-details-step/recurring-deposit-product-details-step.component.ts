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
    selector: 'mifosx-recurring-deposit-product-details-step',
    templateUrl: './recurring-deposit-product-details-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./recurring-deposit-product-details-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatInput, NgIf, MatError, LayoutAlignDirective, MatButton, MatStepperPrevious, FaIconComponent, MatStepperNext]
})
export class RecurringDepositProductDetailsStepComponent implements OnInit {

  @Input() recurringDepositProductsTemplate: any;

  recurringDepositProductDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createrecurringDepositProductDetailsForm();
  }

  ngOnInit() {
    if (!(this.recurringDepositProductsTemplate === undefined) && this.recurringDepositProductsTemplate.id) {
      this.recurringDepositProductDetailsForm.patchValue({
        'name': this.recurringDepositProductsTemplate.name,
        'shortName': this.recurringDepositProductsTemplate.shortName,
        'description': this.recurringDepositProductsTemplate.description,
      });
    }
  }

  createrecurringDepositProductDetailsForm() {
    this.recurringDepositProductDetailsForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'shortName': ['', Validators.required],
      'description': ['', Validators.required]
    });
  }

  get recurringDepositProductDetails() {
    return this.recurringDepositProductDetailsForm.value;
  }

}
