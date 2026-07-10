/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/**
 * Edit self service user component.
 *
 * TODO: Complete functionality once API is available.
 */
@Component({
  standalone: false,
  selector: 'mifosx-edit-user',
  templateUrl: './edit-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./edit-user.component.scss']
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
