/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

/** Custom Services */
import { OrganizationService } from '../../organization.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';

/**
 * Create Payment Type Component.
 */
@Component({
    selector: 'mifosx-create-payment-type',
    templateUrl: './create-payment-type.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./create-payment-type.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, NgIf, MatError, MatCheckbox, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class CreatePaymentTypeComponent implements OnInit {

  /** Payment Type form. */
  paymentTypeForm: FormGroup;

  /**
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {OrganizationService} organizationService Organization Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   */
  constructor(private formBuilder: FormBuilder,
              private organizationService: OrganizationService,
              private router: Router,
              private route: ActivatedRoute) {}

  /**
   * Creates and sets the payment type form.
   */
  ngOnInit() {
    this.createpaymentTypeForm();
  }

  /**
   * Creates the payment type form.
   */
  createpaymentTypeForm() {
    this.paymentTypeForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'description': [''],
      'isCashPayment': [false],
      'position': ['', Validators.required],
    });
  }

  /**
   * Submits the payment type form and creates payment type.
   * if successful redirects to payment types
   */
  submit() {
    const paymentType = this.paymentTypeForm.value;
    this.organizationService.createPaymentType(paymentType).subscribe(response => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

}
