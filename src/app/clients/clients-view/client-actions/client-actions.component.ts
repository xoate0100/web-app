/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { ClientAssignStaffComponent } from './client-assign-staff/client-assign-staff.component';
import { CloseClientComponent } from './close-client/close-client.component';
import { ViewSurveyComponent } from './view-survey/view-survey.component';
import { RejectClientComponent } from './reject-client/reject-client.component';
import { ActivateClientComponent } from './activate-client/activate-client.component';
import { WithdrawClientComponent } from './withdraw-client/withdraw-client.component';
import { UpdateClientSavingsAccountComponent } from './update-client-savings-account/update-client-savings-account.component';
import { TransferClientComponent } from './transfer-client/transfer-client.component';
import { UndoClientTransferComponent } from './undo-client-transfer/undo-client-transfer.component';
import { RejectClientTransferComponent } from './reject-client-transfer/reject-client-transfer.component';
import { AcceptClientTransferComponent } from './accept-client-transfer/accept-client-transfer.component';
import { ReactivateClientComponent } from './reactivate-client/reactivate-client.component';
import { UndoClientRejectionComponent } from './undo-client-rejection/undo-client-rejection.component';
import { AddClientChargeComponent } from './add-client-charge/add-client-charge.component';
import { TakeSurveyComponent } from './take-survey/take-survey.component';
import { ClientScreenReportsComponent } from './client-screen-reports/client-screen-reports.component';
import { CreateSelfServiceUserComponent } from './create-self-service-user/create-self-service-user.component';

/**
 * Client actions component.
 */
@Component({
    selector: 'mifosx-client-actions',
    templateUrl: './client-actions.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./client-actions.component.scss'],
    imports: [NgIf, ClientAssignStaffComponent, CloseClientComponent, ViewSurveyComponent, RejectClientComponent, ActivateClientComponent, WithdrawClientComponent, UpdateClientSavingsAccountComponent, TransferClientComponent, UndoClientTransferComponent, RejectClientTransferComponent, AcceptClientTransferComponent, ReactivateClientComponent, UndoClientRejectionComponent, AddClientChargeComponent, TakeSurveyComponent, ClientScreenReportsComponent, CreateSelfServiceUserComponent]
})
export class ClientActionsComponent {

  /** Flag object to store possible actions and render appropriate UI to the user */
  actions: {
    'Assign Staff': boolean
    'Close': boolean
    'Reject': boolean
    'Activate': boolean
    'Survey': boolean
    'Withdraw': boolean
    'Update Default Savings': boolean
    'Transfer Client': boolean
    'Undo Transfer': boolean
    'Accept Transfer': boolean
    'Reject Transfer': boolean
    'Reactivate': boolean
    'Undo Rejection': boolean
    'Add Charge': boolean
    'Take Survey': boolean
    'Client Screen Reports': boolean,
    'Create Self Service User': boolean
  } = {
    'Assign Staff': false,
    'Close': false,
    'Reject': false,
    'Activate': false,
    'Survey': false,
    'Withdraw': false,
    'Update Default Savings': false,
    'Transfer Client': false,
    'Undo Transfer': false,
    'Accept Transfer': false,
    'Reject Transfer': false,
    'Reactivate': false,
    'Undo Rejection': false,
    'Add Charge': false,
    'Take Survey': false,
    'Client Screen Reports': false,
    'Create Self Service User': false
  };

  /**
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   */
  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    const name = this.route.snapshot.params['name']!;
    (this.actions as Record<string, boolean>)[name] = true;
  }

}
