/** Angular Imports */
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { KeyboardShortcutsConfiguration } from '../../keyboards-shortcut-config';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { LayoutDirective, LayoutGapDirective, FlexFillDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { NgFor, NgIf } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
/**
 * Delete dialog component.
 */
@Component({
    selector: 'mifosx-keyboard-shortcuts-dialog',
    templateUrl: './keyboard-shortcuts-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./keyboard-shortcuts-dialog.component.scss'],
    imports: [MatDialogTitle, CdkScrollable, MatDialogContent, LayoutDirective, LayoutGapDirective, NgFor, FlexFillDirective, FlexDirective, NgIf, MatDivider]
})
export class KeyboardShortcutsDialogComponent implements OnInit {

  buttonConfig: KeyboardShortcutsConfiguration;

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   * @param {any} data Provides a deleteContext.
   */
  constructor(public dialogRef: MatDialogRef<KeyboardShortcutsDialogComponent>) { }

  ngOnInit() {
    this.dialogRef.updateSize(`800px`);
    this.buttonConfig = new KeyboardShortcutsConfiguration();
  }

}
