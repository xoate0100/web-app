import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexFillDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { NgIf, NgSwitch, NgSwitchCase, DecimalPipe, DatePipe } from '@angular/common';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { FindPipe } from '../../../pipes/find.pipe';

@Component({
    selector: 'mifosx-view-recurring-deposit-product',
    templateUrl: './view-recurring-deposit-product.component.html',
    styleUrls: ['./view-recurring-deposit-product.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    animations: [
        trigger('expandChartSlab', [
            state('collapsed', style({ height: '0px', minHeight: '0' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
        ])
    ],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, FaIconComponent, MatCard, MatCardContent, FlexFillDirective, MatDivider, FlexDirective, NgIf, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, NgSwitch, NgSwitchCase, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, DecimalPipe, DatePipe, FindPipe]
})
export class ViewRecurringDepositProductComponent implements OnInit {

  recurringDepositProduct: any;
  recurringDepositProductTemplate: any;

  chartSlabsIncentivesDisplayedColumns: string[] = ['incentives'];
  chartSlabsDisplayedColumns: string[] = ['period', 'amountRange', 'annualInterestRate', 'description', 'actions'];
  incentivesDisplayedColumns: string[] = ['entityType', 'attributeName', 'conditionType', 'attributeValue', 'incentiveType', 'amount'];
  chargesDisplayedColumns: string[] = ['name', 'type', 'amount', 'collectedon'];
  paymentFundSourceDisplayedColumns: string[] = ['paymentTypeId', 'fundSourceAccountId'];
  feesPenaltyIncomeDisplayedColumns: string[] = ['chargeId', 'incomeAccountId'];
  expandChartSlabIndex: number | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.recurringDepositProduct = data.recurringDepositProduct;
      this.recurringDepositProductTemplate = data.recurringDepositProductsTemplate;
    });
  }

  ngOnInit() {
  }

}
