/** Angular Imports */
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';

/**
 * View journal entry dialog component.
 */
@Component({
    selector: 'mifosx-view-journal-entry',
    templateUrl: './view-journal-entry.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-journal-entry.component.scss'],
    imports: [MatDialogTitle, CdkScrollable, MatDialogContent, NgIf, MatDialogActions, MatButton, MatDialogClose]
})
export class ViewJournalEntryComponent implements OnInit {

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   * @param {any} data Provides journal entry.
   */
  constructor(public dialogRef: MatDialogRef<ViewJournalEntryComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
