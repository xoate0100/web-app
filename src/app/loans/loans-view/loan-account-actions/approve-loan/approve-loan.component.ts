/** Angular Imports. */
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';
import { DatePipe, NgIf } from '@angular/common';

/** Custom Services. */
import { LoansService } from 'app/loans/loans.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';

/**
 * Approve Loan component.
 */
@Component({
    selector: 'mifosx-approve-loan',
    templateUrl: './approve-loan.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./approve-loan.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class ApproveLoanComponent implements OnInit {

  /** Approve Loan form. */
  approveLoanForm: FormGroup;
  /** Loan data. */
  loanData: any = new Object();
  /** Association Data */
  associationData: any;
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Loan Id */
  loanId: any;

  /**
   * Retrieve data from `Resolver`.
   * @param formBuilder Form Builder.
   * @param route Activated Route.
   * @param datePipe Date Pipe.
   * @param loanService Loan Service.
   * @param router Router.
   * @param {SettingsService} settingsService Settings Service
   */
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private loanService: LoansService,
    private router: Router,
    private settingsService: SettingsService) {
    this.route.data.subscribe((data: any) => {
      this.loanData = data.actionButtonData;
    });
    this.loanId = this.route.parent!.snapshot.params['loanId']!;
  }

  ngOnInit() {
    this.setApproveLoanForm();
    this.loanService.getApproveAssociationsDetails(this.loanId).subscribe((response: any) => {
      this.associationData = response;
      this.approveLoanForm.patchValue({
        'expectedDisbursementDate': new Date(response.timeline.expectedDisbursementDate)
      });
    });
  }

  /**
   * Set Approve Loan form.
   */
  setApproveLoanForm() {
    this.approveLoanForm = this.formBuilder.group({
      'approvedOnDate': [this.loanData.approvalDate && new Date(this.loanData.approvalDate), Validators.required],
      'expectedDisbursementDate': [''],
      'approvedLoanAmount': [this.loanData.approvalAmount, Validators.required],
      'note': ['']
    });
  }

  /**
   * Submits Approve form.
   */
  submit() {
    const local = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const approvedOnDate = this.approveLoanForm.value.approvedOnDate;
    const expectedDisbursementDate = this.approveLoanForm.value.expectedDisbursementDate;
    this.approveLoanForm.patchValue({
      approvedOnDate: this.datePipe.transform(approvedOnDate as Date, dateFormat),
      expectedDisbursementDate: this.datePipe.transform(expectedDisbursementDate as Date, dateFormat)
    });
    const approveLoanFormData = {
      ... this.approveLoanForm.value,
      dateFormat,
      local
    };
    this.loanService.loanActionButtons(this.loanId, 'approve', approveLoanFormData).subscribe((response: any) => {
      this.router.navigate(['../../general'], { relativeTo: this.route });
    });
  }

}
