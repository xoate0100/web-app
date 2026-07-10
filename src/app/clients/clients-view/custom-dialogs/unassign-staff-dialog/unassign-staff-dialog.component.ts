/** Angular Imports */
import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';

/**
 * Unassign staff dialog component.
 */
@Component({
    selector: 'mifosx-unassign-staff-dialog',
    templateUrl: './unassign-staff-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./unassign-staff-dialog.component.scss'],
    imports: [MatDialogTitle, CdkScrollable, MatDialogContent, MatDialogActions, MatButton, MatDialogClose]
})
export class UnassignStaffDialogComponent {

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   */
  constructor(public dialogRef: MatDialogRef<UnassignStaffDialogComponent>) { }

}
