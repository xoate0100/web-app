/** Angular Imports. */
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services. */
import { LoansService } from 'app/loans/loans.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';

/**
 * Add Collateral component.
 */
@Component({
    selector: 'mifosx-add-collateral',
    templateUrl: './add-collateral.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./add-collateral.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatSelect, NgFor, MatOption, NgIf, MatError, MatInput, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class AddCollateralComponent implements OnInit {

  @Input() dataObject: any;

  /** Collateral form. */
  collateralForm: FormGroup;
  /** Loan Id. */
  loanId: string;

  /**
   * Retrieve data from `Resolver`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {Router} router Router.
   * @param {ActivatedRoute} route Activated Route.
   * @param {LoansService} LoansService loans service.
   */
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private loanService: LoansService ) { }

  ngOnInit() {
    this.createAddCollateralForm();
  }

  /**
   * Set Collateral form.
   */
  createAddCollateralForm() {
    this.collateralForm = this.formBuilder.group({
      'collateralTypeId': ['', Validators.required],
      'value': ['', Validators.required],
      'description': ['']
    });
  }

  /**
   * Submits collateral form.
   */
  submit() {
    const collateralTypeId = this.collateralForm.value.collateralTypeId;
    this.collateralForm.patchValue({
      'collateralTypeId': collateralTypeId
    });
    const loanId = this.route.parent!.snapshot.params['loanId']!;
    const collateralForm = this.collateralForm.value;
    collateralForm.locale = 'en';
    this.loanService.createLoanCollateral(loanId, collateralForm).subscribe((response: any) => {
      this.router.navigate(['../../general'], { relativeTo: this.route });
    });
  }

}
