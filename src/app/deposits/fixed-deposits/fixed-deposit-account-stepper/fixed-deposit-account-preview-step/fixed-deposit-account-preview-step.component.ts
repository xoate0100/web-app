/** Angular Imports */
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { LayoutDirective, FlexFillDirective, FlexDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatDivider } from '@angular/material/divider';
import { NgIf, NgSwitch, TitleCasePipe, DatePipe } from '@angular/common';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard } from '@angular/material/card';
import { MatStepperPrevious } from '@angular/material/stepper';
import { RouterLink } from '@angular/router';
import { FindPipe } from '../../../../pipes/find.pipe';

/**
 * Fixed Deposit Preview Step
 */
@Component({
    selector: 'mifosx-fixed-deposit-account-preview-step',
    templateUrl: './fixed-deposit-account-preview-step.component.html',
    styleUrls: ['./fixed-deposit-account-preview-step.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    animations: [
        trigger('expandChartSlab', [
            state('collapsed', style({ height: '0px', minHeight: '0' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
        ])
    ],
    imports: [LayoutDirective, FlexFillDirective, MatDivider, FlexDirective, NgIf, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatButton, FaIconComponent, MatCard, NgSwitch, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, LayoutAlignDirective, LayoutGapDirective, MatStepperPrevious, RouterLink, TitleCasePipe, DatePipe, FindPipe]
})
export class FixedDepositAccountPreviewStepComponent implements OnChanges {

  /** Fixed Deposits Account Template */
  @Input() fixedDepositsAccountTemplate: any;
  /** Fixed Deposits Account Product Template */
  @Input() fixedDepositsAccountProductTemplate: any;
  /** Fixed Deposits Account Data */
  @Input() fixedDepositAccountData: any;

  /** Charges Displayed Columns */
  chargesDisplayedColumns: string[] = ['name', 'chargeCalculationType', 'amount', 'chargeTimeType', 'date', 'repaymentsEvery'];
  /** Interest Rate Chart Data */
  interestRateChartData: any = [];
  /** Columns to be displayed in interest rate chart table. */
  chartSlabsDisplayedColumns: any[] = ['period', 'amountRange', 'interest', 'description', 'actions'];
  /** Columns to be displayed in incentives sub-table. */
  incentivesDisplayedColumns: string[] = ['entityType', 'attributeName', 'conditionType', 'attributeValue', 'incentiveType', 'amount'];
  /** Additional Column to disblac incentives table  */
  chartSlabsIncentivesDisplayedColumns: string[] = ['incentives'];
  /** Expand Chart Slab Index used in the view */
  expandChartSlabIndex: number;

  /** Form submission event */
  @Output() submit = new EventEmitter();

  constructor() { }

  ngOnChanges() {
    if (this.fixedDepositsAccountProductTemplate) {
      this.interestRateChartData = this.fixedDepositsAccountProductTemplate.accountChart.chartSlabs;
    }
  }

}
