/** Angular Imports */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

/** rxjs Imports */
import { of } from 'rxjs';

/**
 * Tellers component.
 */
@Component({
  standalone: false,
  selector: 'mifosx-tellers',
  templateUrl: './tellers.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./tellers.component.scss']
})
export class TellersComponent implements OnInit {

  /** Tellers data. */
  tellersData: any;
  /** Columns to be displayed in tellers table. */
  displayedColumns: string[] = ['officeName', 'name', 'status', 'startDate', 'actions'];
  /** Data source for tellers table. */
  dataSource: MatTableDataSource<any>;

  /** Paginator for tellers table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for tellers table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * Retrieves the tellers data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(( data: { tellers: any }) => {
      this.tellersData = data.tellers;
    });
  }

  /**
   * Filters data in tellers table based on passed value.
   * @param {string} filterValue Value to filter data.
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Sets the tellers table.
   */
  ngOnInit() {
    this.setTellers();
  }

  /**
   * Initializes the data source, paginator and sorter for tellers table.
   */
  setTellers() {
    this.dataSource = new MatTableDataSource(this.tellersData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
