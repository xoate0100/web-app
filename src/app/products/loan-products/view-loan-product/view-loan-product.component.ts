import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexFillDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { NgIf, DatePipe } from '@angular/common';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { ChargesPenaltyFilterPipe } from '../../../pipes/charges-penalty-filter.pipe';

@Component({
    selector: 'mifosx-view-loan-product',
    templateUrl: './view-loan-product.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-loan-product.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatCard, MatCardContent, FlexFillDirective, MatDivider, FlexDirective, NgIf, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, DatePipe, ChargesPenaltyFilterPipe]
})
export class ViewLoanProductComponent implements OnInit {

  loanProduct: any;

  variationsDisplayedColumns: string[] = ['valueConditionType', 'borrowerCycleNumber', 'minValue', 'defaultValue', 'maxValue'];
  chargesDisplayedColumns: string[] = ['name', 'chargeCalculationType', 'amount', 'chargeTimeType'];
  paymentFundSourceDisplayedColumns: string[] = ['paymentTypeId', 'fundSourceAccountId'];
  feesPenaltyIncomeDisplayedColumns: string[] = ['chargeId', 'incomeAccountId'];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.loanProduct = data.loanProduct;
    });
  }

  ngOnInit() {
    this.loanProduct.allowAttributeConfiguration = Object.values(this.loanProduct.allowAttributeOverrides).some((attribute: unknown) => !!attribute);
  }

}
