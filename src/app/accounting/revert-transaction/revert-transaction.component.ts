/** Angular Imports */
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FlexFillDirective } from '@ngbracket/ngx-layout/flex';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

/**
 * Revert transaction dialog component.
 */
@Component({
    selector: 'mifosx-revert-transaction',
    templateUrl: './revert-transaction.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./revert-transaction.component.scss'],
    imports: [NgIf, MatDialogTitle, CdkScrollable, MatDialogContent, MatFormField, FlexFillDirective, MatLabel, MatInput, ReactiveFormsModule, MatDialogActions, MatButton, MatDialogClose]
})
export class RevertTransactionComponent implements OnInit {

  /** Comments input form control. */
  comments = new FormControl('');

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   * @param {any} data Provides comments or reverted transaction ID.
   */
  constructor(public dialogRef: MatDialogRef<RevertTransactionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
