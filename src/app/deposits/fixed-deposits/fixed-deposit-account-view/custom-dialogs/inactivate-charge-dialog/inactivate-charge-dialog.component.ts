/** Angular Imports */
import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * Inactivate charge dialog component.
 */
@Component({
  standalone: false,
  selector: 'mifosx-inactivate-charge-dialog',
  templateUrl: './inactivate-charge-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./inactivate-charge-dialog.component.scss']
})
export class InactivateChargeDialogComponent {

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   */
  constructor(public dialogRef: MatDialogRef<InactivateChargeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

}
