/** Angular Imports */
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';

/**
 * Delete dialog component.
 */
@Component({
    selector: 'mifosx-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./confirmation-dialog.component.scss'],
    imports: [MatDialogTitle, CdkScrollable, MatDialogContent, MatDialogActions, MatButton, MatDialogClose]
})
export class ConfirmationDialogComponent implements OnInit {

  color: string;
  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   * @param {any} data Provides a deleteContext.
   */
  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.setColor();
  }

  setColor() {
    switch (this.data.type) {
      case 'Basic':
        this.color = 'primary';
        break;
      case 'Mild':
        this.color = 'accent';
        break;
      case 'Strong':
        this.color = 'warn';
        break;
      default:
        this.color = 'warn';
    }
  }


}
