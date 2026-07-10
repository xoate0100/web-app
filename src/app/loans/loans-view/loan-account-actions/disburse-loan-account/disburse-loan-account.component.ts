/** Angular Imports. */
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe, NgIf } from '@angular/common';

/** Custom Service. */
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
 * Disburse To Savings component.
 */
@Component({
    selector: 'mifosx-disburse-loan-account',
    templateUrl: './disburse-loan-account.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./disburse-loan-account.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class DisburseLoanAccountComponent implements OnInit {

  @Input() dataObject: any;

  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();
  /** Disbursement Loan form. */
  disbursementForm: FormGroup;

  /**
   * Get data from `Resolver`.
   * @param {FormBuilder} formBuilder FormBuilder.
   * @param {ActivatedRoute} route ActivatedRoute.
   * @param {Router} router Router.
   * @param {DatePipe} datePipe DatePipe.
   * @param {LoansService} loanService Loan Service.
   * @param {SettingsService} settingsService Settings Service
   */
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private datePipe: DatePipe,
              private loanService: LoansService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.setDisbursementToSavingsForm();
  }

  /**
   * Set Disbursement Loan form.
   */
  setDisbursementToSavingsForm() {
    this.disbursementForm = this.formBuilder.group({
      'actualDisbursementDate': [new Date(), Validators.required],
      'transactionAmount': [this.dataObject.amount, Validators.required],
      'note': ['', Validators.required]
    });
    if (this.dataObject.fixedEmiAmount !== null || this.dataObject.fixedEmiAmount !== undefined) {
      this.disbursementForm.addControl('fixedEmiAmount', new FormControl(this.dataObject.fixedEmiAmount, [Validators.required]));
    }
  }

  /**
   * Submit Disburse Form.
   */
  submit() {
    const actualDisbursementDate = this.disbursementForm.value.actualDisbursementDate;
    const dateFormat = this.settingsService.dateFormat;
    this.disbursementForm.patchValue({
      actualDisbursementDate: this.datePipe.transform(actualDisbursementDate as Date, dateFormat)
    });
    const loanId = this.route.parent!.snapshot.params['loanId']!;
    const disbursementForm = this.disbursementForm.value;
    disbursementForm.locale = this.settingsService.language.code;
    disbursementForm.dateFormat = dateFormat;
    this.loanService.loanActionButtons(loanId, 'disbursetosavings', disbursementForm).subscribe((response: any) => {
      this.router.navigate(['../../general'], {relativeTo: this.route});
    });
  }

}
