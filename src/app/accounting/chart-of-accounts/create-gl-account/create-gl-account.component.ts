/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

/** Custom Services */
import { AccountingService } from '../../accounting.service';
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
 * Create gl account component.
 */
@Component({
    selector: 'mifosx-create-gl-account',
    templateUrl: './create-gl-account.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./create-gl-account.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatSelect, NgFor, MatOption, NgIf, MatError, MatInput, MatCheckbox, MatCardActions, LayoutAlignDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class CreateGlAccountComponent implements OnInit {

  /** GL account form. */
  glAccountForm: FormGroup;
  /** Chart of accounts data. */
  chartOfAccountsData: any;
  /** Account type data. */
  accountTypeData: any;
  /** Account usage data. */
  accountUsageData: any;
  /** Parent data. */
  parentData: any;
  /** Tag data. */
  tagData: any;
  /** Account type id. (for creation of sub-ledger account) */
  accountTypeId: number;
  /** Parent id. (for creation of sub-ledger account) */
  parentId: number;
  /** Cancel route. (depending on creation of gl account or sub-ledger account) */
  cancelRoute = '../../';

  /**
   * Retrieves the chart of accounts data from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {AccountingService} accountingService Accounting Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   */
  constructor(private formBuilder: FormBuilder,
              private accountingService: AccountingService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.queryParamMap.subscribe(params => {
      this.accountTypeId = Number(params.get('accountType'));
      this.parentId = Number(params.get('parent'));
      if (this.parentId) {
        this.cancelRoute = `../view/${this.parentId}`;
      }
    });

    this.route.data.subscribe((data: any) => {
      this.chartOfAccountsData = data.chartOfAccountsTemplate;
      this.accountTypeData = data.chartOfAccountsTemplate.accountTypeOptions;
      this.accountUsageData = data.chartOfAccountsTemplate.usageOptions;
    });
  }

  /**
   * Creates and sets gl account form.
   */
  ngOnInit() {
    this.createGlAccountForm();
    this.setGLAccountForm();
  }

  /**
   * Creates gl account form.
   */
  createGlAccountForm() {
    this.glAccountForm = this.formBuilder.group({
      'type': ['', Validators.required],
      'name': ['', Validators.required],
      'usage': ['', Validators.required],
      'glCode': ['', Validators.required],
      'parentId': [this.parentId || undefined],
      'tagId': [''],
      'manualEntriesAllowed': [true, Validators.required],
      'description': ['']
    });
  }

  /**
   * Sets gl account form for selected account type.
   */
  setGLAccountForm() {
    this.glAccountForm.get('type')!.valueChanges.subscribe(accountTypeId => {
      switch (accountTypeId) {
        case 1: this.parentData = this.chartOfAccountsData.assetHeaderAccountOptions;
                this.tagData = this.chartOfAccountsData.allowedAssetsTagOptions;
        break;
        case 2: this.parentData = this.chartOfAccountsData.liabilityHeaderAccountOptions;
                this.tagData = this.chartOfAccountsData.allowedLiabilitiesTagOptions;
        break;
        case 3: this.parentData = this.chartOfAccountsData.equityHeaderAccountOptions;
                this.tagData = this.chartOfAccountsData.allowedEquityTagOptions;
        break;
        case 4: this.parentData = this.chartOfAccountsData.incomeHeaderAccountOptions;
                this.tagData = this.chartOfAccountsData.allowedIncomeTagOptions;
        break;
        case 5: this.parentData = this.chartOfAccountsData.expenseHeaderAccountOptions;
                this.tagData = this.chartOfAccountsData.allowedExpensesTagOptions;
        break;
      }
    });

    this.glAccountForm.get('type')!.setValue(this.accountTypeId);
  }

  /**
   * Submits the gl account form and creates gl account,
   * if successful redirects to view created account.
   */
  submit() {
    this.accountingService.createGlAccount(this.glAccountForm.value).subscribe((response: any) => {
      this.router.navigate(['../view', response.resourceId], { relativeTo: this.route });
    });
  }

}
