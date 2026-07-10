/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

/** Custom Services */
import { AccountingService } from '../../accounting.service';

/** Custom Components */
import { DeleteDialogComponent } from '../../../shared/delete-dialog/delete-dialog.component';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';
import { NgIf } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';

/**
 * View closure component.
 */
@Component({
    selector: 'mifosx-view-closure',
    templateUrl: './view-closure.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-closure.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, FaIconComponent, HasPermissionDirective, NgIf, MatCard, MatCardContent, FlexDirective]
})
export class ViewClosureComponent implements OnInit {

  /** GL Account closure. */
  glAccountClosure: any;

  /**
   * Retrieves the gl account closure data from `resolve`.
   * @param {AccountingService} accountingService Accounting Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {MatDialog} dialog Dialog reference.
   */
  constructor(private accountingService: AccountingService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) {
    this.route.data.subscribe((data: any) => {
      this.glAccountClosure = data.glAccountClosure;
    });
  }

  ngOnInit() {
  }

  /**
   * Deletes the gl account closure and redirects to closing entries.
   */
  deleteAccountingClosure() {
    const deleteAccountingClosureDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `accounting closure ${this.glAccountClosure.id}` }
    });
    deleteAccountingClosureDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.accountingService.deleteAccountingClosure(this.glAccountClosure.id)
          .subscribe(() => {
            this.router.navigate(['/accounting/closing-entries']);
          });
      }
    });
  }

}
