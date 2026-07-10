/** Angular Imports */
import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * Reject share dialog component.
 */
@Component({
  standalone: false,
  selector: 'mifosx-reject-share-dialog',
  templateUrl: './reject-share-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./reject-share-dialog.component.scss']
})
export class RejectShareDialogComponent {

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   * @param {any} data Provides a deleteContext.
   */
  constructor(public dialogRef: MatDialogRef<RejectShareDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

}
