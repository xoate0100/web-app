/** Angular Imports */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

/** Custom Services */
import { AccountTransfersService } from '../account-transfers.service';

/** Dialog Components */
import { DeleteDialogComponent } from 'app/shared/delete-dialog/delete-dialog.component';
import { MatCard, MatCardContent } from '@angular/material/card';
import { LayoutDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { DatePipe } from '@angular/common';

/**
 * Recurring Deposits Standing Instructions Tab
 */
@Component({
    selector: 'mifosx-list-transactions',
    templateUrl: './list-transactions.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./list-transactions.component.scss'],
    imports: [MatCard, MatCardContent, LayoutDirective, FlexDirective, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator, DatePipe]
})
export class ListTransactionsComponent {


  /** List Transactions Data */
  listTransactionData: any;
  /** Data source for instructions table. */
  dataSource = new MatTableDataSource();
  /** Columns to be displayed in instructions table. */
  displayedColumns: string[] = ['transactionDate', 'amount', 'notes', 'reversed'];

  /** Paginator for centers table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  /**
   * Retrieves Recurring Deposits Account Data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.listTransactionData = data.listTransactionData;
      this.dataSource = new MatTableDataSource(this.listTransactionData.transactions.pageItems);
      this.dataSource.paginator = this.paginator;
    });
  }

}
