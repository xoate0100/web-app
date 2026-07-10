/** Angular Imports */
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { LoansService } from 'app/loans/loans.service';
import { DatePipe, NgIf, NgFor } from '@angular/common';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, FlexFillDirective, FlexDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

/**
 * Loan Recovery Repayment Action
 */
@Component({
    selector: 'mifosx-recovery-repayment',
    templateUrl: './recovery-repayment.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./recovery-repayment.component.scss'],
    imports: [FaIconComponent, MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatSelect, NgFor, MatOption, FlexFillDirective, FlexDirective, MatButton, MatCardActions, LayoutAlignDirective, LayoutGapDirective, RouterLink, HasPermissionDirective]
})
export class RecoveryRepaymentComponent implements OnInit {

  @Input() dataObject: any;
  /** Loan Id */
  loanId: string;
  /** Payment Type Options */
  paymentTypes: any;
  /** Show payment details */
  showPaymentDetails = false;
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();
  /** Recovery Repayment Loan Form */
  recoveryRepaymentLoanForm: FormGroup;

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
   * Creates the recovery repayment loan form
   * and initialize with the required values
   */
  ngOnInit() {
    this.createRecoveryRepaymentLoanForm();
    this.setRecoveryRepaymentLoanDetails();
  }

  /**
   * Creates the recovery repayment loan form
   */
  createRecoveryRepaymentLoanForm() {
    this.recoveryRepaymentLoanForm = this.formBuilder.group({
      'transactionDate': [new Date(), Validators.required],
      'transactionAmount': ['', Validators.required],
      'paymentTypeId': [''],
      'note': ['']
    });
  }

  /** Sets Recovery Payment Loan Details */
  setRecoveryRepaymentLoanDetails() {
    this.paymentTypes = this.dataObject.paymentTypeOptions;
    this.recoveryRepaymentLoanForm.patchValue({
      transactionAmount: this.dataObject.amount,
      transactionDate: new Date(this.dataObject.date)
    });
  }

  /**
   * Add payment detail fields to the UI.
   */
  addPaymentDetails() {
    this.showPaymentDetails = !this.showPaymentDetails;
    if (this.showPaymentDetails) {
      this.recoveryRepaymentLoanForm.addControl('accountNumber', new FormControl(''));
      this.recoveryRepaymentLoanForm.addControl('checkNumber', new FormControl(''));
      this.recoveryRepaymentLoanForm.addControl('routingCode', new FormControl(''));
      this.recoveryRepaymentLoanForm.addControl('receiptNumber', new FormControl(''));
      this.recoveryRepaymentLoanForm.addControl('bankNumber', new FormControl(''));
    } else {
      this.recoveryRepaymentLoanForm.removeControl('accountNumber');
      this.recoveryRepaymentLoanForm.removeControl('checkNumber');
      this.recoveryRepaymentLoanForm.removeControl('routingCode');
      this.recoveryRepaymentLoanForm.removeControl('receiptNumber');
      this.recoveryRepaymentLoanForm.removeControl('bankNumber');
    }
  }

  /** Submits the recovery payment form */
  submit() {
    const prevTransactionDate: Date = this.recoveryRepaymentLoanForm.value.transactionDate;
    // TODO: Update once language and date settings are setup
    const dateFormat = this.settingsService.dateFormat;
    this.recoveryRepaymentLoanForm.patchValue({
      transactionDate: this.datePipe.transform(prevTransactionDate as Date, dateFormat)
    });
    const recoveryRepaymentLoanData = this.recoveryRepaymentLoanForm.value;
    recoveryRepaymentLoanData.locale = this.settingsService.language.code;
    recoveryRepaymentLoanData.dateFormat = dateFormat;
    this.loanService.submitLoanActionButton(this.loanId, recoveryRepaymentLoanData, 'recoverypayment')
      .subscribe((response: any) => {
        this.router.navigate(['../../general'], { relativeTo: this.route });
      });
  }

}
