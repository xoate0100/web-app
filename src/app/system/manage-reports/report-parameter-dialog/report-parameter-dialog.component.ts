/** Angular Imports */
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { LayoutDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

/**
 * Report Parameter Dialog Component.
 */
@Component({
    selector: 'mifosx-add-report-parameter-dialog',
    templateUrl: './report-parameter-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./report-parameter-dialog.component.scss'],
    imports: [MatDialogTitle, CdkScrollable, MatDialogContent, ReactiveFormsModule, LayoutDirective, MatFormField, MatLabel, MatSelect, NgFor, MatOption, NgIf, MatError, MatInput, MatDialogActions, MatButton, MatDialogClose]
})
export class ReportParameterDialogComponent implements OnInit {

  /** Report Parameter Form. */
  reportParameterForm: FormGroup;

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {any} data Provides the allowed parameters and values for the form (if available).
   */
  constructor(public dialogRef: MatDialogRef<ReportParameterDialogComponent>,
              public formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  /**
   * Creates the add report parameter form.
   */
  ngOnInit() {
    this.reportParameterForm = this.formBuilder.group({
      'parameterName': [this.data.parameterName, Validators.required],
      'reportParameterName': [this.data.reportParameterName]
    });
  }

  /**
   * Closes the dialog and returns value of the form.
   */
  submit() {
    this.dialogRef.close(this.reportParameterForm.value);
  }

}
