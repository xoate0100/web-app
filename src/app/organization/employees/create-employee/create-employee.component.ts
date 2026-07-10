/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe, NgFor, NgIf } from '@angular/common';

/** Custom Services */
import { OrganizationService } from '../../organization.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';

/**
 * Create employee component.
 */
@Component({
    selector: 'mifosx-create-employee',
    templateUrl: './create-employee.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./create-employee.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatSelect, NgFor, MatOption, NgIf, MatError, MatInput, MatCheckbox, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class CreateEmployeeComponent implements OnInit {

  /** Minimum joining date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum joining date allowed. */
  maxDate = new Date();
  /** Employee form. */
  employeeForm: FormGroup;
  /** Office data. */
  officeData: any;

  /**
   * Retrieves the offices data from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {OrganizationService} organizationService Organization Service.
   * @param {SettingsService} settingsService Settings Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {DatePipe} datePipe Date Pipe to format date.
   */
  constructor(private formBuilder: FormBuilder,
              private organizationService: OrganizationService,
              private settingsService: SettingsService,
              private route: ActivatedRoute,
              private router: Router,
              private datePipe: DatePipe) {
    this.route.data.subscribe((data: any) => {
      this.officeData = data.offices;
    });
  }

  /**
   * Creates the employee form.
   */
  ngOnInit() {
    this.createEmployeeForm();
  }

  /**
   * Creates the employee form.
   */
  createEmployeeForm() {
    this.employeeForm = this.formBuilder.group({
      'officeId': ['', Validators.required],
      'firstname': ['', [Validators.required, Validators.pattern('(^[A-z]).*')]],
      'lastname': ['', [Validators.required, Validators.pattern('(^[A-z]).*')]],
      'isLoanOfficer': [false],
      'mobileNo': [''],
      'joiningDate': ['', Validators.required],
    });
  }

  /**
   * Submits the employee form and creates employee,
   * if successful redirects to employees.
   */
  submit() {
    const prevJoiningDate: Date = this.employeeForm.value.joiningDate;
    // TODO: Update once language and date settings are setup
    const dateFormat = this.settingsService.dateFormat;
    this.employeeForm.patchValue({
      joiningDate: this.datePipe.transform(prevJoiningDate as Date, dateFormat)
    });
    const employee = this.employeeForm.value;
    employee.locale = this.settingsService.language.code;
    employee.dateFormat = dateFormat;
    this.organizationService.createEmployee(employee).subscribe((response: any) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

}
