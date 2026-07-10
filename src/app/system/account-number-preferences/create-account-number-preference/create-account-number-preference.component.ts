/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

/** Custom Services */
import { SystemService } from '../../system.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';

/**
 * Create Account Number Preference Component.
 */
@Component({
    selector: 'mifosx-create-account-number-preference',
    templateUrl: './create-account-number-preference.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./create-account-number-preference.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatSelect, NgFor, MatOption, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class CreateAccountNumberPreferenceComponent implements OnInit {

  /** Account Number Preferences Form */
  accountNumberPreferenceForm: FormGroup;
  /** Account Number Preferences Template Data */
  accountNumberPreferencesTemplateData: any;
  /** Prefix Type Data */
  prefixTypeData: any[];

  /**
   * Retrieves the account number preferences template data from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {SystemService} systemService Accounting Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   */
  constructor(private formBuilder: FormBuilder,
              private systemService: SystemService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.data.subscribe((data: any) => {
      this.accountNumberPreferencesTemplateData = data.accountNumberPreferencesTemplate;
    });
  }

  /**
   * Creates the account number preference form.
   * Subscribe on Form Controls to change Prefix Type data.
   */
  ngOnInit() {
    this.createAccountNumberPreferenceForm();
    this.getPrefixTypeValue();
  }

  /**
   * Subscribes on Form Controls to change Prefix Type data.
   */
  getPrefixTypeValue() {
    this.accountNumberPreferenceForm.get('accountType')!.valueChanges
      .subscribe(accountId => {
        this.prefixTypeData = this.accountNumberPreferencesTemplateData.prefixTypeOptions[`accountType.${this.accountNumberPreferencesTemplateData.accountTypeOptions.find((accountType: any) => accountType.id === accountId).value.toLowerCase()}`];
      });
  }

  /**
   * Creates the account number preference form.
   */
  createAccountNumberPreferenceForm() {
    this.accountNumberPreferenceForm = this.formBuilder.group({
      'accountType': ['', Validators.required],
      'prefixType': ['']
    });
  }

  /**
   * Submits the account number preference form and creates a account number preference,
   * if successful redirects to view created account number preference.
   */
  submit() {
    const accountNumberPreference = this.accountNumberPreferenceForm.value;
    if (accountNumberPreference.prefixType === '') {
      accountNumberPreference.prefixType = undefined;
    }
    this.systemService.createAccountNumberPreference(accountNumberPreference)
      .subscribe((response: any) => {
        this.router.navigate(['../', response.resourceId], { relativeTo: this.route });
      });
  }

}
