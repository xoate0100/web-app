import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { LoansService } from 'app/loans/loans.service';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe, NgIf, NgFor } from '@angular/common';
import { subscribeOn } from 'rxjs/operators';

/** Custom Services */
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';

@Component({
    selector: 'mifosx-loan-reschedule',
    templateUrl: './loan-reschedule.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./loan-reschedule.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatSelect, NgFor, MatOption, MatCheckbox, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class LoanRescheduleComponent implements OnInit {

  @Input() dataObject: any;
  loanId: any;
  rescheduleLoanForm: FormGroup;

  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();
  codes: any;

  changeRepaymentDate = new FormControl(false);
  introduceGracePeriods = new FormControl(false);
  extendRepaymentPeriod = new FormControl(false);
  adjustinterestrates = new FormControl(false);

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

  ngOnInit() {
    this.codes = this.dataObject.rescheduleReasons;
    this.setRescheduleLoanForm();
  }

  setRescheduleLoanForm() {
    this.rescheduleLoanForm = this.formBuilder.group({
      'rescheduleFromDate': [new Date(), Validators.required],
      'rescheduleReasonId': ['', Validators.required],
      'submittedOnDate': [new Date(), Validators.required],
      'rescheduleReasonComment': [''],
      'adjustedDueDate': [''],
      'graceOnPrincipal': [''],
      'graceOnInterest': [''],
      'extraTerms': [''],
      'newInterestRate': ['']
    });

  }

  submit() {
    const rescheduleFromDate = this.rescheduleLoanForm.value.rescheduleFromDate;
    const adjustedDueDate = this.rescheduleLoanForm.value.adjustedDueDate;
    const submittedOnDate = this.rescheduleLoanForm.value.submittedOnDate;
    const dateFormat = this.settingsService.dateFormat;

    this.rescheduleLoanForm.patchValue({
      rescheduleFromDate: this.datePipe.transform(rescheduleFromDate as Date, dateFormat),
      adjustedDueDate: this.datePipe.transform(adjustedDueDate as Date, dateFormat),
      submittedOnDate: this.datePipe.transform(submittedOnDate as Date, dateFormat)
    });
    const rescheduleForm = this.rescheduleLoanForm.value;
    rescheduleForm.locale = this.settingsService.language.code;
    rescheduleForm.dateFormat = dateFormat;
    rescheduleForm.loanId = this.loanId;
    this.loanService.submitRescheduleData(rescheduleForm).subscribe((response: any) => {

      // TODO: needs to be updated
      // mentioned in Community App:
      // location.path('/loans-accounts/' + scope.loanId + '/viewreschedulerequest/'+ data.resourceId);
        this.router.navigate(['../../general'], { relativeTo: this.route });
    });
  }

}
