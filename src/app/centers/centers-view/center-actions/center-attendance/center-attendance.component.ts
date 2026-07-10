/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe, NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

/** Custom Services */
import { CentersService } from 'app/centers/centers.service';
import { SettingsService } from 'app/settings/settings.service';

/** Custom Dialogs */
import { FormDialogComponent } from 'app/shared/form-dialog/form-dialog.component';

/** Custom Models */
import { FormfieldBase } from 'app/shared/form-dialog/formfield/model/formfield-base';
import { SelectBase } from 'app/shared/form-dialog/formfield/model/select-base';
import { MatCard, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { MatIconButton, MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';
import { FindPipe } from '../../../../pipes/find.pipe';

/**
 * Center Attendance component.
 */
@Component({
    selector: 'mifosx-center-attendance',
    templateUrl: './center-attendance.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./center-attendance.component.scss'],
    imports: [MatCard, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatSelect, ReactiveFormsModule, NgFor, MatOption, MatHint, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, NgSwitch, NgSwitchCase, MatIconButton, FaIconComponent, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatCardActions, LayoutAlignDirective, MatButton, RouterLink, HasPermissionDirective, DatePipe, FindPipe]
})
export class CenterAttendanceComponent implements OnInit {

  /** Members data. */
  membersData: any;
  /** Center Data */
  centerData: any;
  /** Attendance Type Options */
  attendanceTypeOptions: any;
  /** Columns to be displayed in member's attendance table. */
  displayedColumns: string[] = ['name', 'attendance'];
  /** Start Date Form Control */
  meetingDate = new FormControl();
  /** Meeting Dates Data */
  meetingDates: any[];
  /** Data source for client members table. */
  dataSource: {}[] = [];
  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();

  /**
   * Retrieves the center members data from `resolve`.
   * @param {ActivatedRoute} route Route
   * @param {DatePipe} datePipe Date Pipe
   * @param {Router} router Router
   * @param {CentersService} centersService Centers Service
   * @param {SettingsService} settingsService Settings Service.
   * @param {MatDialog} dialog Mat Dialog
   */
  constructor(private route: ActivatedRoute,
              private datePipe: DatePipe,
              private router: Router,
              private centersService: CentersService,
              private settingsService: SettingsService,
              public dialog: MatDialog) {
    this.route.data.subscribe((data: any) => {
      this.centerData = data.centersActionData;
      this.membersData = data.centersActionData.clients;
    });
  }

  /**
   * Sets the members table.
   */
  ngOnInit() {
    if (this.membersData !== undefined && this.membersData !== null) {
      this.dataSource = this.membersData.map((member: any) => ({ clientId: member.id, attendanceType: 1 }));
    }
    this.meetingDates = this.centerData.collectionMeetingCalendar.recurringDates
      .filter((date: any) => new Date(date).getTime() < new Date().getTime());
    this.getAttendanceOptions();
  }

  /**
   * Gets attendance type options based on calendar id.
   */
  getAttendanceOptions() {
    this.centersService.getMeetingsTemplate(this.centerData.id, this.centerData.collectionMeetingCalendar.id)
      .subscribe((response: any) => {
        this.attendanceTypeOptions = response.attendanceTypeOptions;
      });
  }

  /**
   * Edits a member's attendance
   * @param {any} member Client Member
   */
  editAttendance(member: any) {
    const formfields: FormfieldBase[] = [
      new SelectBase({
        controlName: 'attendanceType',
        label: 'Attendance',
        value: member.attendanceType,
        options: { label: 'value', value: 'id', data: this.attendanceTypeOptions },
        required: false
      }),
    ];
    const data = {
      title: 'Assign Member Attendance',
      layout: { addButtonText: 'Confirm' },
      formfields: formfields
    };
    const memberAttendanceDialogRef = this.dialog.open(FormDialogComponent, { data });
    memberAttendanceDialogRef.afterClosed().subscribe((response: any) => {
      if (response.data) {
        const updatedMemeber = { ...member, ...response.data.value };
        this.dataSource.splice(this.dataSource.indexOf(member), 1, updatedMemeber);
        this.dataSource = this.dataSource.concat([]);
      }
    });
  }

  /**
   * Assigns Client Members Attendance
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const prevMeetingDate: Date = new Date(this.meetingDate.value);
    this.meetingDate.patchValue(this.datePipe.transform(prevMeetingDate as Date, dateFormat));
    const data = {
      meetingDate: this.meetingDate.value,
      calendarId: this.centerData.collectionMeetingCalendar.id,
      clientsAttendance: this.dataSource,
      dateFormat,
      locale
    };
    this.centersService.assignCenterAttendance(this.centerData.id, this.centerData.collectionMeetingCalendar.id, data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
