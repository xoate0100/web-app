/** Angular Imports */
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

/** Custom Services */
import { FixedDepositsService } from '../../fixed-deposits.service';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

/**
 * Fixed Deposits Account Details Step
 */
@Component({
    selector: 'mifosx-fixed-deposit-account-details-step',
    templateUrl: './fixed-deposit-account-details-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./fixed-deposit-account-details-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatSelect, NgFor, MatOption, MatError, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, LayoutAlignDirective, MatButton, MatStepperPrevious, FaIconComponent, MatStepperNext]
})
export class FixedDepositAccountDetailsStepComponent implements OnInit {

  /** Fixed Deposits Account Template */
  @Input() fixedDepositsAccountTemplate: any;

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Product Data */
  productData: any;
  /** Field Officer Data */
  fieldOfficerData: any;
  /** For edit savings form */
  isFieldOfficerPatched = false;
  /** Fixed Deposits Account Details Form */
  fixedDepositAccountDetailsForm: FormGroup;

  /** Fixed Deposits Account Template with product data  */
  @Output() fixedDepositsAccountProductTemplate = new EventEmitter();

  /**
   * Sets fixed deposits account details form.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {FixedDepositsService} fixedDepositsService Fixed Deposits Service.
   */
  constructor(private formBuilder: FormBuilder,
              private fixedDepositsService: FixedDepositsService) {
    this.createFixedDepositsAccountDetailsForm();
  }

  ngOnInit() {
    this.buildDependencies();
    if (this.fixedDepositsAccountTemplate) {
      this.productData = this.fixedDepositsAccountTemplate.productOptions;
      if (this.fixedDepositsAccountTemplate.depositProductId) {
        this.fixedDepositAccountDetailsForm.patchValue({
          'productId': this.fixedDepositsAccountTemplate.depositProductId,
          'submittedOnDate': this.fixedDepositsAccountTemplate.timeline.submittedOnDate && new Date(this.fixedDepositsAccountTemplate.timeline.submittedOnDate)
        });
      }
    }
  }

  /**
   * Creates fixed deposits account details form.
   */
  createFixedDepositsAccountDetailsForm() {
    this.fixedDepositAccountDetailsForm = this.formBuilder.group({
      'productId': ['', Validators.required],
      'submittedOnDate': ['', Validators.required],
      'fieldOfficerId': ['']
    });
  }

  /**
   * Fetches fixed deposits account product template on productId value changes
   */
  buildDependencies() {
    const clientId = this.fixedDepositsAccountTemplate.clientId;
    this.fixedDepositAccountDetailsForm.get('productId')!.valueChanges.subscribe((productId: string) => {
      this.fixedDepositsService.getFixedDepositsAccountTemplate(clientId, productId).subscribe((response: any) => {
        this.fixedDepositsAccountProductTemplate.emit(response);
        this.fieldOfficerData = response.fieldOfficerOptions;
        if (!this.isFieldOfficerPatched && this.fixedDepositsAccountTemplate.fieldOfficerId) {
          this.fixedDepositAccountDetailsForm.get('fieldOfficerId')!.patchValue(this.fixedDepositsAccountTemplate.fieldOfficerId);
          this.isFieldOfficerPatched = true;
        } else {
          this.fixedDepositAccountDetailsForm.get('fieldOfficerId')!.patchValue('');
        }
      });
    });
  }

  /**
   * Returns fixed deposits account details form value.
   */
  get fixedDepositAccountDetails() {
    const fixedDepositAccountDetails = this.fixedDepositAccountDetailsForm.value;
    for (const key in fixedDepositAccountDetails) {
      if (fixedDepositAccountDetails[key] === '') {
        fixedDepositAccountDetails[key] = undefined;
      }
    }
    return fixedDepositAccountDetails;
  }

}
