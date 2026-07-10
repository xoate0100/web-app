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
 * Loan Make Repayment Component
 */
@Component({
    selector: 'mifosx-make-repayment',
    templateUrl: './make-repayment.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./make-repayment.component.scss'],
    imports: [FaIconComponent, MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatSelect, NgFor, MatOption, FlexFillDirective, FlexDirective, MatButton, MatCardActions, LayoutAlignDirective, LayoutGapDirective, RouterLink, HasPermissionDirective]
})
export class MakeRepaymentComponent implements OnInit {

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
  /** Repayment Loan Form */
  repaymentLoanForm: FormGroup;

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
   * Creates the repayment loan form
   * and initialize with the required values
   */
  ngOnInit() {
    this.createRepaymentLoanForm();
    // this.setRepaymentLoanDetails();
  }

  /**
   * Creates the create close form.
   */
  createRepaymentLoanForm() {
    this.repaymentLoanForm = this.formBuilder.group({
      'transactionDate': [new Date(), Validators.required],
      'transactionAmount': ['', Validators.required],
      'paymentTypeId': '',
      'note': ''
    });
  }

  setRepaymentLoanDetails() {
    this.paymentTypes = this.dataObject.paymentTypeOptions;
    this.repaymentLoanForm.patchValue({
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
      this.repaymentLoanForm.addControl('accountNumber', new FormControl(''));
      this.repaymentLoanForm.addControl('checkNumber', new FormControl(''));
      this.repaymentLoanForm.addControl('routingCode', new FormControl(''));
      this.repaymentLoanForm.addControl('receiptNumber', new FormControl(''));
      this.repaymentLoanForm.addControl('bankNumber', new FormControl(''));
    } else {
      this.repaymentLoanForm.removeControl('accountNumber');
      this.repaymentLoanForm.removeControl('checkNumber');
      this.repaymentLoanForm.removeControl('routingCode');
      this.repaymentLoanForm.removeControl('receiptNumber');
      this.repaymentLoanForm.removeControl('bankNumber');
    }
  }

  /** Submits the repayment form */
  submit() {
    const prevTransactionDate: Date = this.repaymentLoanForm.value.transactionDate;
    // TODO: Update once language and date settings are setup
    const dateFormat = this.settingsService.dateFormat;
    this.repaymentLoanForm.patchValue({
      transactionDate: this.datePipe.transform(prevTransactionDate as Date, dateFormat)
    });
    const repaymentLoanData = this.repaymentLoanForm.value;
    repaymentLoanData.locale = this.settingsService.language.code;
    repaymentLoanData.dateFormat = dateFormat;
    this.loanService.submitLoanActionButton(this.loanId, repaymentLoanData, 'repayment')
      .subscribe((response: any) => {
        this.router.navigate(['../../../general'], { relativeTo: this.route });
    });
  }

}
