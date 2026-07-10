/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MatDialogTitle, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { FileUploadComponent } from '../../../../shared/file-upload/file-upload.component';
import { MatButton } from '@angular/material/button';

/**
 * Upload signature dialog component.
 */
@Component({
    selector: 'mifosx-upload-signature-dialog',
    templateUrl: './upload-signature-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./upload-signature-dialog.component.scss'],
    imports: [MatDialogTitle, FileUploadComponent, MatDialogActions, MatButton, MatDialogClose]
})
export class UploadSignatureDialogComponent {

  /** Client Signature */
  signature: File;

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   */
  constructor(public dialogRef: MatDialogRef<UploadSignatureDialogComponent>) { }

  /**
   * Sets file form control value.
   * @param {any} $event file change event.
   */
  onFileSelect($event: any) {
    if ($event.target.files.length > 0) {
      this.signature = $event.target.files[0];
    }
  }

}
