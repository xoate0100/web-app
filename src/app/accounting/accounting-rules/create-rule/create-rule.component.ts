/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

/** Custom Services */
import { AccountingService } from '../../accounting.service';

/** Custom Validators */
import { oneOfTheFieldsIsRequiredValidator } from '../one-of-the-fields-is-required.validator';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf, NgFor } from '@angular/common';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { ClassDirective } from '@ngbracket/ngx-layout/extended';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';

/**
 * Create accounting rule component.
 */
@Component({
    selector: 'mifosx-create-rule',
    templateUrl: './create-rule.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./create-rule.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatInput, NgIf, MatError, MatSelect, NgFor, MatOption, MatRadioGroup, MatRadioButton, ClassDirective, MatCheckbox, MatCardActions, LayoutAlignDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class CreateRuleComponent implements OnInit {

  /** Accounting rule form. */
  accountingRuleForm: FormGroup;
  /** Office data. */
  officeData: any;
  /** GL Account data. */
  glAccountData: any;
  /** Debit tag data. */
  debitTagData: any;
  /** Credit tag data. */
  creditTagData: any;

  /**
   * Retrieves the offices, gl accounts, debit tags and credit tags data from `resolve`.
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
      this.officeData = data.accountingRulesTemplate.allowedOffices;
      this.glAccountData = data.accountingRulesTemplate.allowedAccounts;
      this.debitTagData = data.accountingRulesTemplate.allowedDebitTagOptions;
      this.creditTagData = data.accountingRulesTemplate.allowedCreditTagOptions;
    });
  }

  /**
   * Creates and sets accounting rules form.
   */
  ngOnInit() {
    this.createAccountingRuleForm();
    this.setAccountingRulesForm();
  }

  /**
   * Creates accounting rule form.
   */
  createAccountingRuleForm() {
    this.accountingRuleForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'officeId': ['', Validators.required],
      'debitRuleType': ['fixedAccount'],
      'accountToDebit': [''],
      'debitTags': [''],
      'allowMultipleDebitEntries': [''],
      'creditRuleType': ['fixedAccount'],
      'accountToCredit': [''],
      'creditTags': [''],
      'allowMultipleCreditEntries': [''],
      'description': ['']
    }, { validator: oneOfTheFieldsIsRequiredValidator });
  }

  /**
   * Sets accounting rule form for selected accounting rule type.
   */
  setAccountingRulesForm() {
    this.accountingRuleForm.get('debitRuleType')!.valueChanges.subscribe((debitRuleType: string) => {
      if (debitRuleType === 'fixedAccount') {
        this.accountingRuleForm.get('debitTags')!.reset();
        this.accountingRuleForm.get('allowMultipleDebitEntries')!.reset();
      } else {
        this.accountingRuleForm.get('accountToDebit')!.reset();
        this.accountingRuleForm.get('allowMultipleDebitEntries')!.setValue(false);
      }
    });
    this.accountingRuleForm.get('creditRuleType')!.valueChanges.subscribe((creditRuleType: string) => {
      if (creditRuleType === 'fixedAccount') {
        this.accountingRuleForm.get('creditTags')!.reset();
        this.accountingRuleForm.get('allowMultipleCreditEntries')!.reset();
      } else {
        this.accountingRuleForm.get('accountToCredit')!.reset();
        this.accountingRuleForm.get('allowMultipleCreditEntries')!.setValue(false);
      }
    });
  }

  /**
   * Submits the accounting rule form and creates accounting rule,
   * if successful redirects to view created rule.
   */
  submit() {
    const accountingRule = this.accountingRuleForm.value;
    if (accountingRule.debitRuleType === 'fixedAccount') {
      delete (accountingRule as any).debitTags;
      delete (accountingRule as any).allowMultipleDebitEntries;
    } else {
      delete (accountingRule as any).accountToDebit;
    }
    if (accountingRule.creditRuleType === 'fixedAccount') {
      delete (accountingRule as any).creditTags;
      delete (accountingRule as any).allowMultipleCreditEntries;
    } else {
      delete (accountingRule as any).accountToCredit;
    }
    delete (accountingRule as any).debitRuleType;
    delete (accountingRule as any).creditRuleType;
    this.accountingService.createAccountingRule(accountingRule).subscribe((response: any) => {
      this.router.navigate(['../view', response.resourceId], { relativeTo: this.route });
    });
  }

}
