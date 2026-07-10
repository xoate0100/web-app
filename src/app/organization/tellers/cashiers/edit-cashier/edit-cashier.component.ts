/** Angular Imports. */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe, NgIf, NgFor } from '@angular/common';

/** Custom Services. */
import { OrganizationService } from 'app/organization/organization.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';

/**
 * Edit Cashier component.
 */
@Component({
    selector: 'mifosx-edit-cashier',
    templateUrl: './edit-cashier.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-cashier.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatInput, NgIf, MatSelect, NgFor, MatOption, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatError, MatCheckbox, MatCardActions, LayoutAlignDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class EditCashierComponent implements OnInit {

  /** Cashier Data. */
  cashierData: any = new Object();
  /** Edit cashier form. */
  editCashierForm: FormGroup;
  /** Is Staff ID present. */
  isStaffId = true;
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();

  /**
   *
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
      this.cashierData.data = data.cashier;
      this.cashierData.template = data.cashierTemplate;
      this.isStaffId = this.cashierData.template.staffOptions.some((element: any) => element.id === this.cashierData.data.staffId);
    });
  }

  ngOnInit() {
    this.setEditChargeForm();
  }

  /**
   * Sets Edit Charge Form.
   */
  setEditChargeForm() {
    this.editCashierForm = this.formBuilder.group({
      'staffId': [{value: this.cashierData.data.staffId, disabled: true}],
      'description': [this.cashierData.data.description],
      'startDate': [this.cashierData.data.startDate && new Date(this.cashierData.data.startDate), Validators.required],
      'endDate': [this.cashierData.data.endDate && new Date(this.cashierData.data.endDate), Validators.required],
      'isFullDay': [this.cashierData.data.isFullDay, Validators.required]
    });
  }

  /**
   * Submits edit cashier form.
   */
  submit() {
    const dateFormat = this.settingsService.dateFormat;
    const startDate = this.editCashierForm.value.startDate;
    const endDate = this.editCashierForm.value.endDate;
    this.editCashierForm.patchValue({
      'startDate': this.datePipe.transform(startDate as Date, dateFormat),
      'endDate': this.datePipe.transform(endDate as Date, dateFormat)
    });
    const editCashierForm = this.editCashierForm.value;
    editCashierForm.locale = this.settingsService.language.code;
    editCashierForm.dateFormat = dateFormat;
    editCashierForm.staffId = this.cashierData.data.staffId;
    this.organizationService.updateCashier(this.cashierData.data.tellerId, this.cashierData.data.id, editCashierForm).subscribe((response: any) => {
      this.router.navigate(['../'], {relativeTo: this.route});
    });
  }

}
