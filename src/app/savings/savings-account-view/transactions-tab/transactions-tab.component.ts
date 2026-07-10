/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { NgIf, DatePipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

/**
 * Transactions Tab Component.
 */
@Component({
    selector: 'mifosx-transactions-tab',
    templateUrl: './transactions-tab.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./transactions-tab.component.scss'],
    imports: [FaIconComponent, LayoutDirective, LayoutAlignDirective, NgIf, LayoutGapDirective, MatButton, RouterLink, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatTooltip, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, DatePipe]
})
export class TransactionsTabComponent implements OnInit {

  /** Savings Account Status */
  status: any;
  /** Transactions Data */
  transactionsData: any;
  /** Columns to be displayed in transactions table. */
  displayedColumns: string[] = ['id', 'transactionDate', 'transactionType', 'debit', 'credit', 'balance', 'viewReciept'];
  /** Data source for transactions table. */
  dataSource: MatTableDataSource<any>;

  /**
   * Retrieves savings account data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.route.parent!.parent!.data.subscribe((data: any) => {
      this.transactionsData = data.savingsAccountData.transactions?.filter((transaction: any) => !transaction.reversed);
      this.status = data.savingsAccountData.status.value;
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.transactionsData);
  }

  /**
   * Checks if transaction is debit.
   * @param {any} transactionType Transaction Type
   */
  isDebit(transactionType: any) {
    return transactionType.withdrawal === true || transactionType.feeDeduction === true
            || transactionType.overdraftInterest === true || transactionType.withholdTax === true;
  }

  /**
   * Checks transaction status.
   */
  checkStatus() {
    if (this.status === 'Active' || this.status === 'Closed' || this.status === 'Transfer in progress' ||
       this.status === 'Transfer on hold' || this.status === 'Premature Closed' || this.status === 'Matured') {
      return true;
    }
    return false;
  }

  /**
   * Show Transactions Details
   * @param transactionsData Transactions Data
   */
  showTransactions(transactionsData: any) {
    if (transactionsData.transfer) {
      this.router.navigate([`account-transfers/account-transfers/${transactionsData.transfer.id}`], { relativeTo: this.route });
    } else {
      this.router.navigate([transactionsData.id], { relativeTo: this.route });
    }
  }

  /**
   * Stops the propagation to view pages.
   * @param $event Mouse Event
   */
  routeEdit($event: MouseEvent) {
    $event.stopPropagation();
  }

}
