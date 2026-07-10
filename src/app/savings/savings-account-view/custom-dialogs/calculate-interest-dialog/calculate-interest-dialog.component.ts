/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';

/**
 * Calculate interest dialog component.
 */
@Component({
    selector: 'mifosx-calculate-interest-dialog',
    templateUrl: './calculate-interest-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./calculate-interest-dialog.component.scss'],
    imports: [MatDialogTitle, CdkScrollable, MatDialogContent, MatDialogActions, MatButton, MatDialogClose]
})
export class CalculateInterestDialogComponent {

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   */
  constructor(public dialogRef: MatDialogRef<CalculateInterestDialogComponent>) { }

}
