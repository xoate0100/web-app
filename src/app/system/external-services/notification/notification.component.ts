/** Angular Imports */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

/**
 * Notification Configuration Component.
 */
@Component({
    selector: 'mifosx-notification',
    templateUrl: './notification.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./notification.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, FaIconComponent, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow]
})
export class NotificationComponent implements OnInit {

  /** Notification configuration data. */
  notificationConfigurationData: any;
  /** Columns to be displayed in Notification configuration table. */
  displayedColumns: string[] = ['name', 'value'];
  /** Data source for Notification configuration table. */
  dataSource: MatTableDataSource<any>;

  /** Sorter for Notification configuration table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * Retrieves the Notification configuration data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.notificationConfigurationData = data.notificationConfiguration;
    });
  }

  /**
   * Sets the Notification Configuration table.
   */
  ngOnInit() {
    this.setNotificationConfiguration();
  }

  /**
   * Initializes the data source and sorter for Notification configuration table.
   */
  setNotificationConfiguration() {
    this.dataSource = new MatTableDataSource(this.notificationConfigurationData);
    this.dataSource.sort = this.sort;
  }

}
