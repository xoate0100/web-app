import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { LayoutDirective, FlexFillDirective, FlexDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'mifosx-loans-account-view-guarantor-details-dialog',
    templateUrl: './loans-account-view-guarantor-details-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./loans-account-view-guarantor-details-dialog.component.scss'],
    imports: [MatDialogTitle, CdkScrollable, MatDialogContent, LayoutDirective, FlexFillDirective, FlexDirective, NgIf, MatDialogActions, LayoutAlignDirective, LayoutGapDirective, MatButton, MatDialogClose]
})
export class LoansAccountViewGuarantorDetailsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoansAccountViewGuarantorDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.dialogRef.updateSize('400px');
  }

}
