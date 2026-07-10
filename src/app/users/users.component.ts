/** Angular Imports */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { ActivatedRoute, RouterLink } from '@angular/router';

/** rxjs Imports */
import { of } from 'rxjs';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

/**
 * Users component.
 */
@Component({
    selector: 'mifosx-users',
    templateUrl: './users.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./users.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, FaIconComponent, MatFormField, FlexDirective, MatLabel, MatInput, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator]
})
export class UsersComponent implements OnInit {

  /** Users data. */
  usersData: any;
  /** Columns to be displayed in users table. */
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'officeName'];
  /** Data source for users table. */
  dataSource: MatTableDataSource<any>;

  /** Paginator for users table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for users table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * Retrieves the users data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.usersData = data.users;
    });
  }

  /**
   * Filters data in users table based on passed value.
   * @param {string} filterValue Value to filter data.
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Sets the users table.
   */
  ngOnInit() {
    this.setUsers();
  }

  /**
   * Initializes the data source, paginator and sorter for users table.
   */
  setUsers() {
    this.dataSource = new MatTableDataSource(this.usersData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
