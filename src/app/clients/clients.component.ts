/** Angular Imports. */
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { ClientsDataSource } from './clients.datasource';

/** rxjs Imports */
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';

/** Custom Services */
import { ClientsService } from './clients.service';
import { MatCard } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { HasPermissionDirective } from '../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { NgClass, AsyncPipe } from '@angular/common';
import { ClassDirective } from '@ngbracket/ngx-layout/extended';
import { StatusLookupPipe } from '../pipes/status-lookup.pipe';

@Component({
    selector: 'mifosx-clients',
    templateUrl: './clients.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./clients.component.scss'],
    imports: [
        MatCard,
        LayoutDirective,
        LayoutAlignDirective,
        MatFormField,
        MatInput,
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
export class ClientsComponent implements OnInit, AfterViewInit {
  @ViewChild('showClosedAccounts', { static: true }) showClosedAccounts: MatCheckbox;


  displayedColumns = ['name', 'clientno', 'externalid', 'status', 'mobileNo', 'gender', 'office', 'staff'];
  dataSource: ClientsDataSource;
  /** Get the required filter value. */
  searchValue = '';

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private clientsService: ClientsService) {

  }

  ngOnInit() {
    this.getClients();
  }
  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page, this.showClosedAccounts.change)
      .pipe(
        tap(() => this.loadClientsPage())
      )
      .subscribe();
  }

  /**
   * Loads a page of journal entries.
   */
  loadClientsPage() {
    if (!this.sort.direction) {
      this.sort.active = '';
    }

    if (this.searchValue !== '') {
    this.applyFilter(this.searchValue);
    } else {
    this.dataSource.getClients(this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize, !this.showClosedAccounts.checked);
    }
  }

  /**
   * Initializes the data source for clients table and loads the first page.
   */
  getClients() {
    this.dataSource = new ClientsDataSource(this.clientsService);
    this.dataSource.getClients(this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize, !this.showClosedAccounts.checked);
  }

  /**
   * Filter Client Data
   * @param {string} filterValue Value to filter data.
   */
  applyFilter(filterValue: string= '') {
    this.searchValue = filterValue;
    this.dataSource.filterClients(filterValue.trim().toLowerCase(), this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize, !this.showClosedAccounts.checked);
  }

}
