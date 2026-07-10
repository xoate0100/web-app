/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgIf, NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { FixedDepositsService } from '../../fixed-deposits.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';

/**
 * Close On Maturity Fixed Deposits Account Component
 */
@Component({
    selector: 'mifosx-close-fixed-deposits-account',
    templateUrl: './close-fixed-deposits-account.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./close-fixed-deposits-account.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatSelect, NgFor, MatOption, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class CloseFixedDepositsAccountComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Close on maturity FD Account form. */
  closeOnMaturityAccountForm: FormGroup;
  /** Savings Account Data */
  savingsAccountsData: any;
  /** On account Closure Options */
  onAccountClosureOptions: any;
  /** Fixed Deposits Account Id */
  accountId: any;
  /** Maturity Amount */
  maturityAmount: any;

  /**
   * Fetches close action data from `resolve`
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
    this.route.data.subscribe((data: any) => {
      this.savingsAccountsData = data.fixedDepositsAccountActionData.savingsAccounts;
      this.onAccountClosureOptions = data.fixedDepositsAccountActionData.onAccountClosureOptions;
      this.maturityAmount = data.fixedDepositsAccountActionData.maturityAmount;
    });
    this.accountId = this.route.parent!.snapshot.params['fixedDepositAccountId']!;
  }

  /**
   * Creates the close on maturity fd account form.
   */
  ngOnInit() {
    this.createCloseOnMaturityAccountForm();
    this.addTransferDetails();
  }

  /**
   * Creates the close on maturity fd account form.
   */
  createCloseOnMaturityAccountForm() {
    this.closeOnMaturityAccountForm = this.formBuilder.group({
      'closedOnDate': ['', Validators.required],
      'maturityAmount': [{value: this.maturityAmount, disabled: true}],
      'onAccountClosureId': ['', Validators.required],
      'note': ['']
    });
  }

  /**
   * Subscribes to value changes of `onAccountClosureId` adds and removes transfer details accordingly.
   */
  addTransferDetails() {
    this.closeOnMaturityAccountForm.get('onAccountClosureId')!.valueChanges.subscribe((id: any) => {
      if (id === 200) {
        this.closeOnMaturityAccountForm.addControl('toSavingsAccountId', new FormControl('', Validators.required));
        this.closeOnMaturityAccountForm.addControl('transferDescription', new FormControl(''));
      } else {
        this.closeOnMaturityAccountForm.removeControl('toSavingsAccountId');
        this.closeOnMaturityAccountForm.removeControl('transferDescription');
      }
    });
  }

  /**
   * Submits the form and close the fd account on maturity,
   * if successful redirects to the fd account.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = 'en';
    const dateFormat = 'dd MMMM yyyy';
    const prevClosedDate: Date = this.closeOnMaturityAccountForm.value.closedOnDate;
    this.closeOnMaturityAccountForm.patchValue({
      closedOnDate: this.datePipe.transform(prevClosedDate as Date, dateFormat),
    });
    const data = {
      ...this.closeOnMaturityAccountForm.value,
      dateFormat,
      locale
    };
    this.fixedDepositsService.executeFixedDepositsAccountCommand(this.accountId, 'close', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
