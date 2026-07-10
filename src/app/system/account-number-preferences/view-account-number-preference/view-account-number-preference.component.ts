/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

/** Custom Services */
import { SystemService } from '../../system.service';

/** Custom Components */
import { DeleteDialogComponent } from 'app/shared/delete-dialog/delete-dialog.component';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardContent } from '@angular/material/card';
import { NgIf } from '@angular/common';

/**
 * View Account Number Preference Component.
 */
@Component({
    selector: 'mifosx-view-account-number-preference',
    templateUrl: './view-account-number-preference.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-account-number-preference.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatCard, MatCardContent, FlexDirective, NgIf]
})
export class ViewAccountNumberPreferenceComponent implements OnInit {

  /** Account Number Preference Data */
  accountNumberPreferenceData: any;

  /**
   * Retrieves the account number preference data from `resolve`.
   * @param {SystemService} systemService Accounting Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {MatDialog} dialog Dialog reference.
   */
  constructor(private route: ActivatedRoute,
              private systemService: SystemService,
              private router: Router,
              private dialog: MatDialog) {
    this.route.data.subscribe((data: any) => {
      this.accountNumberPreferenceData = data.accountNumberPreference;
    });
  }

  ngOnInit() {
  }

  /**
   * Deletes the account number preference and redirects to account number preferences.
   */
  delete() {
    const deleteAccountNumberPreferenceDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `account number preference ${this.accountNumberPreferenceData.id}` }
    });
    deleteAccountNumberPreferenceDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.systemService.deleteAccountNumberPreference(this.accountNumberPreferenceData.id)
          .subscribe(() => {
            this.router.navigate(['/system/account-number-preferences']);
          });
      }
    });
  }

}
