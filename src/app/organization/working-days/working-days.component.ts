/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

/** Custom Services */
import { OrganizationService } from '../organization.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, FlexDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatLabel, MatFormField } from '@angular/material/form-field';
import { NgFor } from '@angular/common';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../directives/has-permission/has-permission.directive';

/** Recurrence default value. */
const recurrenceDefaultValue = 'FREQ=WEEKLY;INTERVAL=1;BYDAY=';

/**
 * Working days component.
 */
@Component({
    selector: 'mifosx-working-days',
    templateUrl: './working-days.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./working-days.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatLabel, FlexDirective, NgFor, MatCheckbox, MatFormField, MatSelect, MatOption, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class WorkingDaysComponent implements OnInit {

  /** Working days form. */
  workingDaysForm: FormGroup;
  /** Working days data. */
  workingDaysData: any;
  /** Week days */
  weekDays = [
    { name: 'Monday', value: 'MO', checked: false },
    { name: 'Tuesday', value: 'TU', checked: false },
    { name: 'Wednesday', value: 'WE', checked: false },
    { name: 'Thursday', value: 'TH', checked: false },
    { name: 'Friday', value: 'FR', checked: false },
    { name: 'Saturday', value: 'SA', checked: false },
    { name: 'Sunday', value: 'SU', checked: false }
  ];
  /**  Repayment schedule type data. */
  repaymentRescheduleTypeData: any;

  /**
   * Retrieves the working days data from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {ActivatedRoute} route Activated Route.
   * @param {OrganizationService} organizationService Organization Service.
   * @param {SettingsService} settingsService Settings Service.
   * @param {Router} router Router for navigation.
   */
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private organizationService: OrganizationService,
              private settingsService: SettingsService,
              private router: Router) {
    this.route.data.subscribe((data: any) => {
      this.workingDaysData = data.workingDays;
    });
  }

  /**
   * Creates the working days form.
   */
  ngOnInit() {
    this.createWorkingDaysForm();
  }

  /**
   * Creates the working days form.
   */
  createWorkingDaysForm() {
    this.setWeeklyWorkingDays();
    this.repaymentRescheduleTypeData = this.workingDaysData.repaymentRescheduleOptions;
    this.workingDaysForm = this.formBuilder.group({
      'recurrence': this.formBuilder.array(this.createRecurrenceFormArray()),
      'repaymentRescheduleType': [this.workingDaysData.repaymentRescheduleType.id],
      'extendTermForDailyRepayments': [this.workingDaysData.extendTermForDailyRepayments]
    });
  }

  /**
   * @returns {FormArray} recurrence form array.
   */
  get recurrence(): FormArray {
    return this.workingDaysForm.get('recurrence') as FormArray;
  }

  /**
   * Sets weekly working days.
   */
  setWeeklyWorkingDays() {
    const days = this.workingDaysData.recurrence.replace(recurrenceDefaultValue, '');
    for (let i = 0; i < this.weekDays.length; i++) {
      this.weekDays[i].checked = days.includes(this.weekDays[i].value);
    }
  }

  /**
   * Creates the recurrence form array.
   */
  createRecurrenceFormArray() {
    return this.weekDays.map(weekDay => new FormControl(weekDay.checked));
  }

  /**
   * Submits the working days form and updates working days configuration,
   * if successful redirects to organization view.
   */
  submit() {
    const workingDays = this.workingDaysForm.value;
    // TODO: Update once language and date settings are setup
    workingDays.locale = this.settingsService.language.code;
    let recurrence = recurrenceDefaultValue;
    for (let i = 0; i < this.weekDays.length; i++) {
      if (workingDays.recurrence[i]) {
        recurrence = recurrence + this.weekDays[i].value + ',';
      }
    }
    workingDays.recurrence = recurrence;
    this.organizationService.updateWorkingDays(workingDays).subscribe(response => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

}
