/** Angular Imports */
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { LoansService } from 'app/loans/loans.service';
import { DatePipe, NgIf } from '@angular/common';

/** Custom Services */
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';

@Component({
    selector: 'mifosx-loans-account-close',
    templateUrl: './loans-account-close.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./loans-account-close.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class LoansAccountCloseComponent implements OnInit {

  @Input() dataObject: any;

  /** Close form. */
  closeLoanForm: FormGroup;
  /** Loan Id */
  loanId: any;
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();

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
   * Creates the close form.
   */
  ngOnInit() {
    this.createCloseForm();
  }

  /**
   * Creates the create close form.
   */
  createCloseForm() {
    this.closeLoanForm = this.formBuilder.group({
      'transactionDate': [new Date(this.dataObject.date) || new Date(), Validators.required],
      'note': []
    });
  }

  /**
   * Submits the close form and creates a close,
   * if successful redirects to view created close.
   */
  submit() {
    const transactionDate = this.closeLoanForm.value.transactionDate;
    const dateFormat = this.settingsService.dateFormat;
    this.closeLoanForm.patchValue({
      transactionDate: this.datePipe.transform(transactionDate as Date, dateFormat)
    });
    const closeForm = this.closeLoanForm.value;
    closeForm.locale = this.settingsService.language.code;
    closeForm.dateFormat = dateFormat;
    this.loanService.submitLoanActionButton(this.loanId, closeForm, 'close')
      .subscribe((response: any) => {
        this.router.navigate(['../../general'], { relativeTo: this.route });
    });
  }

}
