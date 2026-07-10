/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

/** Custom Services */
import { AccountingService } from '../../accounting.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';

/**
 * Create closure component.
 */
@Component({
    selector: 'mifosx-create-closure',
    templateUrl: './create-closure.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./create-closure.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatSelect, NgFor, MatOption, NgIf, MatError, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class CreateClosureComponent implements OnInit {

  /** Minimum closing date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum closing date allowed. */
  maxDate = new Date();
  /** Accounting closure form. */
  accountingClosureForm: FormGroup;
  /** Office data. */
  officeData: any;

  /**
   * Retrieves the offices data from `resolve`.
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
      this.officeData = data.offices;
    });
  }

  /**
   * Creates the accounting closure form.
   */
  ngOnInit() {
    this.createAccountingClosureForm();
  }

  /**
   * Creates the accounting closure form.
   */
  createAccountingClosureForm() {
    this.accountingClosureForm = this.formBuilder.group({
      'officeId': ['', Validators.required],
      'closingDate': ['', Validators.required],
      'comments': ['']
    });
  }

  /**
   * Submits the accounting closure form and creates accounting closure,
   * if successful redirects to view created closure.
   */
  submit() {
    const accountingClosure = this.accountingClosureForm.value;
    // TODO: Update once language and date settings are setup
    accountingClosure.locale = 'en';
    accountingClosure.dateFormat = 'yyyy-MM-dd';
    if (accountingClosure.closingDate instanceof Date) {
      let day = accountingClosure.closingDate.getDate();
      let month = accountingClosure.closingDate.getMonth() + 1;
      const year = accountingClosure.closingDate.getFullYear();
      if (day < 10) {
        day = `0${day}`;
      }
      if (month < 10) {
        month = `0${month}`;
      }
      accountingClosure.closingDate = `${year}-${month}-${day}`;
    }
    this.accountingService.createAccountingClosure(accountingClosure).subscribe((response: any) => {
      this.router.navigate(['../view', response.resourceId], { relativeTo: this.route });
    });
  }

}
