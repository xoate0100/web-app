/** Angular Imports. */
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe, NgIf } from '@angular/common';

/** Custom Services. */
import { LoansService } from 'app/loans/loans.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';

/**
 * Waive Interest component.
 */
@Component({
    selector: 'mifosx-waive-interest',
    templateUrl: './waive-interest.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./waive-interest.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class WaiveInterestComponent implements OnInit {

  @Input() dataObject: any;

  /** Loan Interest form. */
  loanInterestForm: FormGroup;
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();

  /**
   * Get data from `Resolver`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {Router} router Router.
   * @param {DatePipe} datePipe DatePipe.
   * @param {LoansService} loanService Loan Service.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private datePipe: DatePipe,
              private loanService: LoansService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.setLoanInterestForm();
  }

  /**
   * Set Loan Interest form.
   */
  setLoanInterestForm() {
    this.loanInterestForm = this.formBuilder.group({
      'transactionAmount': [this.dataObject.amount, Validators.required],
      'transactionDate': [this.dataObject.date && new Date(this.dataObject.date), Validators.required],
      'note': ['']
    });
  }

  /**
   * Submits loan interest form.
   */
  submit() {
    const transactionDate = this.loanInterestForm.value.transactionDate;
    const transactionAmount = this.loanInterestForm.value.transactionAmount;
    const dateFormat = 'dd MMMM yyyy';
    this.loanInterestForm.patchValue({
      transactionDate: this.datePipe.transform(transactionDate as Date, dateFormat),
      transactionAmount: parseInt(transactionAmount, 10)
    });
    const loanId = this.route.parent!.snapshot.params['loanId']!;
    const loanInterestForm = this.loanInterestForm.value;
    loanInterestForm.locale = 'en';
    loanInterestForm.dateFormat = dateFormat;
    this.loanService.submitLoanActionButton(loanId, loanInterestForm, 'waiveinterest').subscribe((response: any) => {
      this.router.navigate(['../../general'], {relativeTo: this.route});
    });
  }

}
