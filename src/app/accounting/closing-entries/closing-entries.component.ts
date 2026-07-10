/** Angular Imports */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

/** rxjs Imports */
import { startWith, map } from 'rxjs/operators';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatAutocompleteTrigger, MatAutocomplete, MatOption } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';

/**
 * Closing entries component.
 */
@Component({
    selector: 'mifosx-closing-entries',
    templateUrl: './closing-entries.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./closing-entries.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatFormField, FlexDirective, MatLabel, MatInput, ReactiveFormsModule, MatAutocompleteTrigger, MatAutocomplete, NgFor, MatOption, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator, AsyncPipe]
})
export class ClosingEntriesComponent implements OnInit {

  /** Columns to be displayed in closing entries table. */
  displayedColumns: string[] = ['officeName', 'closingDate', 'comments', 'createdByUsername'];
  /** Data source for closing entries table. */
  dataSource: MatTableDataSource<any>;
  /** Office name filter form control. */
  officeName = new FormControl();
  /** Office data. */
  officeData: any;
  /** Filtered office data for autocomplete. */
  filteredOfficeData: any;
  /** GL Account closure data. */
  glAccountClosureData: any;

  /** Paginator for closing entries table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for closing entries table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * Retrieves the offices and gl account closures data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.officeData = data.offices;
      this.glAccountClosureData = data.glAccountClosures;
    });
  }

  /**
   * Sets the filter and closing entries table.
   */
  ngOnInit() {
    this.applyFilter();
    this.setFilteredOffices();
    this.setAccountingClosures();
  }

  /**
   * Filters data in closing entries table based on office name.
   */
  applyFilter() {
    this.officeName.valueChanges.subscribe((filterValue: string) => {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    });
  }

  /**
   * Initializes the data source, paginator and sorter for closing entries table.
   */
  setAccountingClosures() {
    this.dataSource = new MatTableDataSource(this.glAccountClosureData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Sets filtered offices for autocomplete.
   */
  setFilteredOffices() {
    this.filteredOfficeData = this.officeName.valueChanges
    .pipe(
      startWith(''),
      map((office: any) => typeof office === 'string' ? office : office.name),
      map((officeName: string) => officeName ? this.filterOfficeAutocompleteData(officeName) : this.officeData)
    );
  }

  /**
   * Filters offices.
   * @param {string} officeName Office name to filter office by.
   * @returns {any} Filtered offices.
   */
  private filterOfficeAutocompleteData(officeName: string): any {
    return this.officeData.filter((office: any) => office.name.toLowerCase().includes(officeName.toLowerCase()));
  }

}
