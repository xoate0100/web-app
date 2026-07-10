/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgIf, NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { ClientsService } from 'app/clients/clients.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, FlexDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';

/**
 * Withdraw Client Component
 */
@Component({
    selector: 'mifosx-withdraw-client',
    templateUrl: './withdraw-client.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./withdraw-client.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, FlexDirective, MatSelect, NgFor, MatOption, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class WithdrawClientComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Withdraw Client form. */
  withdrawClientForm: FormGroup;
  /** Client Data */
  withdrawalData: any;
  /** Client Id */
  clientId: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {ClientsService} clientsService Clients Service
   * @param {DatePipe} datePipe Date Pipe
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   * @param {SettingsService} settingsService Setting service
   */
  constructor(private formBuilder: FormBuilder,
              private clientsService: ClientsService,
              private datePipe: DatePipe,
              private route: ActivatedRoute,
              private router: Router,
              private settingsService: SettingsService) {
    this.route.data.subscribe((data: any) => {
      this.withdrawalData = data.clientActionData.narrations;
    });
    this.clientId = this.route.parent!.snapshot.params['clientId']!;
  }

  ngOnInit() {
    this.createWithdrawClientForm();
  }

  /**
   * Creates the withdraw client form.
   */
  createWithdrawClientForm() {
    this.withdrawClientForm = this.formBuilder.group({
      'withdrawalDate': ['', Validators.required],
      'withdrawalReasonId': ['', Validators.required]
    });
  }

  /**
   * Submits the form and withdraws the client.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const prevWithdrawalDate: Date = this.withdrawClientForm.value.withdrawalDate;
    this.withdrawClientForm.patchValue({
      withdrawalDate: this.datePipe.transform(prevWithdrawalDate as Date, dateFormat),
    });
    const data = {
      ...this.withdrawClientForm.value,
      dateFormat,
      locale
    };
    this.clientsService.executeClientCommand(this.clientId, 'withdraw', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
