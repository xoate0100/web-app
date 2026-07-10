import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { ActivateRecurringDepositsAccountComponent } from './activate-recurring-deposits-account/activate-recurring-deposits-account.component';
import { UndoApprovalRecurringDepositsAccountComponent } from './undo-approval-recurring-deposits-account/undo-approval-recurring-deposits-account.component';
import { ApproveRecurringDepositsAccountComponent } from './approve-recurring-deposits-account/approve-recurring-deposits-account.component';
import { RejectRecurringDepositsAccountComponent } from './reject-recurring-deposits-account/reject-recurring-deposits-account.component';
import { WithdrawByClientRecurringDepositsAccountComponent } from './withdraw-by-client-recurring-deposits-account/withdraw-by-client-recurring-deposits-account.component';
import { AddChargeRecurringDepositsAccountComponent } from './add-charge-recurring-deposits-account/add-charge-recurring-deposits-account.component';
import { PrematureCloseRecurringDepositAccountComponent } from './premature-close-recurring-deposit-account/premature-close-recurring-deposit-account.component';
import { CloseRecurringDepositsAccountComponent } from './close-recurring-deposits-account/close-recurring-deposits-account.component';
import { DepositRecurringDepositsAccountComponent } from './deposit-recurring-deposits-account/deposit-recurring-deposits-account.component';

@Component({
    selector: 'mifosx-recurring-deposits-account-actions',
    templateUrl: './recurring-deposits-account-actions.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./recurring-deposits-account-actions.component.scss'],
    imports: [NgIf, ActivateRecurringDepositsAccountComponent, UndoApprovalRecurringDepositsAccountComponent, ApproveRecurringDepositsAccountComponent, RejectRecurringDepositsAccountComponent, WithdrawByClientRecurringDepositsAccountComponent, AddChargeRecurringDepositsAccountComponent, PrematureCloseRecurringDepositAccountComponent, CloseRecurringDepositsAccountComponent, DepositRecurringDepositsAccountComponent]
})
export class RecurringDepositsAccountActionsComponent {

  /** Flag object to store possible actions and render appropriate UI to the user */
  actions: {
    'Activate': boolean
    'Undo Approval': boolean
    'Approve': boolean
    'Reject': boolean
    'Withdraw By Client': boolean
    'Add Charge': boolean
    'Premature Close': boolean
    'Close': boolean
    'Deposit': boolean
  } = {
      'Activate': false,
      'Undo Approval': false,
      'Approve': false,
      'Reject': false,
      'Withdraw By Client': false,
      'Add Charge': false,
      'Premature Close': false,
      'Close': false,
      'Deposit': false
    };

  /**
   * @param {ActivatedRoute} route Activated Route
   */
  constructor(private route: ActivatedRoute) {
    const name = this.route.snapshot.params['name']!;
    (this.actions as Record<string, boolean>)[name] = true;
  }

}
