import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LoansService } from 'app/loans/loans.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

/** Custom Services */
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

@Component({
    selector: 'mifosx-assign-loan-officer',
    templateUrl: './assign-loan-officer.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./assign-loan-officer.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatSelect, NgFor, MatOption, NgIf, MatError, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class AssignLoanOfficerComponent implements OnInit {

  @Input() dataObject: any;
  /** Loan Id */
  loanId: string;
  loanOfficers: any[];
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();
  /** Assign loan Officer form. */
  assignOfficerForm: FormGroup;

  /**
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {LoansService} systemService Loan Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {SettingsService} settingsService Settings Service
   */
  constructor(private formBuilder: FormBuilder,
    private loanService: LoansService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private settingsService: SettingsService) {
      this.loanId = this.route.parent!.snapshot.params['loanId']!;
    }

  /**
   * Creates the assign officer form.
   */
  ngOnInit() {
    this.createassignOfficerForm();
    this.loanOfficers = this.dataObject.loanOfficerOptions;
  }

  /**
   * Creates the create close form.
   */
  createassignOfficerForm() {
    this.assignOfficerForm = this.formBuilder.group({
      'toLoanOfficerId': ['', Validators.required],
      'assignmentDate': [new Date(), Validators.required]
    });
  }

  submit() {
    const assignmentDate = this.assignOfficerForm.value.assignmentDate;
    const dateFormat = this.settingsService.dateFormat;
    this.assignOfficerForm.patchValue({
      assignmentDate: this.datePipe.transform(assignmentDate as Date, dateFormat)
    });
    const assignForm = this.assignOfficerForm.value;
    assignForm.locale = this.settingsService.language.code;
    assignForm.dateFormat = dateFormat;
    assignForm.fromLoanOfficerId = this.dataObject.loanOfficerId || '';

    this.loanService.loanActionButtons(this.loanId, 'assignLoanOfficer', assignForm)
      .subscribe((response: any) => {
        this.router.navigate([`../../general`], { relativeTo: this.route });
    });
  }

}
