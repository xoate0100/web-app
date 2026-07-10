/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

/** Custom Services */
import { SystemService } from 'app/system/system.service';

/** Custom Components */
import { DeleteDialogComponent } from 'app/shared/delete-dialog/delete-dialog.component';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { NgIf } from '@angular/common';
import { MatCard, MatCardTitle, MatCardContent } from '@angular/material/card';

/**
 * View Report Component.
 */
@Component({
    selector: 'mifosx-view-report',
    templateUrl: './view-report.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-report.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, NgIf, MatCard, MatCardTitle, MatCardContent, FlexDirective]
})
export class ViewReportComponent implements OnInit {

  /** Report Data. */
  reportData: any;

  /**
   * Retrieves the report data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   * @param {SystemService} systemService System Service.
   * @param {MatDialog} dialog Dialog Reference.
   * @param {Router} router Router for navigation.
   */
  constructor(private route: ActivatedRoute,
              private systemService: SystemService,
              private dialog: MatDialog,
              private router: Router) {
    this.route.data.subscribe((data: any) => {
      this.reportData = data.report;
    });
  }

  ngOnInit() {
  }

  /**
   * Deletes the current report.
   */
  delete() {
    const deleteReportDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `report ${this.reportData.id}` }
    });
    deleteReportDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.systemService.deleteReport(this.reportData.id)
          .subscribe(() => {
            this.router.navigate(['/system/reports']);
          });
      }
    });
  }
}
