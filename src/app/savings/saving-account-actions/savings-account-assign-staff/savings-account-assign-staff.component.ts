/** Angular Imports */
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { SavingsService } from 'app/savings/savings.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, FlexDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';

/**
 * Savings Account Assign Staff Component
 */
@Component({
    selector: 'mifosx-savings-account-assign-staff',
    templateUrl: './savings-account-assign-staff.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./savings-account-assign-staff.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, FlexDirective, MatLabel, MatSelect, NgFor, MatOption, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class SavingsAccountAssignStaffComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Savings Account Assign Staff form. */
  savingsAssignStaffForm: FormGroup;
  /** Savings Account Id */
  accountId: any;
  /** Field Officer Data */
  fieldOfficerData: any;
  /** Savings Account Data */
  savingsAccountData: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {SavingsService} savingsService Savings Service
   * @param {DatePipe} datePipe Date Pipe
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   * @param {SettingsService} settingsService Setting service
   */
  constructor(private formBuilder: FormBuilder,
              private savingsService: SavingsService,
              private datePipe: DatePipe,
              private route: ActivatedRoute,
              private router: Router,
              private settingsService: SettingsService) {
    this.accountId = this.route.parent!.snapshot.params['savingAccountId']!;
    this.route.data.subscribe((data: any) => {
      this.savingsAccountData = data.savingsAccountActionData;
    });
  }

  /**
   * Creates the savings account assign staff form.
   */
  ngOnInit() {
    this.fieldOfficerData = this.savingsAccountData.fieldOfficerOptions;
    this.createSavingsAssignStaffForm();
  }

  /**
   * Creates the savings account assign staff form.
   */
  createSavingsAssignStaffForm() {
    this.savingsAssignStaffForm = this.formBuilder.group({
      'toSavingsOfficerId': [''],
      'assignmentDate': ['', Validators.required]
    });
  }

  /**
   * Submits the form and assigns staff the saving account,
   * if successful redirects to the saving account.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const prevAssignmentDate: Date = this.savingsAssignStaffForm.value.assignmentDate;
    this.savingsAssignStaffForm.patchValue({
      assignmentDate: this.datePipe.transform(prevAssignmentDate as Date, dateFormat),
    });
    const data = {
      ...this.savingsAssignStaffForm.value,
      fromSavingsOfficerId: '',
      dateFormat,
      locale
    };
    this.savingsService.executeSavingsAccountCommand(this.accountId, 'assignSavingsOfficer', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
