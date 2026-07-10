/** Angular Imports. */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

/** Custom Services. */
import { OrganizationService } from 'app/organization/organization.service';

/** Custom Components. */
import { DeleteDialogComponent } from '../../../shared/delete-dialog/delete-dialog.component';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';
import { NgIf, DatePipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardContent } from '@angular/material/card';

/**
 * View Holidays component.
 */
@Component({
    selector: 'mifosx-view-holidays',
    templateUrl: './view-holidays.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-holidays.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, NgIf, MatButton, FaIconComponent, RouterLink, MatCard, MatCardContent, FlexDirective, DatePipe]
})
export class ViewHolidaysComponent {

  /** Holiday data. */
  holidayData: any;

  /**
   * Retrieves hioliday data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog,
              private organizationService: OrganizationService ) {
    this.route.data.subscribe((data: any) => {
      this.holidayData = data.holidays;
    });
  }

  /**
   * Deletes the holiday.
   */
  deleteHoliday() {
    const deleteHolidayDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `holiday ${this.holidayData.id}` }
    });
    deleteHolidayDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.organizationService.deleteHoliday(this.holidayData.id)
          .subscribe(() => {
            this.router.navigate(['../'], { relativeTo: this.route });
          });
      }
    });
  }

}
