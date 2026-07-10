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
    selector: 'mifosx-create-teller',
    templateUrl: './create-teller.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./create-teller.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, NgIf, MatError, MatSelect, NgFor, MatOption, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class CreateTellerComponent implements OnInit {

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
      this.officeData = data.offices;
    });
    this.tellerStatusesData = [{'id': 300, 'code': '300', 'value': 'Active'},
     {'id': 400, 'code': '400', 'value': 'Inactive'}];
  }

  /**
   * Creates the teller form.
   */
  ngOnInit() {
    this.createTellerForm();
  }

  /**
   * Creates the teller form.
   */
  createTellerForm() {
    this.tellerForm = this.formBuilder.group({
      'officeId': ['', Validators.required],
      'name': ['', [Validators.required, Validators.pattern('(^[A-z]).*')]],
      'description': [''],
      'startDate': ['', Validators.required],
      'endDate': [''],
      'status': ['', Validators.required],
    });
  }

  /**
   * Submits the teller form and creates teller,
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
    teller.dateFormat = dateFormat;
    this.organizationService.createTeller(teller).subscribe((response: any) => {
      this.router.navigate(['../', response.resourceId], { relativeTo: this.route });
    });
  }

}
