/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

/** Custom Services */
import { AccountingService } from '../../accounting.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';

/**
 * Edit closure component.
 */
@Component({
    selector: 'mifosx-edit-closure',
    templateUrl: './edit-closure.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-closure.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatSelect, NgFor, MatOption, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class EditClosureComponent implements OnInit {

  /** Accounting closure form. */
  accountingClosureForm: FormGroup;
  /** GL Account closure. */
  glAccountClosure: any;
  /** Office data. */
  officeData: any;

  /**
   * Retrieves the gl account closure data from `resolve`.
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
      this.glAccountClosure = data.glAccountClosure;
    });
  }

  /**
   * Creates and sets accounting closure form.
   */
  ngOnInit() {
    this.createAccountingClosureForm();
    this.setAccountingClosure();
  }

  /**
   * Creates accounting closure form.
   */
  createAccountingClosureForm() {
    this.accountingClosureForm = this.formBuilder.group({
      'officeId': [{ value: '', disabled: true }, Validators.required],
      'closingDate': [{ value: '', disabled: true }, Validators.required],
      'comments': ['']
    });
  }

  /**
   * Sets accounting closure form.
   */
  setAccountingClosure() {
    this.officeData = [{ id: this.glAccountClosure.officeId, name: this.glAccountClosure.officeName }];
    this.accountingClosureForm.get('officeId')!.setValue(this.glAccountClosure.officeId);
    this.accountingClosureForm.get('closingDate')!.setValue(new Date(this.glAccountClosure.closingDate));
    this.accountingClosureForm.get('comments')!.setValue(this.glAccountClosure.comments);
  }


  /**
   * Submits the accounting closure form and updates accounting closure,
   * if successful redirects to view updated closure.
   */
  submit() {
    this.accountingService.updateAccountingClosure(this.glAccountClosure.id,
      { comments: this.accountingClosureForm.value.comments })
      .subscribe((response: any) => {
        this.router.navigate(['../../', response.resourceId], { relativeTo: this.route });
      });
  }

}
