/** Angular Imports */
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

/** rxjs Imports */
import { merge } from 'rxjs';
import { tap, startWith, map, distinctUntilChanged, debounceTime} from 'rxjs/operators';

/** Custom Services */
import { CentersService } from './centers.service';

/** Custom Data Source */
import { CentersDataSource } from './centers.datasource';
import { MatCard } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { HasPermissionDirective } from '../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { NgClass, AsyncPipe } from '@angular/common';
import { ClassDirective } from '@ngbracket/ngx-layout/extended';
import { StatusLookupPipe } from '../pipes/status-lookup.pipe';

/**
 * Centers component.
 */
@Component({
    selector: 'mifosx-app-centers',
    templateUrl: './centers.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./centers.component.scss'],
    imports: [
        MatCard,
        LayoutDirective,
        LayoutAlignDirective,
        MatFormField,
        MatInput,
        ReactiveFormsModule,
        MatCheckbox,
        LayoutGapDirective,
        HasPermissionDirective,
        MatButton,
        RouterLink,
        FaIconComponent,
        MatTable,
        MatSort,
        MatColumnDef,
        MatHeaderCellDef,
        MatHeaderCell,
        MatSortHeader,
        MatCellDef,
        MatCell,
        NgClass,
        ClassDirective,
        MatHeaderRowDef,
        MatHeaderRow,
        MatRowDef,
        MatRow,
        MatPaginator,
        AsyncPipe,
        StatusLookupPipe,
    ],
})
export class CentersComponent implements OnInit, AfterViewInit {
  @ViewChild('showClosedCenters', { static: true }) showClosedCenters: MatCheckbox;

  /** Name form control. */
  name = new FormControl();
  /** ExternalId form control. */
  externalId = new FormControl();
  /** Columns to be displayed in centers table. */
  displayedColumns =  ['name', 'accountNo', 'externalId', 'status', 'officeName'];
  /** Data source for centers table. */
  dataSource: CentersDataSource;
  /** Centers filter. */
  filterCentersBy = [
    {
      type: 'name',
      value: ''
    },
    {
      type: 'externalId',
      value: ''
    }
  ];

  /** Paginator for centers table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for centers table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private centersService: CentersService) { }

  ngOnInit() {
    this.getCenters();
  }

  /**
   * Subscribes to all search filters:
   * Name, ExternalId
   * sort change and page change.
   */
  ngAfterViewInit() {

    this.name.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap((filterValue) => {
          this.applyFilter(filterValue, 'name');
        })
      )
      .subscribe();

    this.externalId.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap((filterValue) => {
        this.applyFilter(filterValue, 'externalId');
      })
    )
    .subscribe();

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadCentersPage())
      )
      .subscribe();
  }

  /**
   * Reloads page on changing show closed centers checkbox
   */
  changeShowClosedCenters() {
    this.loadCentersPage();
  }

  /**
   * Loads a page of centers.
   */
  loadCentersPage() {
    if (!this.sort.direction) {
      this.sort.active = '';
    }
    this.dataSource.getCenters(this.filterCentersBy, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize, !this.showClosedCenters.checked);
  }

  /**
   * Filters data in centers table based on passed value and poperty.
   * @param {string} filterValue Value to filter data.
   * @param {string} property Property to filter data by.
   */
  applyFilter(filterValue: string, property: string) {
    this.paginator.pageIndex = 0;
    const findIndex = this.filterCentersBy.findIndex(filter => filter.type === property);
    this.filterCentersBy[findIndex].value = filterValue;
    this.loadCentersPage();
  }

  /**
   * Initializes the data source for centers table and loads the first page.
   */
  getCenters() {
    this.dataSource = new CentersDataSource(this.centersService);
    this.dataSource.getCenters(this.filterCentersBy, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
  }

}
