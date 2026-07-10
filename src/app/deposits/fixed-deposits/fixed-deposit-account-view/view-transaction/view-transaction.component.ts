/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatCard, MatCardContent } from '@angular/material/card';
import { LayoutDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { NgIf, DatePipe } from '@angular/common';

/**
 * View Transaction Component.
 */
@Component({
    selector: 'mifosx-view-transaction',
    templateUrl: './view-transaction.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-transaction.component.scss'],
    imports: [MatCard, MatCardContent, LayoutDirective, FlexDirective, NgIf, DatePipe]
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
    this.route.data.subscribe((data: any) => {
      this.transactionData = data.fixedDepositsAccountTransaction;
    });
  }

}
