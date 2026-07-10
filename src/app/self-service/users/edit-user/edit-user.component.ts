/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { ShowHideDirective } from '@ngbracket/ngx-layout/extended';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

/**
 * Edit self service user component.
 *
 * TODO: Complete functionality once API is available.
 */
@Component({
    selector: 'mifosx-edit-user',
    templateUrl: './edit-user.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-user.component.scss'],
    imports: [MatCard, ReactiveFormsModule, FormsModule, MatCardContent, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatSelect, NgFor, MatOption, MatInput, ShowHideDirective, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatCardActions, LayoutAlignDirective, MatButton, RouterLink]
})
export class EditUserComponent implements OnInit {

  /** Placeholder for office data. */
  officeData: any;
  /** Placeholder for staff data. */
  staffData: any;
  /** Placeholder for gender data. */
  genderData: any;
  /** Minimum date of birth of user allowed. */
  minDate = new Date(1900, 0, 1);
  /** Maximum date of birth of user allowed. */
  maxDate = new Date();

  constructor() { }

  ngOnInit() {
  }

}
