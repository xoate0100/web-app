/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe, NgIf, NgFor } from '@angular/common';

/** Custom Services */
import { LoansService } from 'app/loans/loans.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutGapDirective, FlexAlignDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatMiniFabButton, MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

/**
 * Edit Transaction component.
 */
@Component({
    selector: 'mifosx-edit-transaction',
    templateUrl: './edit-transaction.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-transaction.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatSelect, NgFor, MatOption, LayoutGapDirective, FlexAlignDirective, MatMiniFabButton, FaIconComponent, MatCardActions, LayoutAlignDirective, MatButton, RouterLink]
})
export class EditTransactionComponent implements OnInit {

  /** Minimum Due Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Due Date allowed. */
  maxDate = new Date();
  /** Loans account transaction form. */
  editTransactionForm: FormGroup;
  /** loans account transaction payment options. */
  paymentTypeOptions: {
    id: number,
    name: string,
    description: string,
    isCashPayment: boolean,
    position: number
  }[];
  /** Flag to enable payment details fields. */
  addPaymentDetailsFlag: Boolean = false;
  /** loan account's Id */
  loanAccountId: string;
  /** Transaction Template */
  transactionTemplateData: any;

  /**
   * Retrieves the Loan Account transaction template data from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {LoansService} loansService Loans Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {DatePipe} datePipe DatePipe.
   * @param {Router} router Router for navigation.
   * @param {SettingsService} settingsService Settings Service
   */
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private datePipe: DatePipe,
              private loansService: LoansService,
              private settingsService: SettingsService) {
    this.route.data.subscribe((data: any) => {
      this.transactionTemplateData = data.loansAccountTransactionTemplate;
      this.paymentTypeOptions = this.transactionTemplateData.paymentTypeOptions;
    });
    this.loanAccountId = this.route.parent!.parent!.parent!.snapshot.params['loanId']!;
  }

  /**
   * Creates the Loan account transaction form when component loads.
   */
  ngOnInit() {
    this.createEditTransactionForm();
    this.editTransactionForm.patchValue({
      'transactionDate': this.transactionTemplateData.date && new Date(this.transactionTemplateData.date),
      'transactionAmount': this.transactionTemplateData.amount,
      'paymentTypeId': this.transactionTemplateData.paymentTypeId
    });
  }

  /**
   * Method to create the Loan Account Transaction Form.
   */
  createEditTransactionForm() {
    this.editTransactionForm = this.formBuilder.group({
      'transactionDate': ['', Validators.required],
      'transactionAmount': ['', Validators.required],
      'paymentTypeId': [''],
    });
  }

  /**
   * Method to add payment detail fields to the UI.
   */
  addPaymentDetails() {
    this.addPaymentDetailsFlag = !this.addPaymentDetailsFlag;
    if (this.addPaymentDetailsFlag) {
      this.editTransactionForm.addControl('accountNumber', new FormControl(''));
      this.editTransactionForm.addControl('checkNumber', new FormControl(''));
      this.editTransactionForm.addControl('routingCode', new FormControl(''));
      this.editTransactionForm.addControl('receiptNumber', new FormControl(''));
      this.editTransactionForm.addControl('bankNumber', new FormControl(''));
    } else {
      this.editTransactionForm.removeControl('accountNumber');
      this.editTransactionForm.removeControl('checkNumber');
      this.editTransactionForm.removeControl('routingCode');
      this.editTransactionForm.removeControl('receiptNumber');
      this.editTransactionForm.removeControl('bankNumber');
    }
  }

  /**
   * Method to submit the transaction details.
   */
  submit() {
    const prevTransactionDate: Date = this.editTransactionForm.value.transactionDate;
    // TODO: Update once language and date settings are setup
    const dateFormat = this.settingsService.dateFormat;
    this.editTransactionForm.patchValue({
      transactionDate: this.datePipe.transform(prevTransactionDate as Date, dateFormat)
    });
    const transactionData = this.editTransactionForm.value;
    transactionData.locale = this.settingsService.language.code;
    transactionData.dateFormat = dateFormat;
    this.loansService.executeLoansAccountTransactionsCommand(this.loanAccountId, 'modify', transactionData, this.transactionTemplateData.id)
      .subscribe((res: any) => {
        this.router.navigate(['../'], { relativeTo: this.route });
      });
  }

}
