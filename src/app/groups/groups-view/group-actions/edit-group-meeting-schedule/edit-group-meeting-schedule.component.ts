/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { GroupsService } from 'app/groups/groups.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';

/**
 * Edit Group Meetings Schedule Component
 */
@Component({
    selector: 'mifosx-edit-group-meeting-schedule',
    templateUrl: './edit-group-meeting-schedule.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-group-meeting-schedule.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatSelect, NgFor, MatOption, NgIf, MatError, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective, DatePipe]
})
export class EditGroupMeetingScheduleComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Group Meeting form. */
  groupEditMeetingScheduleForm: FormGroup;
  /** Calendar Template Data */
  calendarTemplate: any;
  /** Group Id */
  groupId: any;
  /** CalendarI ID */
  calendarId: any;
  /** Next meetings data */
  nextMeetingDates: any;

  /**
   * Fetches Calendar Template from `resolve`
   * @param {FormBuilder} formBuilder Form Builder
   * @param {GroupsService} groupsService Shares Service
   * @param {DatePipe} datePipe Date Pipe
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   * @param {SettingsService} settingsService SettingsService
   */
  constructor(private formBuilder: FormBuilder,
              private groupsService: GroupsService,
              private datePipe: DatePipe,
              private route: ActivatedRoute,
              private router: Router,
              private settingsService: SettingsService) {
    this.route.data.subscribe((data: any) => {
      this.calendarTemplate = data.groupActionData;
      this.nextMeetingDates = this.calendarTemplate.nextTenRecurringDates;
    });
    this.calendarId = this.route.snapshot.queryParams['calendarId']!;
    this.groupId = this.route.parent!.snapshot.params['groupId']!;
  }

  ngOnInit() {
    this.createEditMeetingScheduleForm();
  }

  /**
   * Creates the Edit Group Meeting Schedule form.
   */
  createEditMeetingScheduleForm() {
    this.groupEditMeetingScheduleForm = this.formBuilder.group({
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
    const prevOldDate: Date = new Date(this.groupEditMeetingScheduleForm.value.presentMeetingDate);
    const prevNewDate: Date = this.groupEditMeetingScheduleForm.value.newMeetingDate;
    this.groupEditMeetingScheduleForm.patchValue({
      'presentMeetingDate': this.datePipe.transform(prevOldDate as Date, dateFormat),
      'newMeetingDate': this.datePipe.transform(prevNewDate as Date, dateFormat)
    });
    const data = {
      ...this.groupEditMeetingScheduleForm.value,
      reschedulebasedOnMeetingDates,
      dateFormat,
      locale
    };
    this.groupsService.updateGroupMeeting(this.groupId, data, this.calendarId).subscribe((response: any) => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
