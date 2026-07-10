/** Angular Imports. */
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
 * Write Off component.
 */
@Component({
    selector: 'mifosx-write-off-page',
    templateUrl: './write-off-page.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./write-off-page.component.scss'],
    imports: [MatCard, MatCardContent, ReactiveFormsModule, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class WriteOffPageComponent implements OnInit {

  @Input() dataObject: any;

  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();

  /** Write Off form. */
  writeOffForm: FormGroup;

  /**
   * Get data from `Resolver`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {ActivatedRoute} route Activated Route.
   * @param {LoansService} loanService Loan Service.
   * @param {DatePipe} datePipe Date Pipe.
   * @param {Router} router Router.
   * @param {SettingsService} settingsService Settings Service
   */
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private loanService: LoansService,
              private datePipe: DatePipe,
              private router: Router,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.setWriteOffForm();
  }

  /**
   * Set Write Off form.
   */
  setWriteOffForm() {
    this.writeOffForm = this.formBuilder.group({
      'transactionDate': [this.dataObject.date && new Date(this.dataObject.date), Validators.required],
      'amount': [{value: this.dataObject.amount, disabled: true}],
      'note': ['']
    });
  }

  /**
   * Submits write off form.
   */
  submit() {
    const transactionDate = this.writeOffForm.value.transactionDate;
    const dateFormat = this.settingsService.dateFormat;
    this.writeOffForm.patchValue({
      transactionDate: this.datePipe.transform(transactionDate as Date, dateFormat)
    });
    const loanId = this.route.parent!.snapshot.params['loanId']!;
    const writeOffForm = this.writeOffForm.value;
    delete (writeOffForm as any).amount;
    writeOffForm.locale = this.settingsService.language.code;
    writeOffForm.dateFormat = dateFormat;
    this.loanService.submitLoanActionButton(loanId, writeOffForm, 'writeoff').subscribe((response: any) => {
      this.router.navigate(['../../../general'], {relativeTo: this.route});
    });
  }

}
