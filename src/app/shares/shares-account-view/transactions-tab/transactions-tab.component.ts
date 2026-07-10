/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

/**
 * Transactions Tab Component.
 */
@Component({
    selector: 'mifosx-transactions-tab',
    templateUrl: './transactions-tab.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./transactions-tab.component.scss'],
    imports: [MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, DatePipe]
})
export class TransactionsTabComponent implements OnInit {

  /** Shares Account Data */
  shareAccountData: any;
  /** Transactions Data */
  transactionsData: any;
  /** Data source for transactions table. */
  dataSource: MatTableDataSource<any>;
  /** Columns to be displayed in transactions table. */
  displayedColumns: string[] = [
    'transactionDate',
    'transactionType',
    'totalShares',
    'purchasedOrRedeemedPrice',
    'chargeAmount',
    'amountRecievedOrReturned'
  ];

  /**
   * Retrieves shares account data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.parent!.data.subscribe((data: any) => {
      this.shareAccountData = data.sharesAccountData;
      this.transactionsData = this.shareAccountData.purchasedShares;
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.transactionsData);
  }

}
