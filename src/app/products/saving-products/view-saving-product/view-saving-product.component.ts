import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexFillDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { NgIf } from '@angular/common';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';

@Component({
    selector: 'mifosx-view-saving-product',
    templateUrl: './view-saving-product.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-saving-product.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatCard, MatCardContent, FlexFillDirective, MatDivider, FlexDirective, NgIf, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow]
})
export class ViewSavingProductComponent implements OnInit {

  savingProduct: any;

  chargesDisplayedColumns: string[] = ['name', 'chargeCalculationType', 'amount', 'chargeTimeType'];
  paymentFundSourceDisplayedColumns: string[] = ['paymentTypeId', 'fundSourceAccountId'];
  feesPenaltyIncomeDisplayedColumns: string[] = ['chargeId', 'incomeAccountId'];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.savingProduct = data.savingProduct;
    });
  }

  ngOnInit() {
  }

}
