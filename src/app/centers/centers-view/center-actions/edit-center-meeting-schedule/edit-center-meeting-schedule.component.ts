/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { CentersService } from 'app/centers/centers.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';

/**
 * Edit Center Meetings Schedule Component
 */
@Component({
    selector: 'mifosx-edit-center-meeting-schedule',
    templateUrl: './edit-center-meeting-schedule.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-center-meeting-schedule.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatSelect, NgFor, MatOption, NgIf, MatError, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, DatePipe]
})
export class EditCenterMeetingScheduleComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Center Meeting form. */
  centerEditMeetingScheduleForm: FormGroup;
  /** Calendar Template Data */
  calendarTemplate: any;
  /** Center Id */
  centerId: any;
  /** CalendarI ID */
  calendarId: any;
  /** Next meetings data */
  nextMeetingDates: any;

  /**
   * Fetches Calendar Template from `resolve`
   * @param {FormBuilder} formBuilder Form Builder
   * @param {CentersService} centersService Shares Service
   * @param {SettingsService} settingsService Settings Service.
   * @param {DatePipe} datePipe Date Pipe
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   */
  constructor(private formBuilder: FormBuilder,
              private centersService: CentersService,
              private settingsService: SettingsService,
              private datePipe: DatePipe,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.data.subscribe((data: any) => {
      this.calendarTemplate = data.centersActionData;
      this.nextMeetingDates = this.calendarTemplate.nextTenRecurringDates;
    });
    this.calendarId = this.route.snapshot.queryParams['calendarId']!;
    this.centerId = this.route.parent!.snapshot.params['centerId']!;
  }

  ngOnInit() {
    this.createEditMeetingScheduleForm();
  }

  /**
   * Creates the Edit Center Meeting Schedule form.
   */
  createEditMeetingScheduleForm() {
    this.centerEditMeetingScheduleForm = this.formBuilder.group({
      'presentMeetingDate': ['', Validators.required],
      'newMeetingDate': ['', Validators.required]
    });
  }

  /**
   * Submits the form and updates the meeting.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const reschedulebasedOnMeetingDates = true;
    const prevOldDate: Date = new Date(this.centerEditMeetingScheduleForm.value.presentMeetingDate);
    const prevNewDate: Date = this.centerEditMeetingScheduleForm.value.newMeetingDate;
    this.centerEditMeetingScheduleForm.patchValue({
      'presentMeetingDate': this.datePipe.transform(prevOldDate as Date, dateFormat),
      'newMeetingDate': this.datePipe.transform(prevNewDate as Date, dateFormat)
    });
    const data = {
      ...this.centerEditMeetingScheduleForm.value,
      reschedulebasedOnMeetingDates,
      dateFormat,
      locale
    };
    this.centersService.updateCenterMeeting(this.centerId, data, this.calendarId).subscribe((response: any) => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
