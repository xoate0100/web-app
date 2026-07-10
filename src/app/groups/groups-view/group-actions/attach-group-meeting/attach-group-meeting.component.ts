/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgIf, NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { GroupsService } from 'app/groups/groups.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';

/**
 * Group Meetings Component
 */
@Component({
    selector: 'mifosx-attach-group-meeting',
    templateUrl: './attach-group-meeting.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./attach-group-meeting.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCheckbox, MatSelect, NgFor, MatOption, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class AttachGroupMeetingComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Group Meeting form. */
  groupMeetingForm: FormGroup;
  /** Calnedar Template Data */
  calendarTemplate: any;
  /** Group Id */
  groupId: any;
  /** Repetition Intervals */
  repetitionIntervals: any[];
  /** Frequency Options */
  frequencyOptions: any;
  /** Repetition Days Data */
  repeatsOnDays: any;

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
      this.frequencyOptions = this.calendarTemplate.frequencyOptions;
      this.repeatsOnDays = this.calendarTemplate.repeatsOnDayOptions;
    });
    this.groupId = this.route.parent!.snapshot.params['groupId']!;
  }

  ngOnInit() {
    this.createGroupMeetingForm();
    this.buildDependencies();
  }

  /**
   * Creates the Group Meeting form.
   */
  createGroupMeetingForm() {
    this.groupMeetingForm = this.formBuilder.group({
      'startDate': ['', Validators.required],
      'repeating': [false]
    });
  }

  /**
   * Subscribes to value changes of controls.
   */
  buildDependencies() {
    this.groupMeetingForm.get('repeating')!.valueChanges.subscribe((value: boolean) => {
      if (value) {
        this.groupMeetingForm.addControl('frequency', new FormControl());
        this.groupMeetingForm.addControl('interval', new FormControl());
        this.groupMeetingForm.get('frequency')!.valueChanges.subscribe((frequency: any) => {
          this.groupMeetingForm.removeControl('repeatsOnDay');
          switch (frequency) {
            case 1: // Daily
              this.repetitionIntervals = ['1', '2', '3'];
            break;
            case 2: // Weekly
              this.repetitionIntervals = ['1', '2', '3'];
              this.groupMeetingForm.addControl('repeatsOnDay', new FormControl('', Validators.required));
            break;
            case 3: // Monthly
              this.repetitionIntervals = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
            break;
            case 4: // Yearly
              this.repetitionIntervals = ['1', '2', '3', '4', '5'];
            break;
          }
        });
        this.groupMeetingForm.patchValue({
          'frequency': 1,
          'interval': '1'
        });
      } else {
        this.groupMeetingForm.removeControl('frequency');
        this.groupMeetingForm.removeControl('interval');
      }
    });
  }

  /**
   * Submits the form and attatches the meeting.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const title = `groups_${this.groupId}_CollectionMeeting`;
    const typeId = '1';
    const prevStartDate: Date = this.groupMeetingForm.value.startDate;
    this.groupMeetingForm.patchValue({
      startDate: this.datePipe.transform(prevStartDate as Date, dateFormat),
    });
    const data = {
      ...this.groupMeetingForm.value,
      title,
      typeId,
      dateFormat,
      locale
    };
    this.groupsService.createGroupMeeting(this.groupId, data).subscribe((response: any) => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
