/** Angular Imports */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';

/** Custom Services */
import { UserService } from './user.service';

/** Custom Model */
import { User } from './user.model';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatTooltip } from '@angular/material/tooltip';

/**
 * Self service users component.
 *
 * TODO: Complete functionality once API is available.
 */
@Component({
    selector: 'mifosx-users',
    templateUrl: './users.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./users.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatButton, FaIconComponent, RouterLink, MatFormField, FlexDirective, MatLabel, MatInput, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCheckbox, MatCellDef, MatCell, MatSortHeader, MatTooltip, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator]
})
export class UsersComponent implements OnInit {

  /** Self service users. */
  userData: User[];
  /** Columns to be displayed in users table. */
  displayedColumns: string[] = ['select', 'name', 'id', 'email', 'status', 'officeName', 'staff'];
  /** Data source for users table. */
  dataSource: MatTableDataSource<User>;
  /** Selection model for users table. */
  selection = new SelectionModel<User>(true, []);

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
      this.userData = data.users;
    });
  }

  /**
   * Initializes the data source, paginator and sorter for users table.
   */
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.userData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Filters data in users table based on passed value.
   * @param {string} filterValue Value to filter data.
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Checks if all rows of users table are selected.
   * @returns {boolean} True if all rows are selected.
   */
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /**
   * Toggles selection for all rows of users table.
   */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach((row: User) => this.selection.select(row));
  }

}
