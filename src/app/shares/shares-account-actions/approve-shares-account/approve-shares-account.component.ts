/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { SharesService } from 'app/shares/shares.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';

/**
 * Approve Shares Account Component
 */
@Component({
    selector: 'mifosx-approve-shares-account',
    templateUrl: './approve-shares-account.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./approve-shares-account.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class ApproveSharesAccountComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Approve Share Account form. */
  approveSharesAccountForm: FormGroup;
  /** Shares Account Id */
  accountId: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {SharesService} sharesService Shares Service
   * @param {DatePipe} datePipe Date Pipe
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   */
  constructor(private formBuilder: FormBuilder,
              private sharesService: SharesService,
              private datePipe: DatePipe,
              private route: ActivatedRoute,
              private router: Router) {
    this.accountId = this.route.parent!.snapshot.params['shareAccountId']!;
  }

  /**
   * Creates the approve shares form.
   */
  ngOnInit() {
    this.createApproveSharesAccountForm();
  }

  /**
   * Creates the approve shares account form.
   */
  createApproveSharesAccountForm() {
    this.approveSharesAccountForm = this.formBuilder.group({
      'approvedDate': ['', Validators.required],
      'note': ['']
    });
  }

  /**
   * Submits the form and approves the share account,
   * if successful redirects to the share account.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = 'en';
    const dateFormat = 'dd MMMM yyyy';
    const prevApprovedDate: Date = this.approveSharesAccountForm.value.approvedDate;
    this.approveSharesAccountForm.patchValue({
      approvedDate: this.datePipe.transform(prevApprovedDate as Date, dateFormat),
    });
    const data = {
      ...this.approveSharesAccountForm.value,
      dateFormat,
      locale
    };
    this.sharesService.executeSharesAccountCommand(this.accountId, 'approve', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
