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
 * Approve Fixed Deposits Account Component
 */
@Component({
    selector: 'mifosx-approve-fixed-deposits-account',
    templateUrl: './approve-fixed-deposits-account.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./approve-fixed-deposits-account.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class ApproveFixedDepositsAccountComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Approve Fixed Deposits Account form. */
  approveFixedDepositsAccountForm: FormGroup;
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
   * Creates the approve fixed deposits form.
   */
  ngOnInit() {
    this.createApproveFixedDepositsAccountForm();
  }

  /**
   * Creates the approve fixed deposits account form.
   */
  createApproveFixedDepositsAccountForm() {
    this.approveFixedDepositsAccountForm = this.formBuilder.group({
      'approvedOnDate': ['', Validators.required],
      'note': ['']
    });
  }

  /**
   * Submits the form and approves the fixed deposit account,
   * if successful redirects to the fixed deposit account.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = 'en';
    const dateFormat = 'dd MMMM yyyy';
    const prevApprovedOnDate: Date = this.approveFixedDepositsAccountForm.value.approvedOnDate;
    this.approveFixedDepositsAccountForm.patchValue({
      approvedOnDate: this.datePipe.transform(prevApprovedOnDate as Date, dateFormat),
    });
    const data = {
      ...this.approveFixedDepositsAccountForm.value,
      dateFormat,
      locale
    };
    this.fixedDepositsService.executeFixedDepositsAccountCommand(this.accountId, 'approve', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
