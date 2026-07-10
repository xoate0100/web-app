/** Angular Imports. */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe, NgFor, NgIf } from '@angular/common';

/** Custom Services. */
import { OrganizationService } from 'app/organization/organization.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';

/**
 * Create Cashier component.
 */
@Component({
    selector: 'mifosx-create-cashier',
    templateUrl: './create-cashier.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./create-cashier.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatInput, MatSelect, NgFor, MatOption, NgIf, MatError, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatCheckbox, MatCardActions, LayoutAlignDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class CreateCashierComponent implements OnInit {

  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();
  /** Cashier Template. */
  cashierTemplate: any;
  /** Create cashier form. */
  createCashierForm: FormGroup;

  /**
   * Fetches cashier template from `resolve`
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router.
   * @param {DatePipe} datePipe Date Pipe.
   * @param {OrganizationService} organizationService Organization Service.
   * @param {SettingsService} settingsService Settings Service.
   */
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private datePipe: DatePipe,
              private organizationService: OrganizationService,
              private settingsService: SettingsService ) {
    this.route.data.subscribe((data: any) => {
      this.cashierTemplate = data.cashierTemplate;
    });
  }

  ngOnInit() {
    this.setCreateCashierForm();
  }

  /**
   * Sets Create Charge Form.
   */
  setCreateCashierForm() {
    this.createCashierForm = this.formBuilder.group({
      'staffId': ['', Validators.required],
      'description': [''],
      'startDate': ['', Validators.required],
      'endDate': ['', Validators.required],
      'isFullDay': [false]
    });
  }

  /**
   * Submits Create cashier form.
   */
  submit() {
    const dateFormat = this.settingsService.dateFormat;
    const startDate = this.createCashierForm.value.startDate;
    const endDate = this.createCashierForm.value.endDate;
    this.createCashierForm.patchValue({
      'startDate': this.datePipe.transform(startDate as Date, dateFormat),
      'endDate': this.datePipe.transform(endDate as Date, dateFormat)
    });
    const createCashierForm = this.createCashierForm.value;
    createCashierForm.locale = this.settingsService.language.code;
    createCashierForm.dateFormat = dateFormat;
    this.organizationService.createCashier(this.cashierTemplate.tellerId, createCashierForm).subscribe((response: any) => {
      this.router.navigate(['../'], {relativeTo: this.route});
    });
  }

}
