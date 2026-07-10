/** Angular Imports */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatTooltip } from '@angular/material/tooltip';
import { NgIf } from '@angular/common';

/**
 * Manage Surveys component.
 */
@Component({
    selector: 'mifosx-manage-surveys',
    templateUrl: './manage-surveys.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./manage-surveys.component.scss'],
    imports: [
        LayoutDirective,
        LayoutAlignDirective,
        LayoutGapDirective,
        MatButton,
        RouterLink,
        FaIconComponent,
        MatFormField,
        FlexDirective,
        MatLabel,
        MatInput,
        MatTable,
        MatSort,
        MatColumnDef,
        MatHeaderCellDef,
        MatHeaderCell,
        MatSortHeader,
        MatCellDef,
        MatCell,
        MatTooltip,
        NgIf,
        MatHeaderRowDef,
        MatHeaderRow,
        MatRowDef,
        MatRow,
        MatPaginator,
    ],
})
export class ManageSurveysComponent implements OnInit {

  /* Surveys data */
  surveysData: any;
  /* Columns to be displayed in manage surveys data table */
  displayedColumns: string[] = ['key', 'name', 'description', 'countryCode', 'status', 'action'];
  /* Data source for manage surveys data table */
  dataSource: MatTableDataSource<any>;

  /** Paginator for manage surveys table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for manage surveys table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * Retrieves the surveys data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.surveysData = data.surveys;
    });
  }

  /**
   * Returns whether an survey is active based on its duration
   * @param {number} validFrom Date valid from
   * @param {number} validTo Date valid to
   */
  isActive(validFrom: number, validTo: number) {
    const curdate = new Date().getTime();
    return (curdate > validFrom && curdate < validTo);
  }

  /**
   * Sets the manage surveys table. And initiates button and action sort
   */
  ngOnInit() {
    this.setSurveys();
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'status': return this.isActive(item.validFrom, item.validTo);
        case 'action': return this.isActive(item.validFrom, item.validTo);
        default: return item[property];
      }
    };
  }

  /**
   * Initializes the data source, paginator and sorter for surveys table.
   */
  setSurveys() {
    this.dataSource = new MatTableDataSource(this.surveysData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Filters data in surveys table based on passed value.
   * @param {string} filterValue Value to filter data.
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
