/** Angular Imports. */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe, NgIf, NgFor } from '@angular/common';

/** Custom Services. */
import { OrganizationService } from 'app/organization/organization.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';

/**
 * Create Holiday component.
 * TODO: Develop a custom angular checkbox tree and replace offices select.
 */
@Component({
    selector: 'mifosx-create-holiday',
    templateUrl: './create-holiday.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./create-holiday.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, NgIf, MatError, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatSelect, NgFor, MatOption, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class CreateHolidayComponent implements OnInit {

  /** Create Holiday form. */
  holidayForm: FormGroup;
  /** Repayment Scheduling data. */
  repaymentSchedulingTypes: any;
  /** Offices Data */
  officesData: any;
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date(2100, 0, 1);

  /**
   * Get offices and holiday template from `Resolver`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {ActivatedRoute} route Activated Route.
   * @param {DatePipe} datePipe Date Pipe.
   * @param {OrganizationService} organizationService Organization Service.
   * @param {Router} router Router.
   */
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private datePipe: DatePipe,
              private organizationService: OrganizationService,
              private settings: SettingsService,
              private router: Router ) {
    this.route.data.subscribe((data: any) => {
      this.officesData = data.offices;
      this.repaymentSchedulingTypes = data.holidayTemplate;
    });
  }

  ngOnInit() {
    this.setHolidayForm();
    this.buildDependencies();
  }

  /**
   * Sets Holiday Form.
   */
  setHolidayForm() {
    this.holidayForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'fromDate': ['', Validators.required],
      'toDate': ['', Validators.required],
      'reschedulingType': ['', Validators.required],
      'description': [''],
      'offices': ['', Validators.required]
    });
  }

  /**
   * Sets the conditional controls.
   */
  buildDependencies() {
    this.holidayForm.get('reschedulingType')!.valueChanges.subscribe((option: any) => {
      if (option === 2) {
        this.holidayForm.addControl('repaymentsRescheduledTo', new FormControl('', Validators.required));
      } else {
        this.holidayForm.removeControl('repaymentsRescheduledTo');
      }
    });
  }

  /**
   * Submits the create holiday Form.
   */
  submit() {
    const dateFormat = this.settings.dateFormat;
    const locale = this.settings.language.code;
    this.holidayForm.patchValue({
      'fromDate': this.datePipe.transform(this.holidayForm.value.fromDate as Date, dateFormat),
      'toDate': this.datePipe.transform(this.holidayForm.value.toDate as Date, dateFormat),
    });
    if (this.holidayForm.contains('repaymentsRescheduledTo')) {
      this.holidayForm.patchValue({
        'repaymentsRescheduledTo': this.datePipe.transform(this.holidayForm.value.repaymentsRescheduledTo as Date, dateFormat)
      });
    }
    const holiday = {
      ...this.holidayForm.value,
      dateFormat,
      locale
    };
    this.organizationService.createHoliday(holiday).subscribe((response: any) => {
      this.router.navigate(['../', response.resourceId], { relativeTo: this.route });
    });
  }

}
