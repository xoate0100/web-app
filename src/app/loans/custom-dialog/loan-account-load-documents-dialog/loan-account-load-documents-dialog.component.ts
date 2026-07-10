import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { LayoutDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { FileUploadComponent } from '../../../shared/file-upload/file-upload.component';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';

@Component({
    selector: 'mifosx-loan-account-load-documents-dialog',
    templateUrl: './loan-account-load-documents-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./loan-account-load-documents-dialog.component.scss'],
    imports: [MatDialogTitle, ReactiveFormsModule, LayoutDirective, MatFormField, FlexDirective, MatLabel, MatInput, NgIf, MatError, FileUploadComponent, MatDialogActions, MatButton, MatDialogClose, HasPermissionDirective]
})
export class LoanAccountLoadDocumentsDialogComponent implements OnInit {

  /** Upload Document form. */
  uploadDocumentForm: FormGroup;

  /**
   * @param {MatDialogRef} dialogRef Dialog reference element
   * @param {FormBuilder} formBuilder Form Builder
   * @param {any} data Dialog Data
   */
  constructor(public dialogRef: MatDialogRef<LoanAccountLoadDocumentsDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.createUploadDocumentForm();
  }

  /**
   * Creates the upload Document form.
   */
  createUploadDocumentForm() {
    this.uploadDocumentForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'description': [''],
      'file': ['']
    });
  }

  /**
   * Sets file form control value.
   * @param {any} $event file change event.
   */
  onFileSelect($event: any) {
    if ($event.target.files.length > 0) {
      const file = $event.target.files[0];
      this.uploadDocumentForm.get('file')!.setValue(file);
    }
  }

}
