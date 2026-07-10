/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

/**
 * Undo transaction dialog component.
 */
@Component({
  standalone: false,
  selector: 'mifosx-undo-transaction-dialog',
  templateUrl: './undo-transaction-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./undo-transaction-dialog.component.scss']
})
export class UndoTransactionDialogComponent {

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   */
  constructor(public dialogRef: MatDialogRef<UndoTransactionDialogComponent>) { }

}
