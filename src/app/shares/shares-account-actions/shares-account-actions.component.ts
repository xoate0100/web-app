/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/** Custom Services */
import { SharesService } from '../shares.service';
import { NgIf } from '@angular/common';
import { ApproveSharesAccountComponent } from './approve-shares-account/approve-shares-account.component';
import { RejectSharesAccountComponent } from './reject-shares-account/reject-shares-account.component';
import { CloseSharesAccountComponent } from './close-shares-account/close-shares-account.component';
import { ActivateSharesAccountComponent } from './activate-shares-account/activate-shares-account.component';
import { UndoApprovalSharesAccountComponent } from './undo-approval-shares-account/undo-approval-shares-account.component';
import { ApplySharesComponent } from './apply-shares/apply-shares.component';
import { RedeemSharesComponent } from './redeem-shares/redeem-shares.component';
import { ApproveSharesComponent } from './approve-shares/approve-shares.component';
import { RejectSharesComponent } from './reject-shares/reject-shares.component';

/**
 * Shares Account Actions Component
 */
@Component({
    selector: 'mifosx-shares-account-actions',
    templateUrl: './shares-account-actions.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./shares-account-actions.component.scss'],
    imports: [NgIf, ApproveSharesAccountComponent, RejectSharesAccountComponent, CloseSharesAccountComponent, ActivateSharesAccountComponent, UndoApprovalSharesAccountComponent, ApplySharesComponent, RedeemSharesComponent, ApproveSharesComponent, RejectSharesComponent]
})
export class SharesAccountActionsComponent {

  /** Shares Account Data */
  sharesAccountData: any;
  /** Flag object to store possible actions and render appropriate UI to the user */
  actions: {
    'Approve': boolean
    'Reject': boolean
    'Close': boolean
    'Activate': boolean
    'Undo Approval': boolean
    'Apply Additional Shares': boolean
    'Redeem Shares': boolean
    'Approve Additional Shares': boolean
    'Reject Additional Shares': boolean
  } = {
    'Approve': false,
    'Reject': false,
    'Close': false,
    'Activate': false,
    'Undo Approval': false,
    'Apply Additional Shares': false,
    'Redeem Shares': false,
    'Approve Additional Shares': false,
    'Reject Additional Shares': false
  };

  /**
   * @param {ActivatedRoute} route Activated Route
   */
  constructor(private route: ActivatedRoute) {
    const name = this.route.snapshot.params['name']!;
    (this.actions as Record<string, boolean>)[name] = true;
  }

}
