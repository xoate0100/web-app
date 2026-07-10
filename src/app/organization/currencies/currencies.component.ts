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
 * Currencies component.
 */
@Component({
    selector: 'mifosx-currencies',
    templateUrl: './currencies.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./currencies.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatFormField, FlexDirective, MatLabel, MatInput, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator]
})
export class CurrenciesComponent implements OnInit {

  /** Currencies data. */
  currenciesData: any;
  /** Columns to be displayed in currencies table. */
  displayedColumns: string[] = ['name', 'code'];
  /** Data source for currencies table. */
  dataSource: MatTableDataSource<any>;

  /** Paginator for currencies table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for currencies table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * Retrieves the currencies data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.currenciesData = data.currencies.selectedCurrencyOptions;
    });
  }

  /**
   * Filters data in currencies table based on passed value.
   * @param {string} filterValue Value to filter data.
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Sets the currencies table.
   */
  ngOnInit() {
    this.setCurrencies();
  }

  /**
   * Initializes the data source, paginator and sorter for currencies table.
   */
  setCurrencies() {
    this.dataSource = new MatTableDataSource(this.currenciesData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
