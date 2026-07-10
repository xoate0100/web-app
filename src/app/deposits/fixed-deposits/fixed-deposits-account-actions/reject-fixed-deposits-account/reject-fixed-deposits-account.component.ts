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
 * Reject Fixed Deposits Account Component
 */
@Component({
    selector: 'mifosx-reject-fixed-deposits-account',
    templateUrl: './reject-fixed-deposits-account.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./reject-fixed-deposits-account.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class RejectFixedDepositsAccountComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Reject Fixed Deposit Account form. */
  rejectFixedDepositsAccountForm: FormGroup;
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
   * Creates the reject fixed deposits form.
   */
  ngOnInit() {
    this.createRejectFixedDepositsAccountForm();
  }

  /**
   * Creates the reject fixed deposits account form.
   */
  createRejectFixedDepositsAccountForm() {
    this.rejectFixedDepositsAccountForm = this.formBuilder.group({
      'rejectedOnDate': ['', Validators.required],
      'note': ['']
    });
  }

  /**
   * Submits the form and rejects the fixed deposit account,
   * if successful redirects to the fixed deposit account.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = 'en';
    const dateFormat = 'dd MMMM yyyy';
    const prevRejectedOnDate: Date = this.rejectFixedDepositsAccountForm.value.rejectedOnDate;
    this.rejectFixedDepositsAccountForm.patchValue({
      rejectedOnDate: this.datePipe.transform(prevRejectedOnDate as Date, dateFormat),
    });
    const data = {
      ...this.rejectFixedDepositsAccountForm.value,
      dateFormat,
      locale
    };
    this.fixedDepositsService.executeFixedDepositsAccountCommand(this.accountId, 'reject', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
