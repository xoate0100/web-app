/** Angular Imports */
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { LayoutDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { NgIf } from '@angular/common';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';

/**
 * Floating Rate Period Dialog Component.
 */
@Component({
    selector: 'mifosx-floating-rate-period-dialog',
    templateUrl: './floating-rate-period-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./floating-rate-period-dialog.component.scss'],
    imports: [MatDialogTitle, CdkScrollable, MatDialogContent, ReactiveFormsModule, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCheckbox, MatDialogActions, MatButton, MatDialogClose]
})
export class FloatingRatePeriodDialogComponent implements OnInit {

  /** Floating Rate Period Form. */
  floatingRatePeriodForm: FormGroup;
  /** Minimum floating rate period date allowed. */
  minDate = new Date();

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {any} data Provides values for the form (if available).
   */
  constructor(public dialogRef: MatDialogRef<FloatingRatePeriodDialogComponent>,
              public formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  /**
   * Creates the floating rate period form.
   */
  ngOnInit() {
    const rowDisabled: Boolean = this.data ? (new Date(this.data.fromDate) < new Date() ? true : false) : false;
    this.floatingRatePeriodForm = this.formBuilder.group({
      'fromDate': [{ value: this.data ? new Date(this.data.fromDate) : '', disabled: rowDisabled }, Validators.required],
      'interestRate': [{ value: this.data ? this.data.interestRate : '', disabled: rowDisabled }, Validators.required],
      'isDifferentialToBaseLendingRate': [{ value: this.data ? this.data.isDifferentialToBaseLendingRate : false, disabled: rowDisabled }]
    });
  }

  /**
   * Closes the dialog and returns value of the form.
   */
  submit() {
    this.dialogRef.close(this.floatingRatePeriodForm.value);
  }

}
