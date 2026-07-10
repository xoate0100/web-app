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
 * Loan Prepay Loan Option
 */
@Component({
    selector: 'mifosx-prepay-loan',
    templateUrl: './prepay-loan.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./prepay-loan.component.scss'],
    imports: [FaIconComponent, MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatSelect, NgFor, MatOption, FlexFillDirective, FlexDirective, MatButton, MatCardActions, LayoutAlignDirective, LayoutGapDirective, RouterLink, HasPermissionDirective]
})
export class PrepayLoanComponent implements OnInit {

  @Input() dataObject: any;
  /** Loan Id */
  loanId: string;
  /** Payment Types */
  paymentTypes: any;
  /** Principal Portion */
  principalPortion: any;
  /** Interest Portion */
  interestPortion: any;
  /** Show Payment Details */
  showPaymentDetails = false;
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();
  /** Prepay Loan form. */
  prepayLoanForm: FormGroup;

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
   * Creates the prepay loan form
   * and initialize with the required values
   */
  ngOnInit() {
    this.createprepayLoanForm();
    this.setPrepayLoanDetails();
  }

  /**
   * Creates the prepay loan form.
   */
  createprepayLoanForm() {
    this.prepayLoanForm = this.formBuilder.group({
      'transactionDate': [new Date(), Validators.required],
      'transactionAmount': ['', Validators.required],
      'principal': [{value: '', disabled: true}],
      'interestAmount': [{value: '', disabled: true}, Validators.required],
      'paymentTypeId': [''],
      'note': ['']
    });
  }

  /**
   * Sets the value in the prepay loan form
   */
  setPrepayLoanDetails() {
    this.paymentTypes = this.dataObject.paymentTypeOptions;
    this.prepayLoanForm.patchValue({
      transactionAmount: this.dataObject.amount,
      principal: this.dataObject.principalPortion,
      interestAmount: this.dataObject.interestPortion,
    });
  }

  /**
   * Add payment detail fields to the UI.
   */
  addPaymentDetails() {
    this.showPaymentDetails = !this.showPaymentDetails;
    if (this.showPaymentDetails) {
      this.prepayLoanForm.addControl('accountNumber', new FormControl(''));
      this.prepayLoanForm.addControl('checkNumber', new FormControl(''));
      this.prepayLoanForm.addControl('routingCode', new FormControl(''));
      this.prepayLoanForm.addControl('receiptNumber', new FormControl(''));
      this.prepayLoanForm.addControl('bankNumber', new FormControl(''));
    } else {
      this.prepayLoanForm.removeControl('accountNumber');
      this.prepayLoanForm.removeControl('checkNumber');
      this.prepayLoanForm.removeControl('routingCode');
      this.prepayLoanForm.removeControl('receiptNumber');
      this.prepayLoanForm.removeControl('bankNumber');
    }
  }

  /**
   * Submits the prepay loan form
   */
  submit() {
    const prevTransactionDate: Date = this.prepayLoanForm.value.transactionDate;
    // TODO: Update once language and date settings are setup
    const dateFormat = this.settingsService.dateFormat;
    this.prepayLoanForm.patchValue({
      transactionDate: this.datePipe.transform(prevTransactionDate as Date, dateFormat)
    });
    const prepayLoanData = this.prepayLoanForm.value;
    prepayLoanData.locale = this.settingsService.language.code;
    prepayLoanData.dateFormat = dateFormat;
    this.loanService.submitLoanActionButton(this.loanId, prepayLoanData, 'repayment')
      .subscribe((response: any) => {
        this.router.navigate(['../../general'], { relativeTo: this.route });
    });
  }

}
