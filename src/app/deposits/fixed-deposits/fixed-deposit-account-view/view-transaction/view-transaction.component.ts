/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

/**
 * View Transaction Component.
 */
@Component({
  standalone: false,
  selector: 'mifosx-view-transaction',
  templateUrl: './view-transaction.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./view-transaction.component.scss']
})
export class ViewTransactionComponent {

  /** Transaction data. */
  transactionData: any;

  /**
   * Retrieves the Transaction data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   * @param {MatDialog} dialog Dialog reference.
   */
  constructor(private route: ActivatedRoute,
              public dialog: MatDialog) {
    this.route.data.subscribe((data: { fixedDepositsAccountTransaction: any }) => {
      this.transactionData = data.fixedDepositsAccountTransaction;
    });
  }

}
