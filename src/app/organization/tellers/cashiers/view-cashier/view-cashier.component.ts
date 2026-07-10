/** Angular Imports. */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Dialogs */
import { DeleteDialogComponent } from 'app/shared/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';

/** Custom Services */
import { OrganizationService } from 'app/organization/organization.service';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardContent } from '@angular/material/card';
import { NgIf, DatePipe } from '@angular/common';

/**
 * View Cashier component.
 */
@Component({
    selector: 'mifosx-view-cashier',
    templateUrl: './view-cashier.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-cashier.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatCard, MatCardContent, FlexDirective, NgIf, DatePipe]
})
export class ViewCashierComponent {

  /** Cashier data. */
  cashierData: any;

  /**
   * Get cashier data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router
   * @param {OrganizationService} organizationService Organization Service
   * @param {MatDialog} dialog Mat Dialog
   */
  constructor(private route: ActivatedRoute,
              private router: Router,
              private organizationService: OrganizationService,
              public dialog: MatDialog) {
    this.route.data.subscribe((data: any) => {
      this.cashierData = data.cashier;
    });
  }

  /**
   * Deletes the cashier.
   */
  deleteCashier() {
    const deleteCashierDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `Cashier id: ${this.cashierData.id}` }
    });
    deleteCashierDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.organizationService.deleteCashier(this.cashierData.tellerId, this.cashierData.id).subscribe(() => {
          this.router.navigate(['../'], {relativeTo: this.route});
        });
      }
    });
  }

}
