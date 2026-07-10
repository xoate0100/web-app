/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe, NgIf } from '@angular/common';

/** Custom Services. */
import { ClientsService } from 'app/clients/clients.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';

/**
 * Client Pay Charge component.
 */
@Component({
    selector: 'mifosx-client-pay-charges',
    templateUrl: './client-pay-charges.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./client-pay-charges.component.scss'],
    imports: [MatCard, ReactiveFormsModule, LayoutDirective, MatFormField, MatLabel, MatInput, NgIf, MatError, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class ClientPayChargesComponent implements OnInit {

  /** Transaction Form. */
  transactionForm: any;
  /** Transaction Data. */
  transactionData: any;
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);

    /**
     * Retrieves the charge data from `resolve`.
     * @param {ClientService} clientService Products Service.
     * @param {FormBuilder} formBuilder Form Builder.
     * @param {ActivatedRoute} route Activated Route.
     * @param {Router} router Router for navigation.
     * @param {SettingsService} settingsService Setting service
     */
  constructor(
    private clientsService: ClientsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private settingsService: SettingsService
  ) {
    this.route.data.subscribe((data: any) => {
      this.transactionData = data.transactionData;
    });
  }

  ngOnInit() {
    this.setTransactionForm();
  }

  /**
   * Set Transaction Form.
   */
  setTransactionForm() {
    this.transactionForm = this.formBuilder.group({
      'amount': [this.transactionData.amount, Validators.required],
      'transactionDate': [new Date(), Validators.required]
    });
  }

  /**
   * Submits Transaction form.
   */
  submit() {
    const transactionDate = this.transactionForm.value.transactionDate;
    const dateFormat = 'yyyy-MM-dd';
    this.transactionForm.patchValue({
      transactionDate: this.datePipe.transform(transactionDate as Date, dateFormat)
    });
    const transactions = this.transactionForm.value;
    transactions.locale = this.settingsService.language.code;
    transactions.dateFormat = dateFormat;
    this.clientsService.payClientCharge(this.transactionData.clientId, this.transactionData.id, transactions).subscribe(() => {
      this.router.navigate(['../', 'general']);
    });
  }

}
