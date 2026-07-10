import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { LayoutDirective, FlexFillDirective, FlexDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatDivider } from '@angular/material/divider';
import { NgIf, NgFor, NgSwitch, NgSwitchCase, DatePipe } from '@angular/common';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard } from '@angular/material/card';
import { MatStepperPrevious } from '@angular/material/stepper';
import { RouterLink } from '@angular/router';
import { FindPipe } from '../../../../pipes/find.pipe';

@Component({
    selector: 'mifosx-fixed-deposit-product-preview-step',
    templateUrl: './fixed-deposit-product-preview-step.component.html',
    styleUrls: ['./fixed-deposit-product-preview-step.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    animations: [
        trigger('expandChartSlab', [
            state('collapsed', style({ height: '0px', minHeight: '0' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
        ])
    ],
    imports: [LayoutDirective, FlexFillDirective, MatDivider, FlexDirective, NgIf, NgFor, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatButton, FaIconComponent, MatCard, NgSwitch, NgSwitchCase, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, LayoutAlignDirective, LayoutGapDirective, MatStepperPrevious, RouterLink, DatePipe, FindPipe]
})
export class FixedDepositProductPreviewStepComponent implements OnInit {

  @Input() fixedDepositProductsTemplate: any;
  @Input() chartSlabsDisplayedColumns: any[];
  @Input() accountingRuleData: any;
  @Input() fixedDepositProduct: any;
  @Output() submit = new EventEmitter();

  chartSlabsIncentivesDisplayedColumns: string[] = ['incentives'];
  incentivesDisplayedColumns: string[] = ['entityType', 'attributeName', 'conditionType', 'attributeValue', 'incentiveType', 'amount'];
  chargesDisplayedColumns: string[] = ['name', 'chargeCalculationType', 'amount', 'chargeTimeType'];
  paymentFundSourceDisplayedColumns: string[] = ['paymentTypeId', 'fundSourceAccountId'];
  feesPenaltyIncomeDisplayedColumns: string[] = ['chargeId', 'incomeAccountId'];

  expandChartSlabIndex: number[] = [];

  constructor() { }

  ngOnInit() {
  }

}
