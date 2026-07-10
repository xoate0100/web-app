/** Angular Imports */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { ActivatedRoute, RouterLink } from '@angular/router';

/** rxjs Imports */
import { of } from 'rxjs';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

/**
 * Manage Data Tables component.
 */
@Component({
    selector: 'mifosx-manage-data-tables',
    templateUrl: './manage-data-tables.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./manage-data-tables.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatFormField, FlexDirective, MatLabel, MatInput, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator]
})
export class ManageDataTablesComponent implements OnInit {

  /** Data table data. */
  dataTableData: any;
  /** Columns to be displayed in manage data tables table. */
  displayedColumns: string[] = ['registeredTableName', 'applicationTableName'];
  /** Data source for manage data tables table. */
  dataSource: MatTableDataSource<any>;

  /** Paginator for manage data tables table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for manage data tables table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * Retrieves the data tables data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.dataTableData = data.dataTables;
    });
  }

  /**
   * Filters data in manage data tables table based on passed value.
   * @param {string} filterValue Value to filter data.
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Sets the manage data tables table.
   */
  ngOnInit() {
    this.setDataTables();
  }

  /**
   * Initializes the data source, paginator and sorter for manage data tables table.
   */
  setDataTables() {
    this.dataSource = new MatTableDataSource(this.dataTableData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
