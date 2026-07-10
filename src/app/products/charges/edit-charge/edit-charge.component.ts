/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { ProductsService } from 'app/products/products.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';

/**
 * Edit Charge component.
 */
@Component({
    selector: 'mifosx-edit-charge',
    templateUrl: './edit-charge.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-charge.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatSelect, NgFor, MatOption, MatInput, NgIf, MatError, MatCheckbox, MatCardActions, LayoutAlignDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class EditChargeComponent implements OnInit {

  /** Selected Data. */
  chargeData: any;
  /** Charge form. */
  chargeForm: FormGroup;
  /** Select Income. */
  selectedIncome: any;
  /** Select Time Type. */
  selectedTime: any;
  /** Select Currency Type. */
  selectedCurrency: any;
  /** Select Calculation Type. */
  selectedCalculation: any;
  /** Charge Time Type options. */
  chargeTimeTypeOptions: any;
  /** Charge Calculation Type options. */
  chargeCalculationTypeOptions: any;
  /** Show Penalty. */
  showPenalty = true;
  /** Add Fee Frequency. */
  addFeeFrequency = true;
  /** Show GL Accounts. */
  showGLAccount = false;
  /** Charge Payment Mode. */
  chargePaymentMode = false;
  /** Show Fee Options. */
  showFeeOptions = false;

    /**
     * Retrieves the charge data from `resolve`.
     * @param {ProductsService} productsService Products Service.
     * @param {FormBuilder} formBuilder Form Builder.
     * @param {ActivatedRoute} route Activated Route.
     * @param {Router} router Router for navigation.
     */
  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.data.subscribe((data: any) => {
      this.chargeData = data.chargesTemplate;
    });
  }

  ngOnInit() {
    this.editChargeForm();
  }

  /**
   * Edit Charge form.
   */
  editChargeForm() {
    this.chargeForm = this.formBuilder.group({
      'name': [this.chargeData.name, Validators.required],
      'chargeAppliesTo': [{value: this.chargeData.chargeAppliesTo.id, disabled: true}, Validators.required],
      'currencyCode': [this.chargeData.currency.code, Validators.required],
      'amount': [this.chargeData.amount, Validators.required],
      'active': [this.chargeData.active],
      'penalty': [this.chargeData.penalty],
      'chargeTimeType': [this.chargeData.chargeTimeType.id, Validators.required],
      'chargeCalculationType': [this.chargeData.chargeCalculationType.id, Validators.required],
    });
    switch (this.chargeData.chargeAppliesTo.value) {
      case 'Loan': {
        this.chargeTimeTypeOptions = this.chargeData.loanChargeTimeTypeOptions;
        this.chargeCalculationTypeOptions = this.chargeData.loanChargeCalculationTypeOptions;
        this.addFeeFrequency = true;
        this.chargePaymentMode = true;
        this.chargeForm.addControl('chargePaymentMode', this.formBuilder.control(this.chargeData.chargePaymentMode.id, Validators.required));
        break;
      }
      case 'Savings': {
        this.chargeTimeTypeOptions = this.chargeData.savingsChargeTimeTypeOptions;
        this.chargeCalculationTypeOptions = this.chargeData.savingsChargeCalculationTypeOptions;
        this.addFeeFrequency = false;
        break;
      }
      case 'Shares': {
        this.chargeTimeTypeOptions = this.chargeData.shareChargeTimeTypeOptions;
        this.chargeCalculationTypeOptions = this.chargeData.shareChargeCalculationTypeOptions;
        this.addFeeFrequency = false;
        this.showGLAccount = false;
        this.showPenalty = false;
        break;
      }
      default: {
        this.chargeCalculationTypeOptions = this.chargeData.clientChargeCalculationTypeOptions;
        this.chargeTimeTypeOptions = this.chargeData.clientChargeTimeTypeOptions;
        this.showGLAccount = true;
        this.addFeeFrequency = false;
        this.chargeForm.addControl('incomeAccountId', this.formBuilder.control(this.chargeData.incomeOrLiabilityAccount.id, Validators.required));
        break;
      }
    }
    if (this.chargeData.taxGroup) {
      this.chargeForm.addControl('taxGroupId', this.formBuilder.control({value: this.chargeData.taxGroup.id, disabled: true}, Validators.required));
    } else {
      this.chargeForm.addControl('taxGroupId', this.formBuilder.control({value: '?', disabled: true}));
    }
  }

  /**
   * Get Add Fee Frequency value.
   */
  getFeeFrequency(isChecked: boolean) {
    this.showFeeOptions = isChecked;
    if (isChecked) {
      this.chargeForm.addControl('feeInterval', this.formBuilder.control('', Validators.required));
      this.chargeForm.addControl('feeFrequency', this.formBuilder.control('', Validators.required));
    } else {
      this.chargeForm.removeControl('feeInterval');
      this.chargeForm.removeControl('feeFrequency');
    }
  }

  /**
   * Submits Edit Charge form.
   */
  submit() {
    const charges = this.chargeForm.value;
    charges.locale = 'en';
    charges.chargePaymentMode = this.chargeData.chargePaymentMode.id;
    this.productsService.updateCharge(this.chargeData.id.toString(), charges)
      .subscribe((response: any) => {
        this.router.navigate(['../'], { relativeTo: this.route });
   });
  }

}
