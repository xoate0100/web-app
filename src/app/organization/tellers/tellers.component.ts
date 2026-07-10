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
import { MatTooltip } from '@angular/material/tooltip';
import { DatePipe } from '@angular/common';

/**
 * Tellers component.
 */
@Component({
    selector: 'mifosx-tellers',
    templateUrl: './tellers.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./tellers.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatFormField, FlexDirective, MatLabel, MatInput, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, MatTooltip, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator, DatePipe]
})
export class TellersComponent implements OnInit {

  /** Tellers data. */
  tellersData: any;
  /** Columns to be displayed in tellers table. */
  displayedColumns: string[] = ['officeName', 'name', 'status', 'startDate', 'actions'];
  /** Data source for tellers table. */
  dataSource: MatTableDataSource<any>;

  /** Paginator for tellers table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for tellers table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * Retrieves the tellers data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.tellersData = data.tellers;
    });
  }

  /**
   * Filters data in tellers table based on passed value.
   * @param {string} filterValue Value to filter data.
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Sets the tellers table.
   */
  ngOnInit() {
    this.setTellers();
  }

  /**
   * Initializes the data source, paginator and sorter for tellers table.
   */
  setTellers() {
    this.dataSource = new MatTableDataSource(this.tellersData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
