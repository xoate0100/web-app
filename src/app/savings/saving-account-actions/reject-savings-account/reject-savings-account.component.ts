/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { SavingsService } from 'app/savings/savings.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';

/**
 * Reject Savings Account Component
 */
@Component({
    selector: 'mifosx-reject-savings-account',
    templateUrl: './reject-savings-account.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./reject-savings-account.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class RejectSavingsAccountComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Reject Saving Account form. */
  rejectSavingsAccountForm: FormGroup;
  /** Savings Account Id */
  accountId: any;

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
  }

  /**
   * Creates the reject savings form.
   */
  ngOnInit() {
    this.createRejectSavingsAccountForm();
  }

  /**
   * Creates the reject savings account form.
   */
  createRejectSavingsAccountForm() {
    this.rejectSavingsAccountForm = this.formBuilder.group({
      'rejectedOnDate': ['', Validators.required],
      'note': ['']
    });
  }

  /**
   * Submits the form and rejects the saving account,
   * if successful redirects to the saving account.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const prevRejectedOnDate: Date = this.rejectSavingsAccountForm.value.rejectedOnDate;
    this.rejectSavingsAccountForm.patchValue({
      rejectedOnDate: this.datePipe.transform(prevRejectedOnDate as Date, dateFormat),
    });
    const data = {
      ...this.rejectSavingsAccountForm.value,
      dateFormat,
      locale
    };
    this.savingsService.executeSavingsAccountCommand(this.accountId, 'reject', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
