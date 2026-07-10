/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MatDialogTitle, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { FileUploadComponent } from '../../../../shared/file-upload/file-upload.component';
import { MatButton } from '@angular/material/button';

/**
 * Upload image dialog component.
 */
@Component({
    selector: 'mifosx-upload-image-dialog',
    templateUrl: './upload-image-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./upload-image-dialog.component.scss'],
    imports: [MatDialogTitle, FileUploadComponent, MatDialogActions, MatButton, MatDialogClose]
})
export class UploadImageDialogComponent {

  /** Client Image */
  image: File;

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   */
  constructor(public dialogRef: MatDialogRef<UploadImageDialogComponent>) { }

  /**
   * Sets file form control value.
   * @param {any} $event file change event.
   */
  onFileSelect($event: any) {
    if ($event.target.files.length > 0) {
      this.image = $event.target.files[0];
    }
  }

}
