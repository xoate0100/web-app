/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

/** Custom Dialogs */
import { DeleteDialogComponent } from 'app/shared/delete-dialog/delete-dialog.component';

/** Custom Services */
import { SharesService } from '../shares.service';

/** Custom Buttons Configuration */
import { SharesButtonsConfiguration } from './shares-buttons.config';
import { MatCard, MatCardHeader, MatCardTitleGroup, MatCardMdImage, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardContent } from '@angular/material/card';
import { LayoutDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatTooltip } from '@angular/material/tooltip';
import { NgClass, NgFor, NgIf, DatePipe } from '@angular/common';
import { ClassDirective } from '@ngbracket/ngx-layout/extended';
import { HasPermissionDirective } from '../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { MatTabNav, MatTabLink } from '@angular/material/tabs';
import { StatusLookupPipe } from '../../pipes/status-lookup.pipe';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

/**
 * Shares Account View
 */
@Component({
    selector: 'mifosx-shares-account-view',
    templateUrl: './shares-account-view.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./shares-account-view.component.scss'],
    imports: [FaIconComponent, MatCard, MatCardHeader, LayoutDirective, MatCardTitleGroup, MatCardMdImage, MatTooltip, MatCardTitle, NgClass, ClassDirective, MatCardSubtitle, MatCardActions, NgFor, HasPermissionDirective, MatButton, NgIf, MatMenuTrigger, MatMenu, MatMenuItem, MatCardContent, LayoutGapDirective, FlexDirective, MatTabNav, MatTabLink, RouterLinkActive, RouterLink, RouterOutlet, DatePipe, StatusLookupPipe]
})
export class SharesAccountViewComponent implements OnInit {

  /** Shares Account Data */
  sharesAccountData: any;
  /** Button Configurations */
  buttonConfig: SharesButtonsConfiguration;

  /**
   * Fetches shares account data from `resolve`
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   * @param {SharesService} sharesService Shares Service
   * @param {MatDialog} dialog Mat Dialog
   */
  constructor(private route: ActivatedRoute,
              private router: Router,
              private sharesService: SharesService,
              public dialog: MatDialog) {
    this.route.data.subscribe((data: any) => {
      this.sharesAccountData = data.sharesAccountData;
    });
  }

  ngOnInit() {
    this.setConditionalButtons();
  }

  /**
   * Adds options to button config. conditionaly.
   */
  setConditionalButtons() {
    const status = this.sharesAccountData.status.value;
    this.buttonConfig = new SharesButtonsConfiguration(status);
    if (this.sharesAccountData.charges) {
      const charges: any[] = this.sharesAccountData.charges;
      charges.forEach((charge: any) => {
        if (charge.name === 'Annual fee - INR') {
          this.buttonConfig.addOption({
            name: 'Apply Anuual Fees',
            taskPermissionName: 'APPLYANNUALFEE_SAVINGSACCOUNT'
          });
        }
      });
    }
    if (status === 'Active') {
      const purchasedShares: any[] = this.sharesAccountData.purchasedShares;
      let sharesPendingForApproval = false;
      purchasedShares.forEach((share: any) => {
        if (share.status.code === 'purchasedSharesStatusType.applied' && share.type.code === 'purchasedSharesType.purchased') {
          sharesPendingForApproval = true;
        }
      });
      if (!sharesPendingForApproval) {
        this.buttonConfig.removeButton('Approve Additional Shares');
        this.buttonConfig.removeButton('Reject Additional Shares');
      }
    }
  }

  /**
   * Performs button action
   * @param {string} name Action name
   */
  doAction(name: string) {
    switch (name) {
      case 'Approve':
      case 'Reject':
      case 'Close':
      case 'Activate':
      case 'Undo Approval':
      case 'Apply Additional Shares':
      case 'Redeem Shares':
      case 'Approve Additional Shares':
      case 'Reject Additional Shares':
        this.router.navigate([`actions/${name}`], { relativeTo: this.route });
        break;
      case 'Modify Application':
        this.router.navigate(['edit'], { relativeTo: this.route });
        break;
      case 'Delete':
        this.deleteSharesAccount();
        break;
    }
  }

  /**
   * Deletes Shares Account.
   */
  private deleteSharesAccount() {
    const deleteSharesAccountDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `shares account with id: ${this.sharesAccountData.id}` }
    });
    deleteSharesAccountDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.sharesService.deleteSharesAccount(this.sharesAccountData.id).subscribe(() => {
          this.router.navigate(['../../'], { relativeTo: this.route });
        });
      }
    });
  }

}
