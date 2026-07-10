/** Angular Imports */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LayoutDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

/**
 * Financial activity mappings component.
 */
@Component({
    selector: 'mifosx-financial-activity-mappings',
    templateUrl: './financial-activity-mappings.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./financial-activity-mappings.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator]
})
export class FinancialActivityMappingsComponent implements OnInit {

  /** Financial activity account data. */
  financialActivityAccountData: any;
  /** Columns to be displayed in financial activity mappings table. */
  displayedColumns: string[] = ['financialActivity', 'glAccountName', 'glAccountCode'];
  /** Data source for financial activity mappings table. */
  dataSource: MatTableDataSource<any>;

  /** Paginator for financial activity mappings table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for financial activity mappings table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * Retrieves the financial activity accounts data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.financialActivityAccountData = data.financialActivityAccounts;
    });
  }

  /**
   * Sets the financial activity mappings table.
   */
  ngOnInit() {
    this.setFinancialActivityAccounts();
  }

  /**
   * Initializes the data source, paginator and sorter for financial activity mappings table.
   */
  setFinancialActivityAccounts() {
    this.dataSource = new MatTableDataSource(this.financialActivityAccountData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortingDataAccessor = (financialActivityAccount: any, property: any) => {
      switch (property) {
        case 'financialActivity': return financialActivityAccount.financialActivityData.name;
        case 'glAccountName': return financialActivityAccount.glAccountData.name;
        case 'glAccountCode': return financialActivityAccount.glAccountData.glCode;
        default: return financialActivityAccount[property];
      }
    };
    this.dataSource.sort = this.sort;
  }

}
