/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe, NgIf, NgFor } from '@angular/common';

/** Custom Services */
import { OrganizationService } from '../../organization.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';

/**
 * Create teller component.
 */

@Component({
    selector: 'mifosx-edit-teller',
    templateUrl: './edit-teller.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-teller.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, NgIf, MatError, MatSelect, NgFor, MatOption, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class EditTellerComponent implements OnInit {

/** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Teller form. */
  tellerForm: FormGroup;
  /** Office data. */
  officeData: any;
  /** TellerStatuses data. */
  tellerStatusesData: any;
  /** Teller data. */
  tellerData: any;

  /**
   * Retrieves the offices data from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {OrganizationService} organizationService Organization Service.
   * @param {SettingsService} settingsService Settings Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {DatePipe} datePipe Date Pipe to format date.
   */
  constructor(private formBuilder: FormBuilder,
              private organizationService: OrganizationService,
              private settingsService: SettingsService,
              private route: ActivatedRoute,
              private router: Router,
              private datePipe: DatePipe) {
    this.route.data.subscribe((data: any) => {
      this.tellerData = data.teller;
      this.officeData = data.offices;
    });

    if (this.tellerData.status) {
      if (this.tellerData.status === 'ACTIVE') {
          this.tellerData.status = 300;
      } else {
          this.tellerData.status = 400;
      }
    }
    this.tellerStatusesData = [ {'id': 300, 'code': '300', 'value': 'Active'},
     {'id': 400, 'code': '400', 'value': 'Inactive'}];
  }

  /**
   * Creates the Edit teller form.
   */
  ngOnInit() {
    this.createEditTellerForm();
  }

  /**
   * Edit teller form.
   */
  createEditTellerForm() {
    this.tellerForm = this.formBuilder.group({
      'officeId': [{value: this.tellerData.officeId, disabled: true}],
      'name': [this.tellerData.name, [Validators.required, Validators.pattern('(^[A-z]).*')]],
      'description': [this.tellerData.description],
      'startDate': [this.tellerData.startDate && new Date(this.tellerData.startDate), Validators.required],
      'endDate': [this.tellerData.endDate && new Date(this.tellerData.endDate)],
      'status': [this.tellerData.status, Validators.required]
    });
  }

  /**
   * Submits the teller form and edits teller,
   * if successful redirects to tellers.
   */
  submit() {
    const prevStartDate: Date = this.tellerForm.value.startDate;
    const prevEndDate: Date = this.tellerForm.value.endDate;
    // TODO: Update once language and date settings are setup
    const dateFormat = this.settingsService.dateFormat;
    this.tellerForm.patchValue({
      startDate: this.datePipe.transform(prevStartDate as Date, dateFormat),
      endDate: this.datePipe.transform(prevEndDate as Date, dateFormat)
    });
    const teller = this.tellerForm.value;
    teller.locale = this.settingsService.language.code;
    teller.officeId = this.tellerData.officeId;
    teller.dateFormat = dateFormat;
    this.organizationService.updateTeller(this.tellerData.id, teller).subscribe((response: any) => {
      this.router.navigate(['../../', response.resourceId], { relativeTo: this.route });
    });
  }

}
