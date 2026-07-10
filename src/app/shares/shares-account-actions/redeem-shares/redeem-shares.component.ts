/** Angular Imports */
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
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
 * Redeem Shares Component
 */
@Component({
    selector: 'mifosx-redeem-shares',
    templateUrl: './redeem-shares.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./redeem-shares.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class RedeemSharesComponent implements OnInit {

  /** Shares account data. */
  sharesAccountData: any;

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Redeem Share Account form. */
  redeemSharesForm: FormGroup;
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
    this.route.data.subscribe((data: any) => {
      this.sharesAccountData = data.shareAccountActionData;
    });
  }

  /**
   * Creates the apply shares form.
   * Fetching data from service as action buttons malfunction
   * in clients view upon using a common resolver.
   */
  ngOnInit() {
    this.createRedeemSharesAccountForm();
    this.redeemSharesForm.get('unitPrice')!.patchValue(this.sharesAccountData.currentMarketPrice || '');
  }

  /**
   * Creates the apply shares form.
   */
  createRedeemSharesAccountForm() {
    this.redeemSharesForm = this.formBuilder.group({
      'requestedDate': ['', Validators.required],
      'requestedShares': ['', Validators.required],
      'unitPrice': [{value: '', disabled: true}]
    });
  }

  /**
   * Submits the form and applies additional shares to the share account,
   * if successful redirects to the share account.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = 'en';
    const dateFormat = 'dd MMMM yyyy';
    const prevRequestedDate: Date = this.redeemSharesForm.value.requestedDate;
    this.redeemSharesForm.patchValue({
      requestedDate: this.datePipe.transform(prevRequestedDate as Date, dateFormat),
    });
    const data = {
      ...this.redeemSharesForm.value,
      unitPrice: this.redeemSharesForm.get('unitPrice')!.value,
      dateFormat,
      locale
    };
    this.sharesService.executeSharesAccountCommand(this.accountId, 'redeemshares', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
