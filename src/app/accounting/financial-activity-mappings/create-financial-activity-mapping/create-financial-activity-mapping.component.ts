/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

/** Custom Services */
import { AccountingService } from '../../accounting.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';

/**
 * Create financial activity mapping component.
 */
@Component({
    selector: 'mifosx-create-financial-activity-mapping',
    templateUrl: './create-financial-activity-mapping.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./create-financial-activity-mapping.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatSelect, NgFor, MatOption, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class CreateFinancialActivityMappingComponent implements OnInit {

  /** Financial activity mapping form. */
  financialActivityMappingForm: FormGroup;
  /** GL Account options. */
  glAccountOptions: any;
  /** GL Account data. */
  glAccountData: any;
  /** Financial activity data. */
  financialActivityData: any;

  /**
   * Retrieves the gl account options and financial activity data from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {AccountingService} accountingService Accounting Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   */
  constructor(private formBuilder: FormBuilder,
              private accountingService: AccountingService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.data.subscribe((data: any) => {
      this.glAccountOptions = data.financialActivityAccountsTemplate.glAccountOptions;
      this.financialActivityData = data.financialActivityAccountsTemplate.financialActivityOptions;
    });
  }

  /**
   * Creates the financial activity mapping form and sets the gl account data.
   */
  ngOnInit() {
    this.createFinancialActivityMappingForm();
    this.setGlAccountData();
  }

  /**
   * Creates the financial activity mapping form.
   */
  createFinancialActivityMappingForm() {
    this.financialActivityMappingForm = this.formBuilder.group({
      'financialActivityId': ['', Validators.required],
      'glAccountId': ['', Validators.required]
    });
  }

  /**
   * Sets the gl account data on the basis of selected financial activity.
   */
  setGlAccountData() {
    this.financialActivityMappingForm.get('financialActivityId')!.valueChanges
      .subscribe(financialActivityId => {
        switch (financialActivityId) {
          case 100:
          case 101:
          case 102:
          case 103: this.glAccountData = this.glAccountOptions.assetAccountOptions;
          break;
          case 200:
          case 201: this.glAccountData = this.glAccountOptions.liabilityAccountOptions;
          break;
          case 300: this.glAccountData = this.glAccountOptions.equityAccountOptions;
          break;
        }
      });
  }

  /**
   * Submits the financial activity mapping form and creates financial activity account,
   * if successful redirects to view created account.
   */
  submit() {
    this.accountingService.createFinancialActivityAccount(this.financialActivityMappingForm.value)
      .subscribe((response: any) => {
        this.router.navigate(['../view', response.resourceId], { relativeTo: this.route });
    });
  }

}
