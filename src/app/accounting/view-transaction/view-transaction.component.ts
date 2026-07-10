/** Angular Imports */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';

/** Custom Services */
import { AccountingService } from '../accounting.service';

/** Custom Components */
import { RevertTransactionComponent } from '../revert-transaction/revert-transaction.component';
import { ViewJournalEntryComponent } from '../view-journal-entry/view-journal-entry.component';
import { NgIf } from '@angular/common';
import { LayoutDirective, LayoutAlignDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardContent } from '@angular/material/card';

/**
 * View transaction component.
 */
@Component({
    selector: 'mifosx-view-transaction',
    templateUrl: './view-transaction.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-transaction.component.scss'],
    imports: [NgIf, LayoutDirective, LayoutAlignDirective, HasPermissionDirective, MatButton, FaIconComponent, MatCard, MatCardContent, FlexDirective, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator]
})
export class ViewTransactionComponent implements OnInit {

  // TODO: Update once language and date settings are setup

  /** Transaction data.  */
  transaction: any;
  /** Transaction ID. */
  transactionId: string;
  /** Columns to be displayed in transaction table. */
  displayedColumns: string[] = ['id', 'glAccountType', 'glAccountCode', 'glAccountName', 'debit', 'credit'];
  /** Data source for transaction table. */
  dataSource: MatTableDataSource<any>;

  /** Paginator for transaction table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for transaction table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * @param {AccountingService} accountingService Accounting Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {MatDialog} dialog Dialog reference.
   */
  constructor(private accountingService: AccountingService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) {  }

  /**
   * Retrieves the transaction data from `resolve` and sets the transaction table.
   */
  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.transaction = data.transaction;
      this.transactionId = data.transaction.pageItems[0].transactionId;
      this.setTransaction();
    });
  }

  /**
   * Initializes the data source for transaction table with journal entries, paginator and sorter.
   */
  setTransaction() {
    this.dataSource = new MatTableDataSource(this.transaction.pageItems);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortingDataAccessor = (transaction: any, property: any) => {
      switch (property) {
        case 'glAccountType': return transaction.glAccountType.value;
        case 'debit': return transaction.amount;
        case 'credit': return transaction.amount;
        default: return transaction[property];
      }
    };
    this.dataSource.sort = this.sort;
  }

  /**
   * View details of selected journal entry.
   * @param {any} journalEntry Selected journal entry.
   */
  viewJournalEntry(journalEntry: any) {
    this.dialog.open(ViewJournalEntryComponent, {
      data: { journalEntry: journalEntry }
    });
  }

  /**
   * Reverts the given transaction and redirects to reverted transaction.
   * @param {transactionId} transactionId Transaction ID of transaction to be reverted.
   */
  revertTransaction(transactionId?: string) {
    const revertTransactionDialogRef = this.dialog.open(RevertTransactionComponent, {
      data: { reverted: this.dataSource.data[0].reversed, transactionId: transactionId }
    });
    revertTransactionDialogRef.afterClosed().subscribe((response: any) => {
      if (response.revert) {
        this.accountingService.revertTransaction(this.transactionId, response.comments).subscribe((reversedTransaction: any) => {
          this.dataSource.data[0].reversed = true;
          this.revertTransaction(reversedTransaction.transactionId);
        });
      } else if (response.redirect) {
        this.router.navigate(['../', transactionId], { relativeTo: this.route });
      }
    });
  }

}
