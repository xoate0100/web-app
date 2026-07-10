/** Angular Imports. */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe, NgIf, NgFor } from '@angular/common';

/** Custom Services. */
import { OrganizationService } from 'app/organization/organization.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';

/**
 * Allocate Cash component.
 */
@Component({
    selector: 'mifosx-allocate-cash',
    templateUrl: './allocate-cash.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./allocate-cash.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatSelect, NgFor, MatOption, MatCardActions, LayoutAlignDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class AllocateCashComponent implements OnInit {

  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();
  /** Cashier data. */
  cashierData: any;
  /** Cashier Form. */
  allocateCashForm: FormGroup;

  /**
   * Get cashier data from `Resolver`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {ActivatedRoute} route ActivateRoute.
   * @param {DatePipe} datePipe Date Pipe.
   * @param {OrganizationService} organizationService Organization Service.
   * @param {SettingsService} settingsService Settings Service.
   * @param {Router} router Router.
   */
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private datePipe: DatePipe,
              private organizationService: OrganizationService,
              private settingsService: SettingsService,
              private router: Router) {
    this.route.data.subscribe((data: any) => {
      this.cashierData = data.cashierTemplate;
    });
  }

  ngOnInit() {
    this.setCashierForm();
  }

  /**
   * Set Cashier form.
   */
  setCashierForm() {
    this.allocateCashForm = this.formBuilder.group({
      'office': [{value: this.cashierData.officeName, disabled: true}],
      'tellerName': [{value: this.cashierData.tellerName, disabled: true}],
      'cashier': [{value: this.cashierData.cashierName, disabled: true}],
      'assignmentPeriod': [{value: this.datePipe.transform(this.cashierData.startDate, 'dd MMMM yyyy') + ' - ' + this.datePipe.transform(this.cashierData.endDate, 'dd MMMM yyyy'), disabled: true}],
      'txnDate': [new Date(), Validators.required],
      'currencyCode': ['', Validators.required],
      'txnAmount': ['', Validators.required],
      'txnNote': ['', Validators.required]
    });
  }

  /**
   * Submits Allocate Cash form.
   */
  submit() {
    const dateFormat = this.settingsService.dateFormat;
    const txnDate = this.allocateCashForm.value.txnDate;
    this.allocateCashForm.patchValue({
      txnDate: this.datePipe.transform(txnDate as Date, dateFormat)
    });
    const allocateCashForm = this.allocateCashForm.value;
    allocateCashForm.dateFormat = dateFormat;
    allocateCashForm.locale = this.settingsService.language.code;
    this.organizationService.allocateCash(this.cashierData.tellerId, this.cashierData.cashierId, allocateCashForm).subscribe((response: any) => {
      this.router.navigate(['../'], {relativeTo: this.route});
    });
  }

}
