import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

import { DeleteDialogComponent } from 'app/shared/delete-dialog/delete-dialog.component';
import { LayoutDirective, LayoutGapDirective, FlexDirective, FlexAlignDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton, MatIconButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { ChargesFilterPipe } from '../../../../pipes/charges-filter.pipe';

@Component({
    selector: 'mifosx-saving-product-charges-step',
    templateUrl: './saving-product-charges-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./saving-product-charges-step.component.scss'],
    imports: [LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatSelect, NgFor, MatOption, FlexAlignDirective, MatButton, FaIconComponent, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatIconButton, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, LayoutAlignDirective, MatStepperPrevious, MatStepperNext, ChargesFilterPipe]
})
export class SavingProductChargesStepComponent implements OnInit {

  @Input() savingProductsTemplate: any;
  @Input() currencyCode: FormControl;

  chargeData: any;

  chargesDataSource: {}[];
  displayedColumns: string[] = ['name', 'chargeCalculationType', 'amount', 'chargeTimeType', 'action'];

  pristine = true;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.chargeData = this.savingProductsTemplate.chargeOptions;

    this.chargesDataSource = this.savingProductsTemplate.charges || [];
    this.pristine = true;

    this.currencyCode.valueChanges.subscribe(() => this.chargesDataSource = []);
  }

  addCharge(charge: any) {
    this.chargesDataSource = this.chargesDataSource.concat([charge.value]);
    charge.value = '';
    this.pristine = false;
  }

  deleteCharge(charge: any) {
    const deleteChargeDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `charge ${charge.name}` }
    });
    deleteChargeDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.chargesDataSource.splice(this.chargesDataSource.indexOf(charge), 1);
        this.chargesDataSource = this.chargesDataSource.concat([]);
        this.pristine = false;
      }
    });
  }

  get savingProductCharges() {
    return {
      charges: this.chargesDataSource
    };
  }

}
