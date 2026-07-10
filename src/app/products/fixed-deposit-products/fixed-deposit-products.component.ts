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
 * Fixed Deposit Products component.
 */
@Component({
    selector: 'mifosx-fixed-deposit-products',
    templateUrl: './fixed-deposit-products.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./fixed-deposit-products.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatFormField, FlexDirective, MatLabel, MatInput, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator]
})
export class FixedDepositProductsComponent implements OnInit {

  /** Fixed deposit products data. */
  fixedDepositProductData: any;
  /** Columns to be displayed in fixed deposit products table. */
  displayedColumns: string[] = ['name', 'shortName'];
  /** Data source for fixed deposit products table. */
  dataSource: MatTableDataSource<any>;

  /** Paginator for fixed deposit products table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for fixed deposit products table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * Retrieves the fixed deposit products data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.fixedDepositProductData = data.fixedDepositProducts;
    });
  }

  /**
   * Filters data in fixed deposit products table based on passed value.
   * @param {string} filterValue Value to filter data.
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Sets the fixed deposit products table.
   */
  ngOnInit() {
    this.setFixedDepositProducts();
  }

  /**
   * Initializes the data source, paginator and sorter for fixed deposit products table.
   */
  setFixedDepositProducts() {
    this.dataSource = new MatTableDataSource(this.fixedDepositProductData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
