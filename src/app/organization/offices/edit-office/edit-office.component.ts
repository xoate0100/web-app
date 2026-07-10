/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe, NgIf, NgFor } from '@angular/common';

/** Custom Services */
import { OrganizationService } from 'app/organization/organization.service';
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
 * Edit Office component.
 */
@Component({
    selector: 'mifosx-edit-office',
    templateUrl: './edit-office.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-office.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, NgIf, MatError, MatSelect, NgFor, MatOption, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class EditOfficeComponent implements OnInit {

  /** Selected Data. */
  officeData: any;
  /** Office form. */
  officeForm: FormGroup;
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();

    /**
     * Retrieves the charge data from `resolve`.
     * @param {ProductsService} organizationService Organization Service.
     * @param {SettingsService} settingsService Settings Service.
     * @param {FormBuilder} formBuilder Form Builder.
     * @param {ActivatedRoute} route Activated Route.
     * @param {Router} router Router for navigation.
     * @param {MatDialog} dialog Dialog reference.
     * @param {DatePipe} datepipe Convert Date.
     */
    constructor(private organizationService: OrganizationService,
                private settingsService: SettingsService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private datepipe: DatePipe) {
      this.route.data.subscribe((data: any) => {
        this.officeData = data.officeTemplate;
      });
    }

  ngOnInit() {
    this.createOfficeForm();
  }

  /**
   * Create Edit Office Form.
   */
  createOfficeForm() {
    this.officeForm = this.formBuilder.group({
      'name': [this.officeData.name, Validators.required],
      'openingDate': [this.officeData.openingDate && new Date(this.officeData.openingDate), Validators.required],
      'externalId': [this.officeData.externalId],
    });
    if (this.officeData.allowedParents.length) {
      this.officeForm.addControl('parentId', this.formBuilder.control(this.officeData.parentId, Validators.required));
    }
  }

  /**
   * Submits the edit office form.
   */
  submit() {
    const openedOn: Date = this.officeForm.value.openingDate;
    const dateFormat = this.settingsService.dateFormat;
    this.officeForm.patchValue({
      openingDate: this.datepipe.transform(openedOn, dateFormat)
    });
    const office = this.officeForm.value;
    office.locale = this.settingsService.language.code;
    office.dateFormat = dateFormat;
    this.organizationService.updateOffice(this.officeData.id, office).subscribe((response: any) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

}
