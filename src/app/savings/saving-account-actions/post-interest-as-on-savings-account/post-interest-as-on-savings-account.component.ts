/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { SavingsService } from 'app/savings/savings.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { FlexDirective, LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';

/**
 * Post Interest Savings Account Component
 */
@Component({
    selector: 'mifosx-post-interest-as-on-savings-account',
    templateUrl: './post-interest-as-on-savings-account.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./post-interest-as-on-savings-account.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, MatFormField, FlexDirective, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class PostInterestAsOnSavingsAccountComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Post Interest Savings Account form. */
  postInterestSavingsAccountForm: FormGroup;
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
   * Creates the post interest savings form.
   */
  ngOnInit() {
    this.createPostInterestSavingsAccountForm();
  }

  /**
   * Creates the post interest savings account form.
   */
  createPostInterestSavingsAccountForm() {
    this.postInterestSavingsAccountForm = this.formBuilder.group({
      'transactionDate': ['', Validators.required]
    });
  }

  /**
   * Submits the form and post interests of the saving account,
   * if successful redirects to the saving account.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const prevTransactionDate: Date = this.postInterestSavingsAccountForm.value.transactionDate;
    this.postInterestSavingsAccountForm.patchValue({
      transactionDate: this.datePipe.transform(prevTransactionDate as Date, dateFormat),
    });
    const data = {
      ...this.postInterestSavingsAccountForm.value,
      IsPostInterestAsOn: true,
      dateFormat,
      locale
    };
    this.savingsService.executeSavingsAccountTransactionsCommand(this.accountId, 'postInterestAsOn', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
