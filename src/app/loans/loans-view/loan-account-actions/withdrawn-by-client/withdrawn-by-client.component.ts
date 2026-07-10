/** Angular Imports */
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { LoansService } from 'app/loans/loans.service';
import { DatePipe, NgIf } from '@angular/common';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';

/**
 * Withdrawn By Applicant Loan Form
 */
@Component({
    selector: 'mifosx-withdrawn-by-client',
    templateUrl: './withdrawn-by-client.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./withdrawn-by-client.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class WithdrawnByClientComponent implements OnInit {

  @Input() dataObject: any;
  /** Loan Id */
  loanId: string;
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();
  /** Withdrawn By Applicant Loan Form */
  withdrawnByClientLoanForm: FormGroup;

  /**
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {LoansService} loanService Loan Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {DatePipe} datePipe Date Pipe.
   * @param {SettingsService} settingsService Settings Service
   */
  constructor(private formBuilder: FormBuilder,
    private loanService: LoansService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private settingsService: SettingsService) {
    this.loanId = this.route.parent!.snapshot.params['loanId']!;
  }

  /**
   * Creates the withdraw by Applicant loan form
   * and initialize with the required values
   */
  ngOnInit() {
    this.createWithdrawnByClientLoanForm();
  }

  /**
   * Creates the create withdraw by applicant form.
   */
  createWithdrawnByClientLoanForm() {
    this.withdrawnByClientLoanForm = this.formBuilder.group({
      'withdrawnOnDate': [new Date(), Validators.required],
      'note': ''
    });
  }

  /** Submits the withdraw by appplicant form */
  submit() {
    const prevTransactionDate: Date = this.withdrawnByClientLoanForm.value.withdrawnOnDate;
    // TODO: Update once language and date settings are setup
    const dateFormat = this.settingsService.dateFormat;
    this.withdrawnByClientLoanForm.patchValue({
      withdrawnOnDate: this.datePipe.transform(prevTransactionDate as Date, dateFormat)
    });
    const WithdrawnByClientLoanData = this.withdrawnByClientLoanForm.value;
    WithdrawnByClientLoanData.locale = this.settingsService.language.code;
    WithdrawnByClientLoanData.dateFormat = dateFormat;
    this.loanService.loanActionButtons(this.loanId, 'withdrawnByApplicant', WithdrawnByClientLoanData)
      .subscribe((response: any) => {
        this.router.navigate(['../../../general'], { relativeTo: this.route });
      });
  }

}
