/** Angular Imports. */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { LoansAccountCloseComponent } from './loans-account-close/loans-account-close.component';
import { UndoApprovalComponent } from './undo-approval/undo-approval.component';
import { AssignLoanOfficerComponent } from './assign-loan-officer/assign-loan-officer.component';
import { ForeclosureComponent } from './foreclosure/foreclosure.component';
import { PrepayLoanComponent } from './prepay-loan/prepay-loan.component';
import { MakeRepaymentComponent } from './make-repayment/make-repayment.component';
import { WaiveInterestComponent } from './waive-interest/waive-interest.component';
import { WriteOffPageComponent } from './write-off-page/write-off-page.component';
import { CloseAsRescheduledComponent } from './close-as-rescheduled/close-as-rescheduled.component';
import { LoanRescheduleComponent } from './loan-reschedule/loan-reschedule.component';
import { RecoveryRepaymentComponent } from './recovery-repayment/recovery-repayment.component';
import { ViewGuarantorsComponent } from './view-guarantors/view-guarantors.component';
import { CreateGuarantorComponent } from './create-guarantor/create-guarantor.component';
import { DisburseLoanAccountComponent } from './disburse-loan-account/disburse-loan-account.component';
import { RejectLoanComponent } from './reject-loan/reject-loan.component';
import { DisburseComponent } from './disburse/disburse.component';
import { WithdrawnByClientComponent } from './withdrawn-by-client/withdrawn-by-client.component';
import { AddCollateralComponent } from './add-collateral/add-collateral.component';
import { UndoDisbursalComponent } from './undo-disbursal/undo-disbursal.component';
import { LoanScreenReportsComponent } from './loan-screen-reports/loan-screen-reports.component';
import { ApproveLoanComponent } from './approve-loan/approve-loan.component';
import { AddLoanChargeComponent } from './add-loan-charge/add-loan-charge.component';

/**
 * Loan Account Actions component.
 */
@Component({
    selector: 'mifosx-loan-account-actions',
    templateUrl: './loan-account-actions.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./loan-account-actions.component.scss'],
    imports: [NgIf, LoansAccountCloseComponent, UndoApprovalComponent, AssignLoanOfficerComponent, ForeclosureComponent, PrepayLoanComponent, MakeRepaymentComponent, WaiveInterestComponent, WriteOffPageComponent, CloseAsRescheduledComponent, LoanRescheduleComponent, RecoveryRepaymentComponent, ViewGuarantorsComponent, CreateGuarantorComponent, DisburseLoanAccountComponent, RejectLoanComponent, DisburseComponent, WithdrawnByClientComponent, AddCollateralComponent, UndoDisbursalComponent, LoanScreenReportsComponent, ApproveLoanComponent, AddLoanChargeComponent]
})
export class LoanAccountActionsComponent {

  /** flag object to store possible actions and render appropriate UI to the user */
  actions: { 'Close': boolean,
            'Undo Approval': boolean,
            'Write Off': boolean,
            'Add Collateral': boolean,
            'Assign Loan Officer': boolean,
            'Foreclosure': boolean,
            'Prepay Loan': boolean,
            'Reject': boolean,
            'Disburse To Savings': boolean,
            'Make Repayment': boolean,
            'Waive Interest': boolean,
            'Close (as Rescheduled)': boolean,
            'Reschedule': boolean,
            'Recovery Payment': boolean,
            'View Guarantors': boolean,
            'Create Guarantor': boolean,
            'Disburse': boolean,
            'Withdrawn by Client': boolean,
            'Undo Disbursal': boolean,
            'Loan Screen Reports': boolean,
            'Approve': boolean,
            'Add Loan Charge': boolean } = {
              'Close': false,
              'Undo Approval': false,
              'Write Off':  false,
              'Add Collateral':  false,
              'Assign Loan Officer':  false,
              'Foreclosure':  false,
              'Prepay Loan':  false,
              'Reject':  false,
              'Disburse To Savings':  false,
              'Make Repayment':  false,
              'Waive Interest':  false,
              'Close (as Rescheduled)':  false,
              'Reschedule':  false,
              'Recovery Payment':  false,
              'View Guarantors':  false,
              'Create Guarantor':  false,
              'Disburse':  false,
              'Withdrawn by Client':  false,
              'Undo Disbursal':  false,
              'Loan Screen Reports':  false,
              'Approve':  false,
              'Add Loan Charge':  false };

  actionButtonData: any;
  actionName: any;

  /**
   * @param router Router.
   * @param route Activated Route.
   */
  constructor(private router: Router,
    private route: ActivatedRoute) {
      this.route.data.subscribe((data: any) => {
        this.actionButtonData = data.actionButtonData;
      });

    this.route.params.subscribe(params => {
      this.actionName = params['action'];
      if (this.actionName === 'Change Loan Officer') {
        this.actionName = 'Assign Loan Officer';
      }
      for (const key of Object.keys(this.actions)) {
        (this.actions as Record<string, boolean>)[key] = false;
      }
      (this.actions as Record<string, boolean>)[this.actionName] = true;
    });
  }

}
