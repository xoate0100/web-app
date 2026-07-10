/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { FixedDepositsService } from 'app/deposits/fixed-deposits/fixed-deposits.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';

/**
 * Withdraw By Client Fixed Deposits Account Component
 */
@Component({
    selector: 'mifosx-withdraw-by-client-fixed-deposits-account',
    templateUrl: './withdraw-by-client-fixed-deposits-account.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./withdraw-by-client-fixed-deposits-account.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class WithdrawByClientFixedDepositsAccountComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Withdraw Fixed Deposits Account form. */
  withdrawFixedDepositsAccountForm: FormGroup;
  /** Fixed Deposits Account Id */
  accountId: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {FixedDepositsService} fixedDepositsService Fixed Deposits Service
   * @param {DatePipe} datePipe Date Pipe
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   */
  constructor(private formBuilder: FormBuilder,
              private fixedDepositsService: FixedDepositsService,
              private datePipe: DatePipe,
              private route: ActivatedRoute,
              private router: Router) {
    this.accountId = this.route.parent!.snapshot.params['fixedDepositAccountId']!;
  }

  /**
   * Creates the withdraw fixed deposits form.
   */
  ngOnInit() {
    this.createWithdrawFixedDepositsAccountForm();
  }

  /**
   * Creates the withdraw fixed deposits account form.
   */
  createWithdrawFixedDepositsAccountForm() {
    this.withdrawFixedDepositsAccountForm = this.formBuilder.group({
      'withdrawnOnDate': ['', Validators.required],
      'note': ['']
    });
  }

  /**
   * Submits the form and withdraws the fixed deposit account by client,
   * if successful redirects to the fixed deposit account.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = 'en';
    const dateFormat = 'dd MMMM yyyy';
    const prevWithdrawnOnDate: Date = this.withdrawFixedDepositsAccountForm.value.withdrawnOnDate;
    this.withdrawFixedDepositsAccountForm.patchValue({
      withdrawnOnDate: this.datePipe.transform(prevWithdrawnOnDate as Date, dateFormat),
    });
    const data = {
      ...this.withdrawFixedDepositsAccountForm.value,
      dateFormat,
      locale
    };
    this.fixedDepositsService.executeFixedDepositsAccountCommand(this.accountId, 'withdrawnByApplicant', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
