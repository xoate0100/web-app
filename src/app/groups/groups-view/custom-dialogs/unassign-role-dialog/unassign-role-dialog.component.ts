/** Angular Imports */
import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * Unassign role dialog component.
 */
@Component({
  standalone: false,
  selector: 'mifosx-unassign-role-dialog',
  templateUrl: './unassign-role-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./unassign-role-dialog.component.scss']
})
export class UnassignRoleDialogComponent {

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   * @param {any} data.
   */
  constructor(public dialogRef: MatDialogRef<UnassignRoleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

}
