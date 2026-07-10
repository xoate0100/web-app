/** Angular Imports */
import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';

/**
 * Delete signature dialog component.
 */
@Component({
    selector: 'mifosx-delete-signature-dialog',
    templateUrl: './delete-signature-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./delete-signature-dialog.component.scss'],
    imports: [MatDialogTitle, NgIf, CdkScrollable, MatDialogContent, MatDialogActions, MatButton, MatDialogClose]
})
export class DeleteSignatureDialogComponent {

  /** Id of client signature in documents */
  signatureId: any;

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   * @param {any} data Documents data
   */
  constructor(public dialogRef: MatDialogRef<DeleteSignatureDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any[]) {
    const signature = this.data.find((document: any) => document.name === 'clientSignature') || {};
    this.signatureId = signature.id;
  }

}
