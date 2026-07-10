/** Angular Imports */
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * View journal entry dialog component.
 */
@Component({
  standalone: false,
  selector: 'mifosx-view-journal-entry',
  templateUrl: './view-journal-entry.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./view-journal-entry.component.scss']
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
