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
 * Recurring Deposit Products component.
 */
@Component({
    selector: 'mifosx-recurring-deposit-products',
    templateUrl: './recurring-deposit-products.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./recurring-deposit-products.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatFormField, FlexDirective, MatLabel, MatInput, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator]
})
export class RecurringDepositProductsComponent implements OnInit {

  /** Data table data. */
  recurringDepositProductData: any;
  /** Columns to be displayed in recurring deposit products table. */
  displayedColumns: string[] = ['name', 'shortName'];
  /** Data source for recurring deposit products table. */
  dataSource: MatTableDataSource<any>;

  /** Paginator for recurring deposit products table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for recurring deposit products table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * Retrieves the recurring deposit products data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.recurringDepositProductData = data.recurringDepositProducts;
    });
  }

  /**
   * Filters data in recurring deposit products table based on passed value.
   * @param {string} filterValue Value to filter data.
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Sets the recurring deposit products table.
   */
  ngOnInit() {
    this.setRecurringDepositProducts();
  }

  /**
   * Initializes the data source, paginator and sorter for recurring deposit products table.
   */
  setRecurringDepositProducts() {
    this.dataSource = new MatTableDataSource(this.recurringDepositProductData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
