/** Angular Imports */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { NgIf, DatePipe } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';

/**
 * View Floating Rate Component.
 */
@Component({
    selector: 'mifosx-view-floating-rate',
    templateUrl: './view-floating-rate.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-floating-rate.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatCard, MatCardContent, FlexDirective, MatDivider, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, NgIf, MatTooltip, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator, DatePipe]
})
export class ViewFloatingRateComponent implements OnInit {

  /** Floating Rate Data. */
  floatingRateData: any;
  /** Columns to be displayed in floating rate periods table. */
  displayedColumns: string[] = ['fromDate', 'interestRate', 'isDifferential'];
  /** Data source for floating rate periods table. */
  dataSource: MatTableDataSource<any>;

  /** Paginator for floating rate periods table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for floating rate periods table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * Retrieves the floating rate data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.floatingRateData = data.floatingRate;
    });
  }

  /**
   * Sets the floating rate periods table.
   */
  ngOnInit() {
    this.setFloatingRates();
  }

  /**
   * Initializes the data source, paginator and sorter for floating rate periods table.
   */
  setFloatingRates() {
   this.dataSource = new MatTableDataSource(this.floatingRateData.ratePeriods);
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
  }

}
