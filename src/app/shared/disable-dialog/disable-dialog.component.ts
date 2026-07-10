/** Angular Imports */
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';

/**
 * Disable dialog component.
 */
@Component({
    selector: 'mifosx-disable-dialog',
    templateUrl: './disable-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./disable-dialog.component.scss'],
    imports: [MatDialogTitle, CdkScrollable, MatDialogContent, MatDialogActions, MatButton, MatDialogClose]
})
export class DisableDialogComponent implements OnInit {

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   * @param {any} data Provides a disableContext.
   */
  constructor(public dialogRef: MatDialogRef<DisableDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
