/** Angular Imports */
import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';

/**
 * Waive charge dialog component.
 */
@Component({
    selector: 'mifosx-waive-charge-dialog',
    templateUrl: './waive-charge-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./waive-charge-dialog.component.scss'],
    imports: [MatDialogTitle, CdkScrollable, MatDialogContent, MatDialogActions, MatButton, MatDialogClose]
})
export class WaiveChargeDialogComponent {

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   * @param {any} data.
   */
  constructor(public dialogRef: MatDialogRef<WaiveChargeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

}
