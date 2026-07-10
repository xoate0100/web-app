/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

/** Custom Services */
import { OrganizationService } from 'app/organization/organization.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';

/**
 * Edit Payment Type component.
 */
@Component({
    selector: 'mifosx-edit-payment-type',
    templateUrl: './edit-payment-type.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-payment-type.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, NgIf, MatError, MatCheckbox, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class EditPaymentTypeComponent implements OnInit {

  /** Payment Type form. */
  paymentTypeForm: FormGroup;
  /** Payment Type Data. */
  paymentTypeData: any;

  /**
   * Retrieves the payment type data from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {OrganizationService} organizationService Organization Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   */
  constructor(private formBuilder: FormBuilder,
              private organizationService: OrganizationService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.paymentTypeData = data.paymentType;
    });
  }

  /**
   * Creates and sets the payment type form.
   */
  ngOnInit() {
    this.createPaymentTypeForm();
  }

  /**
   * Creates the payment type form.
   */
  createPaymentTypeForm() {
    this.paymentTypeForm = this.formBuilder.group({
      'name': [this.paymentTypeData.name, Validators.required],
      'description': [this.paymentTypeData.description],
      'isCashPayment': [this.paymentTypeData.isCashPayment],
      'position': [this.paymentTypeData.position, Validators.required],
    });
  }

  /**
   * Submits the payment type form and updates payment type.
   * if successful redirects to payment types.
   */
  submit() {
    const paymentType = this.paymentTypeForm.value;
    this.organizationService.updatePaymentType(this.paymentTypeData.id, paymentType).subscribe(response => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
