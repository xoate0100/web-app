/** Angular Imports */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { ActivatedRoute, RouterLink } from '@angular/router';

/** rxjs Imports */
import { of } from 'rxjs';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatButton, MatIconButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatTooltip } from '@angular/material/tooltip';
import { NgIf } from '@angular/common';

/**
 * Roles and Permissions component.
 */
@Component({
    selector: 'mifosx-roles-and-permissions',
    templateUrl: './roles-and-permissions.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./roles-and-permissions.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, RouterLink, MatButton, FaIconComponent, MatFormField, FlexDirective, MatLabel, MatInput, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, MatTooltip, NgIf, MatIconButton, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator]
})
export class RolesAndPermissionsComponent implements OnInit {

  /** Role data. */
  roleData: any;
  /** Columns to be displayed in roles and permissions table. */
  displayedColumns: string[] = ['name', 'description', 'disabled', 'actions'];
  /** Data source for roles and permissions table. */
  dataSource: MatTableDataSource<any>;

  /** Paginator for roles and permissions table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for roles and permissions table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * Retrieves the roles data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.roleData = data.roles;
    });
  }

  /**
   * Filters data in roles and permissions table based on passed value.
   * @param {string} filterValue Value to filter data.
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Sets the roles and permissions table.
   */
  ngOnInit() {
    this.setRoles();
  }

  /**
   * Stops the propagation to view roles and permissions
   * @param event Mouse Event
   */
  routeEdit(event: MouseEvent) {
    event.stopPropagation();
  }

  /**
   * Initializes the data source, paginator and sorter for roles and permissions table.
   */
  setRoles() {
    this.dataSource = new MatTableDataSource(this.roleData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
