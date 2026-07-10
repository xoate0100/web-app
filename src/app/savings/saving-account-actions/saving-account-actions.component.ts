/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { ApproveSavingsAccountComponent } from './approve-savings-account/approve-savings-account.component';
import { RejectSavingsAccountComponent } from './reject-savings-account/reject-savings-account.component';
import { ActivateSavingsAccountComponent } from './activate-savings-account/activate-savings-account.component';
import { UndoApprovalSavingsAccountComponent } from './undo-approval-savings-account/undo-approval-savings-account.component';
import { PostInterestAsOnSavingsAccountComponent } from './post-interest-as-on-savings-account/post-interest-as-on-savings-account.component';
import { SavingsAccountAssignStaffComponent } from './savings-account-assign-staff/savings-account-assign-staff.component';
import { SavingsAccountUnassignStaffComponent } from './savings-account-unassign-staff/savings-account-unassign-staff.component';
import { WithdrawByClientSavingsAccountComponent } from './withdraw-by-client-savings-account/withdraw-by-client-savings-account.component';
import { AddChargeSavingsAccountComponent } from './add-charge-savings-account/add-charge-savings-account.component';
import { SavingsAccountTransactionsComponent } from './savings-account-transactions/savings-account-transactions.component';
import { CloseSavingsAccountComponent } from './close-savings-account/close-savings-account.component';
import { ApplyAnnualFeesSavingsAccountComponent } from './apply-annual-fees-savings-account/apply-annual-fees-savings-account.component';

/**
 * Savings account actions component.
 */
@Component({
    selector: 'mifosx-saving-account-actions',
    templateUrl: './saving-account-actions.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./saving-account-actions.component.scss'],
    imports: [NgIf, ApproveSavingsAccountComponent, RejectSavingsAccountComponent, ActivateSavingsAccountComponent, UndoApprovalSavingsAccountComponent, PostInterestAsOnSavingsAccountComponent, SavingsAccountAssignStaffComponent, SavingsAccountUnassignStaffComponent, WithdrawByClientSavingsAccountComponent, AddChargeSavingsAccountComponent, SavingsAccountTransactionsComponent, CloseSavingsAccountComponent, ApplyAnnualFeesSavingsAccountComponent]
})
export class SavingAccountActionsComponent {

  /** Flag object to store possible actions and render appropriate UI to the user */
  actions: {
    'Approve': boolean
    'Reject': boolean
    'Withdrawal': boolean
    'Deposit': boolean
    'Activate': boolean
    'Close': boolean
    'Undo Approval': boolean
    'Post Interest As On': boolean
    'Assign Staff': boolean
    'Add Charge': boolean
    'Unassign Staff': boolean
    'Withdraw By Client': boolean
    'Apply Annual Fees': boolean
  } = {
    'Approve': false,
    'Reject': false,
    'Withdrawal': false,
    'Deposit': false,
    'Activate': false,
    'Close': false,
    'Undo Approval': false,
    'Post Interest As On': false,
    'Assign Staff': false,
    'Add Charge': false,
    'Unassign Staff': false,
    'Withdraw By Client': false,
    'Apply Annual Fees': false
  };

  /**
   * @param {ActivatedRoute} route Activated Route
   */
  constructor(private route: ActivatedRoute) {
    const name = this.route.snapshot.params['name']!;
    (this.actions as Record<string, boolean>)[name] = true;
  }

}
