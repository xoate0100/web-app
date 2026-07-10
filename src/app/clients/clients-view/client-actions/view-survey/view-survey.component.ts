/** Angular Imports */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { LayoutAlignDirective, LayoutDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { DatePipe } from '@angular/common';

/**
 * View Survey component.
 */
@Component({
    selector: 'mifosx-view-survey',
    templateUrl: './view-survey.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-survey.component.scss'],
    imports: [LayoutAlignDirective, MatButton, RouterLink, FaIconComponent, LayoutDirective, MatFormField, FlexDirective, MatLabel, MatInput, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator, DatePipe]
})
export class ViewSurveyComponent implements OnInit {

  /** Survey Data */
  surveyData: any;
  /** Data source for view surveys table. */
  dataSource: MatTableDataSource<any>;
  /** Columns to be displayed in list of surveys table. */
  displayedColumns: string[] = ['surveyName', 'createdBy', 'date', 'score'];

  /** Paginator for list of surveys table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for list of surveys table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  /**
   * Retrieves the survey data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.surveyData = data.clientActionData;
    });
  }

  ngOnInit() {
    this.constructSurveys(this.surveyData);
  }

  /**
   * Sets datasource, paginator and sorter for surveys table.
   * @param data Survey Data
   */
  constructSurveys(data: any) {
    let surveys: any[] = [];
    data.forEach((entry: any) => {
      const scoreCards: any[] = entry.scorecardValues.map((element: any) => {
        return {
          surveyName: entry.surveyName,
          createdBy: entry.username,
          date: element.createdOn,
          score: element.value
        };
      });
      surveys = surveys.concat(scoreCards);
    });
    this.dataSource = new MatTableDataSource(surveys);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Filters data in list of surveys table based on passed value.
   * @param {string} filterValue Value to filter data.
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
