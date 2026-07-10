/** Angular Imports */
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';

/**
 * Cancel dialog component.
 */
@Component({
    selector: 'mifosx-cancel-dialog',
    templateUrl: './cancel-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./cancel-dialog.component.scss'],
    imports: [MatDialogTitle, CdkScrollable, MatDialogContent, MatDialogActions, MatButton, MatDialogClose]
})
export class CancelDialogComponent implements OnInit {

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   */
  constructor(public dialogRef: MatDialogRef<CancelDialogComponent>) { }

  ngOnInit() {
  }

}
