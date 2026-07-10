/** Angular Imports. */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
 * Edit Holiday component.
 */
@Component({
    selector: 'mifosx-edit-holiday',
    templateUrl: './edit-holiday.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-holiday.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, NgIf, MatError, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatSelect, NgFor, MatOption, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class EditHolidayComponent implements OnInit {

  /** Edit Holiday form. */
  holidayForm: FormGroup;
  /** Holiday data. */
  holidayData: any;
  /** Rescheduling Type. */
  reSchedulingType: number;
  /** Is Active Holiday. */
  isActiveHoliday = true;
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();

  /**
   * Get holiday and holiday template from `Resolver`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {ActivatedRoute} route Activated Route.
   * @param {DatePipe} datePipe Date Pipe.
   * @param {OrganizationService} organizatioService Organization Service.
   * @param {Router} router Router.
   */
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private datePipe: DatePipe,
              private organizatioService: OrganizationService,
              private settings: SettingsService,
              private router: Router ) {
    this.route.data.subscribe((data: any) => {
      this.holidayData = data.holiday;
      this.holidayData.repaymentSchedulingTypes = data.holidayTemplate;
      this.reSchedulingType = this.holidayData.reschedulingType;
      if ( this.holidayData.status.value === 'Active' ) {
        this.isActiveHoliday = true;
      } else {
        this.isActiveHoliday = false;
      }
    });
  }

  ngOnInit() {
    this.setEditForm();
    if (!this.isActiveHoliday) {
      this.getReschedulingType();
    }
  }

  /**
   * Sets Edit Form.
   */
  setEditForm() {
    this.holidayForm = this.formBuilder.group({
      'name': [this.holidayData.name, Validators.required],
      'description': [this.holidayData.description]
    });
    if (!this.isActiveHoliday) {
      this.holidayForm.addControl('fromDate', new FormControl(this.holidayData.fromDate && new Date(this.holidayData.fromDate), Validators.required));
      this.holidayForm.addControl('toDate', new FormControl(this.holidayData.toDate && new Date(this.holidayData.toDate), Validators.required));
      this.holidayForm.addControl('reschedulingType', new FormControl(this.holidayData.reschedulingType, Validators.required));
      if (this.reSchedulingType === 2) {
        this.holidayForm.addControl('repaymentsRescheduledTo', new FormControl(this.holidayData.repaymentsRescheduledTo && new Date(this.holidayData.repaymentsRescheduledTo), Validators.required));
      }
    }
  }

  /**
   * Get Rescheduling Type.
   */
  getReschedulingType() {
    this.holidayForm.get('reschedulingType')!.valueChanges.subscribe( (option: any) => {
      this.reSchedulingType = option;
      if (option === 2) {
        this.holidayForm.addControl('repaymentsRescheduledTo', new FormControl(new Date(), Validators.required));
      } else {
        this.holidayForm.removeControl('repaymentsRescheduledTo');
      }
    });
  }

  /**
   * Submits Edit Holiday Form.
   */
  submit() {
    const dateFormat = this.settings.dateFormat;
    if (!this.isActiveHoliday) {
      const fromDate: Date = this.holidayForm.value.fromDate;
      const toDate: Date = this.holidayForm.value.toDate;
      if (this.reSchedulingType === 2 ) {
        const repaymentScheduledTo: Date = this.holidayForm.value.repaymentsRescheduledTo;
        this.holidayForm.patchValue({
          repaymentsRescheduledTo: this.datePipe.transform(repaymentScheduledTo as Date, dateFormat)
        });
      }
      this.holidayForm.patchValue({
        fromDate: this.datePipe.transform(fromDate as Date, dateFormat),
        toDate: this.datePipe.transform(toDate as Date, dateFormat)
      });
    }
    const holidayForm = this.holidayForm.value;
    holidayForm.locale = this.settings.language.code;
    holidayForm.dateFormat = dateFormat;
    this.organizatioService.updateHoliday(this.holidayData.id, holidayForm).subscribe(response => {
      /** TODO Add Redirects to ViewMakerCheckerTask page. */
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

}
