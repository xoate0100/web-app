/** Angular Imports. */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe, NgIf } from '@angular/common';

/** Custom services. */
import { LoansService } from 'app/loans/loans.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';

/**
 * Reject Loan component.
 */
@Component({
    selector: 'mifosx-reject-loan',
    templateUrl: './reject-loan.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./reject-loan.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class RejectLoanComponent implements OnInit {

  /** Loan Id. */
  loanId: any;
  /** Reject Loan form. */
  rejectLoanForm: FormGroup;
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();

  /**
   * Retrieve data from `Resolver`.
   * @param formBuilder Form Builder.
   * @param router Router.
   * @param route Activated Route.
   * @param datePipe Date Pipe.
   * @param {SettingsService} settingsService Settings Service
   */
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private loanService: LoansService,
              private datePipe: DatePipe,
              private settingsService: SettingsService ) {
    this.loanId = this.route.parent!.snapshot.params['loanId']!;
  }

  ngOnInit() {
    this.setRejectLoanForm();
  }

  /**
   * Set Reject Loan form.
   */
  setRejectLoanForm() {
    this.rejectLoanForm = this.formBuilder.group({
      'rejectedOnDate': [new Date(), Validators.required],
      'note': ['']
    });
  }

  /**
   * Submit Reject Loan form.
   */
  submit() {
    const rejectedOnDate = this.rejectLoanForm.value.rejectedOnDate;
    const dateFormat = this.settingsService.dateFormat;
    this.rejectLoanForm.patchValue({
      rejectedOnDate: this.datePipe.transform(rejectedOnDate as Date, dateFormat)
    });
    const rejectForm = this.rejectLoanForm.value;
    rejectForm.locale = this.settingsService.language.code;
    rejectForm.dateFormat = dateFormat;
    this.loanService.loanActionButtons(this.loanId, 'reject', rejectForm).subscribe((response: any) => {
      this.router.navigate(['../../general'], { relativeTo: this.route });
    });
  }

}
