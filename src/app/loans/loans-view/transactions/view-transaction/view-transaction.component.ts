/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe, NgIf } from '@angular/common';

/** Custom Services */
import { LoansService } from 'app/loans/loans.service';
import { ConfirmationDialogComponent } from 'app/shared/confirmation-dialog/confirmation-dialog.component';
import { SettingsService } from 'app/settings/settings.service';
import { LayoutAlignDirective, LayoutGapDirective, LayoutDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardContent } from '@angular/material/card';

/** Custom Dialogs */

/**
 * View Transaction Component.
 * TODO: Add support for account transfers.
 */
@Component({
    selector: 'mifosx-view-transaction',
    templateUrl: './view-transaction.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-transaction.component.scss'],
    imports: [NgIf, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatCard, MatCardContent, LayoutDirective, FlexDirective, DatePipe]
})
export class ViewTransactionComponent {

  /** Transaction data. */
  transactionData: any;

  /**
   * Retrieves the Transaction data from `resolve`.
   * @param {LoansService} loansService Loans Service
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {MatDialog} dialog Dialog reference.
   * @param {DatePipe} datePipe DatePipe.
   * @param {SettingsService} settingsService Settings Service
   */
  constructor(private loansService: LoansService,
              private route: ActivatedRoute,
              private datePipe: DatePipe,
              private router: Router,
              public dialog: MatDialog,
              private settingsService: SettingsService) {
    this.route.data.subscribe((data: any) => {
      this.transactionData = data.loansAccountTransaction;
    });
  }

  /**
   * Undo the loans transaction
   */
  undoTransaction() {
    const accountId = this.route.parent!.parent!.parent!.snapshot.params['loanId']!;
    const undoTransactionAccountDialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { heading: 'Undo Transaction', dialogContext: `Are you sure you want undo the transaction ${this.transactionData.id}` }
    });
    undoTransactionAccountDialogRef.afterClosed().subscribe((response: { confirm: any }) => {
      if (response.confirm) {
        const locale = this.settingsService.language.code;
        const dateFormat = this.settingsService.dateFormat;
        const data = {
          transactionDate: this.datePipe.transform(this.transactionData.date && new Date(this.transactionData.date) as Date, dateFormat),
          transactionAmount: 0,
          dateFormat,
          locale
        };
        this.loansService.executeLoansAccountTransactionsCommand(accountId, 'undo', data, this.transactionData.id).subscribe(() => {
          this.router.navigate(['../'], { relativeTo: this.route });
        });
      }
    });
  }

}
