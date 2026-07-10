/** Angular Imports. */
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'mifosx-error-dialog',
    templateUrl: './error-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./error-dialog.component.scss'],
    imports: [MatDialogTitle, CdkScrollable, MatDialogContent, MatDialogActions, MatButton, MatDialogClose]
})
export class ErrorDialogComponent {

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   * @param {any} data Provides any data.
   */
  constructor(public dialogRef: MatDialogRef<ErrorDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

}
