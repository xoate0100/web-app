/** Angular Imports */
import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';

/**
 * Reject share dialog component.
 */
@Component({
    selector: 'mifosx-reject-share-dialog',
    templateUrl: './reject-share-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./reject-share-dialog.component.scss'],
    imports: [MatDialogTitle, CdkScrollable, MatDialogContent, MatDialogActions, MatButton, MatDialogClose]
})
export class RejectShareDialogComponent {

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   * @param {any} data Provides a deleteContext.
   */
  constructor(public dialogRef: MatDialogRef<RejectShareDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

}
