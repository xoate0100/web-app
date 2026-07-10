/** Angular Imports */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';

/** rxjs Imports */
import { of } from 'rxjs';
import { LayoutDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatButton, MatIconButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { NgIf } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';

/**
 * Manage scheduler jobs component.
 */
@Component({
    selector: 'mifosx-manage-scheduler-jobs',
    templateUrl: './manage-scheduler-jobs.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./manage-scheduler-jobs.component.scss'],
    imports: [LayoutDirective, LayoutGapDirective, MatButton, FaIconComponent, MatFormField, FlexDirective, MatLabel, MatInput, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCheckbox, MatCellDef, MatCell, MatSortHeader, NgIf, MatTooltip, MatIconButton, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, RouterLink, MatPaginator]
})
export class ManageSchedulerJobsComponent implements OnInit {

  /** Jobs data. */
  jobData: any;
  /** Scheduler data */
  schedulerData: any;
  /** Columns to be displayed in manage scheduler jobs table. */
  displayedColumns: string[] = ['select', 'displayName', 'nextRunTime', 'previousRunTime', 'previousRunStatus', 'currentlyRunning', 'errorLog'];
  /** Data source for manage scheduler jobs table. */
  dataSource: MatTableDataSource<any>;
  /** Initialize Selection */
  selection = new SelectionModel<any>(true, []);

  /** Paginator for table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for manage scheduler jobs table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * Retrieves the scheduler jobs data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.jobData = data.jobsScheduler[0];
      this.schedulerData = data.jobsScheduler[1];
    });
  }

  /**
   * Filters data in manage scheduler jobs table based on passed value.
   * @param {string} filterValue Value to filter data.
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Whether the number of selected elements matches the total number of rows.
   */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /**
   * Selects all rows if they are not all selected; otherwise clear selection.
   */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /**
   * Sets the manage scheduler jobs table.
   */
  ngOnInit() {
    this.setJobs();
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'previousRunStatus': return item.lastRunHistory.status;
        case 'errorLog': return item.lastRunHistory.status;
        case 'previousRunTime': return new Date(item.lastRunHistory.jobRunStartTime);
        case 'nextRunTime': return new Date(item.nextRunTime);
        default: return item[property];
      }
    };
  }

  /**
   * Initializes the data source, paginator and sorter for manage scheduler jobs table.
   */
  setJobs() {
    this.dataSource = new MatTableDataSource(this.jobData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
