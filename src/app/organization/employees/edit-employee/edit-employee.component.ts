/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
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
 * Edit Employee Component.
 */
@Component({
    selector: 'mifosx-edit-employee',
    templateUrl: './edit-employee.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-employee.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatSelect, NgFor, MatOption, NgIf, MatError, MatInput, MatCheckbox, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class EditEmployeeComponent implements OnInit {

  /** Employee data. */
  employeeData: any;
  /** Minimum joining date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum joining date allowed. */
  maxDate = new Date();
  /** Employee form. */
  editEmployeeForm: FormGroup;
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
      this.employeeData = data.employee;
      this.officeData = data.employee.allowedOffices;
    });
  }

  /**
   * Creates the edit employee form.
   */
  ngOnInit() {
    this.createEditEmployeeForm();
  }

  /**
   * Creates the employee form.
   */
  createEditEmployeeForm() {
    this.editEmployeeForm = this.formBuilder.group({
      'officeId': [this.employeeData.officeId, Validators.required],
      'firstname': [this.employeeData.firstname, [Validators.required, Validators.pattern('(^[A-z]).*')]],
      'lastname': [this.employeeData.lastname, [Validators.required, Validators.pattern('(^[A-z]).*')]],
      'isLoanOfficer': [this.employeeData.isLoanOfficer],
      'mobileNo': [this.employeeData.mobileNo],
      'isActive': [this.employeeData.isActive],
      'joiningDate': [this.employeeData.joiningDate  && new Date(this.employeeData.joiningDate), Validators.required]
    });
  }

  /**
   * Submits the employee form and edits employee,
   * if successful redirects to the employee edited.
   */
  submit() {
    const prevJoiningDate: Date = this.editEmployeeForm.value.joiningDate;
    // TODO: Update once language and date settings are setup
    const dateFormat = this.settingsService.dateFormat;
    this.editEmployeeForm.patchValue({
      joiningDate: this.datePipe.transform(prevJoiningDate as Date, dateFormat)
    });
    const employee = this.editEmployeeForm.value;
    employee.locale = this.settingsService.language.code;
    employee.dateFormat = dateFormat;
    this.organizationService.updateEmployee(this.employeeData.id, employee).subscribe((response: any) => {
      this.router.navigate(['../../', response.resourceId], { relativeTo: this.route });
    });
  }

}
