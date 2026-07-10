/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCard, MatCardHeader, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { LayoutDirective, LayoutGapDirective, LayoutAlignDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { NgFor, NgIf } from '@angular/common';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatInput } from '@angular/material/input';
import { ShowHideDirective } from '@ngbracket/ngx-layout/extended';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';

/**
 * Create self service user component.
 *
 * TODO: Complete functionality once API is available.
 */
@Component({
    selector: 'mifosx-create-user',
    templateUrl: './create-user.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./create-user.component.scss'],
    imports: [MatCard, MatCardHeader, MatRadioGroup, LayoutDirective, LayoutGapDirective, ReactiveFormsModule, NgFor, MatRadioButton, NgIf, FormsModule, MatCardContent, MatFormField, MatLabel, MatSelect, MatOption, MatCardActions, LayoutAlignDirective, MatButton, RouterLink, FaIconComponent, FlexDirective, MatInput, ShowHideDirective, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker]
})
export class CreateUserComponent implements OnInit {

  /** Denotes type of user. */
  userTypes = ['Existing User', 'New User'];
  /** Radio button group form control for type of user. */
  userType = new FormControl(this.userTypes[0]);
  /** Placeholder for office data. */
  officeData = ['Office 1', 'Office 2'];
  /** Placeholder for staff data. */
  staffData = ['Staff 1', 'Staff 2'];
  /** Placeholder for client data. */
  clientData = ['Client 1', 'Client 2'];
  /** Placeholder for gender data. */
  genderData = ['Male', 'Female'];
  /** Minimum date of birth of user allowed. */
  minDate = new Date(1900, 0, 1);
  /** Maximum date of birth of user allowed. */
  maxDate = new Date();

  constructor() { }

  ngOnInit() {
  }

}
