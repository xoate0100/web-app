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
import { NgIf } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';

/**
 * Employees component.
 */
@Component({
    selector: 'mifosx-employees',
    templateUrl: './employees.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./employees.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatFormField, FlexDirective, MatLabel, MatInput, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, NgIf, MatTooltip, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator]
})
export class EmployeesComponent implements OnInit {

  /** Employees data. */
  employeesData: any;
  /** Columns to be displayed in employees table. */
  displayedColumns: string[] = ['displayName', 'isLoanOfficer', 'officeName', 'isActive'];
  /** Data source for employees table. */
  dataSource: MatTableDataSource<any>;

  /** Paginator for employees table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for employees table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * Retrieves the employees data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.employeesData = data.employees;
    });
  }

  /**
   * Filters data in employees table based on passed value.
   * @param {string} filterValue Value to filter data.
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Sets the employees table.
   */
  ngOnInit() {
    this.setEmployees();
  }

  /**
   * Initializes the data source, paginator and sorter for employees table.
   */
  setEmployees() {
    this.dataSource = new MatTableDataSource(this.employeesData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
