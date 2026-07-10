import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgFor } from '@angular/common';
import { LayoutDirective, LayoutGapDirective, LayoutAlignDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'mifosx-loan-product-details-step',
    templateUrl: './loan-product-details-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./loan-product-details-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, LayoutAlignDirective, MatFormField, FlexDirective, MatLabel, MatInput, MatError, MatSelect, NgFor, MatOption, MatCheckbox, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatButton, MatStepperPrevious, FaIconComponent, MatStepperNext]
})
export class LoanProductDetailsStepComponent implements OnInit {

  @Input() loanProductsTemplate: any;

  loanProductDetailsForm: FormGroup;

  fundData: any;

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 10));

  constructor(private formBuilder: FormBuilder,
              private datePipe: DatePipe) {
    this.createLoanProductDetailsForm();
  }

  ngOnInit() {
    this.fundData = this.loanProductsTemplate.fundOptions;

    this.loanProductDetailsForm.patchValue({
      'name': this.loanProductsTemplate.name,
      'shortName': this.loanProductsTemplate.shortName,
      'description': this.loanProductsTemplate.description,
      'fundId': this.loanProductsTemplate.fundId,
      'startDate': this.loanProductsTemplate.startDate && new Date(this.loanProductsTemplate.startDate),
      'closeDate': this.loanProductsTemplate.closeDate && new Date(this.loanProductsTemplate.closeDate),
      'includeInBorrowerCycle': this.loanProductsTemplate.includeInBorrowerCycle
    });
  }

  createLoanProductDetailsForm() {
    this.loanProductDetailsForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'shortName': ['', Validators.required],
      'description': [''],
      'fundId': [''],
      'startDate': [''],
      'closeDate': [''],
      'includeInBorrowerCycle': [false]
    });
  }

  get loanProductDetails() {
    const prevStartDate: Date = this.loanProductDetailsForm.value.startDate;
    const prevCloseDate: Date = this.loanProductDetailsForm.value.closeDate;
    // TODO: Update once language and date settings are setup
    const dateFormat = 'yyyy-MM-dd';
    this.loanProductDetailsForm.patchValue({
      startDate: this.datePipe.transform(prevStartDate as Date, dateFormat) || '',
      closeDate: this.datePipe.transform(prevCloseDate as Date, dateFormat) || ''
    });
    return this.loanProductDetailsForm.value;
  }

}
