/** Angular Imports */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';

/**
 * Manage Reports Component.
 */
@Component({
    selector: 'mifosx-manage-reports',
    templateUrl: './manage-reports.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./manage-reports.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatFormField, FlexDirective, MatLabel, MatInput, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, NgIf, MatTooltip, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator]
})
export class ManageReportsComponent implements OnInit {

  /** Reports Data. */
  reportsData: any;
  /** Columns to be displayed in reports table. */
  displayedColumns: string[] = ['reportName', 'reportType', 'reportSubType', 'reportCategory', 'coreReport', 'userReport'];
  /** Data source for reports table. */
  dataSource: MatTableDataSource<any>;

   /** Paginator for reports table. */
   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
   /** Sorter for reports table. */
   @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * Retrieves the reports data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.reportsData = data.reports;
    });
  }

  /**
   * Sets the reports table.
   */
  ngOnInit() {
    this.setReports();
  }

  /**
   * Initializes the data source, paginator and sorter for reports table.
   */
  setReports() {
    this.dataSource = new MatTableDataSource(this.reportsData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Filters data in reports table based on passed value.
   * @param {string} filterValue Value to filter data.
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
