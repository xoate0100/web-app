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
 * Create Office component.
 */
@Component({
    selector: 'mifosx-create-office',
    templateUrl: './create-office.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./create-office.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, NgIf, MatError, MatSelect, NgFor, MatOption, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class CreateOfficeComponent implements OnInit {

  /** Office form. */
  officeForm: FormGroup;
  /** Office Data */
  officeData: any;
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();

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
              private router: Router,
              private route: ActivatedRoute,
              private datePipe: DatePipe) {
    this.route.data.subscribe((data: any) => {
      this.officeData = data.offices;
    });
  }

  ngOnInit() {
    this.createofficeForm();
  }

  /**
   * Creates the Office Form
   */
  createofficeForm() {
    this.officeForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'parentId': ['', Validators.required],
      'openingDate': ['', Validators.required],
      'externalId': [''],
    });
  }

  /**
   * Submits the office form and creates office.
   * if successful redirects to offices
   */
  submit() {
    const prevOpeningDate: Date = this.officeForm.value.openingDate;
    // TODO: Update once language and date settings are setup
    const dateFormat = this.settingsService.dateFormat;
    this.officeForm.patchValue({
      openingDate: this.datePipe.transform(prevOpeningDate as Date, dateFormat)
    });
    const office = this.officeForm.value;
    office.locale = this.settingsService.language.code;
    office.dateFormat = dateFormat;
    this.organizationService.createOffice(office).subscribe(response => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
