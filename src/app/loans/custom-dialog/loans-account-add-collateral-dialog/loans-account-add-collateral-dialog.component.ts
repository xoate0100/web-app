import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'mifosx-loans-account-add-collateral-dialog',
    templateUrl: './loans-account-add-collateral-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./loans-account-add-collateral-dialog.component.scss'],
    imports: [MatDialogTitle, CdkScrollable, MatDialogContent, LayoutDirective, ReactiveFormsModule, MatFormField, MatLabel, MatSelect, NgFor, MatOption, MatError, MatInput, MatDialogActions, LayoutAlignDirective, LayoutGapDirective, MatButton, MatDialogClose]
})
export class LoansAccountAddCollateralDialogComponent implements OnInit {

  layout: {
    addButtonText?: string
  } = {
      addButtonText: 'Add'
    };

  addCollateralForm: FormGroup;
  collateralTypeData: any;

  constructor(public dialogRef: MatDialogRef<LoansAccountAddCollateralDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder) {
    this.createAddCollateralForm();
  }

  ngOnInit() {
    this.dialogRef.updateSize('400px');
    this.collateralTypeData = this.data.collateralTypeOptions;
  }

  createAddCollateralForm() {
    this.addCollateralForm = this.formBuilder.group({
      'type': ['', Validators.required],
      'value': ['', Validators.required],
      'description': ['', Validators.required]
    });
  }

}
