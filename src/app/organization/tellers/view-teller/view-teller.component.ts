/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

/** Custom Services */
import { OrganizationService } from 'app/organization/organization.service';

/** Custom Components */
import { DeleteDialogComponent } from '../../../shared/delete-dialog/delete-dialog.component';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardContent } from '@angular/material/card';
import { NgIf, TitleCasePipe, DatePipe } from '@angular/common';

/**
 * View Teller Component.
 */
@Component({
    selector: 'mifosx-view-teller',
    templateUrl: './view-teller.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-teller.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatCard, MatCardContent, FlexDirective, NgIf, TitleCasePipe, DatePipe]
})
export class ViewTellerComponent implements OnInit {

  /** Teller data. */
  tellerData: any;

  /**
   * Retrieves the Teller data from `resolve`.
   * @param {OrganizationService} organizationService Organization Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {MatDialog} dialog Dialog reference.
   */
  constructor(private organizationService: OrganizationService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) {
    this.route.data.subscribe((data: any) => {
      this.tellerData = data.teller;
    });
  }

  ngOnInit() {
  }

  /**
   * Deletes the teller and redirects to tellers.
   */
  deleteTeller() {
    const deleteTellerDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `teller ${this.tellerData.id}` }
    });
    deleteTellerDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.organizationService.deleteTeller(this.tellerData.id)
          .subscribe(() => {
            this.router.navigate(['/organization/tellers']);
          });
      }
    });
  }

}
