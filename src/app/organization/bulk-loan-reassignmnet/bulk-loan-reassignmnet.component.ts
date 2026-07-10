/** Angular Imports. */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe, NgFor, NgIf } from '@angular/common';

/** Custom Services. */
import { OrganizationService } from '../organization.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../directives/has-permission/has-permission.directive';

/**
 * Bulk Loan Reassignment component.
 */
@Component({
    selector: 'mifosx-bulk-loan-reassignmnet',
    templateUrl: './bulk-loan-reassignmnet.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./bulk-loan-reassignmnet.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatSelect, NgFor, MatOption, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCheckbox, MatCardActions, LayoutAlignDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class BulkLoanReassignmnetComponent implements OnInit {

  /** Bulk Loan form. */
  bulkLoanForm: FormGroup;
  /** Office data. */
  offices: any;
  /** To Loan Officers. */
  toLoanOfficers: any[];
  /** From Loan Offices. */
  fromLoanOfficers: any[];
  /** Office Template. */
  officeTemplate: any;
  /** Officer Template. */
  officerTemplate: any;
  /** Loans. */
  loans: any[] = new Array();
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();

  /**
   * Get Office data from `resolver`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {ActivatedRoute} route Activated Route.
   * @param {OrganizationService} organizationSevice Organization Service.
   * @param {SettingsService} settingsService Settings Service.
   * @param {Router} router Router.
   */
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private organizationSevice: OrganizationService,
              private settingsService: SettingsService,
              private datePipe: DatePipe,
              private router: Router) {
    this.route.data.subscribe((data: any) => {
      this.offices = data.offices;
    });
  }

  ngOnInit() {
    this.setBulkLoanForm();
  }

  /**
   * Set Bulk Loan Form.
   */
  setBulkLoanForm() {
    this.bulkLoanForm = this.formBuilder.group({
      'assignmentDate': [new Date(), Validators.required],
      'toLoanOfficerId': ['', Validators.required]
    });
  }

  /**
   * Get Office template.
   * @param officeId Office Id.
   */
  getOffice(officeId: string) {
    this.organizationSevice.getOfficeTemplate(officeId).subscribe((response: any) => {
      this.officeTemplate = response;
      this.fromLoanOfficers = this.officeTemplate.loanOfficerOptions;
      this.bulkLoanForm.addControl('fromLoanOfficerId', new FormControl('', Validators.required));
    });
  }

  /**
   * Get From Officers.
   * @param officerId Office Id.
   */
  getFromOfficers(officerId: any) {
    this.toLoanOfficers = this.fromLoanOfficers.filter((officer: any) => officer.id !== officerId );
    console.log(this.toLoanOfficers);
    this.organizationSevice.getOfficerTemplate(officerId, this.officeTemplate.id).subscribe((response: any) => {
      this.officerTemplate = response;
    });
  }

  /**
   * Get all loans.
   * @param event Mat Checkbox Event.
   * @param loanId Loan Id.
   */
  getLoans(event: any, loanId: any) {
    const isChecked = event.checked;
    if (isChecked) {
      this.loans.push(loanId);
    } else {
      const index = this.loans.indexOf(loanId, 0);
      this.loans.splice(index, 1);
    }
  }

  /**
   * Submits bulk loan reassignment form.
   */
  submit() {
    const dateFormat = this.settingsService.dateFormat;
    const assignmentDate = this.bulkLoanForm.value.assignmentDate;
    this.bulkLoanForm.patchValue({
      assignmentDate: this.datePipe.transform(assignmentDate as Date, dateFormat)
    });
    const bulkForm = this.bulkLoanForm.value;
    bulkForm.locale = this.settingsService.language.code;
    bulkForm.dateFormat = dateFormat;
    bulkForm.loans = this.loans;
    this.organizationSevice.createLoanReassignment(bulkForm).subscribe((response: any) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

}
