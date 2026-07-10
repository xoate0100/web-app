import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatFooterCellDef, MatFooterCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatFooterRowDef, MatFooterRow } from '@angular/material/table';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { DecimalPipe, DatePipe } from '@angular/common';

@Component({
    selector: 'mifosx-original-schedule-tab',
    templateUrl: './original-schedule-tab.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./original-schedule-tab.component.scss'],
    imports: [MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, MatFooterCellDef, MatFooterCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatFooterRowDef, MatFooterRow, DecimalPipe, DatePipe]
})
export class OriginalScheduleTabComponent implements OnInit {

  /** Loan Details Data */
  originalScheduleDetails: any;
  /** Columns to be displayed in original schedule table. */
  displayedColumns: string[] = ['date', 'principalDue', 'balanceOfLoan', 'interest', 'fees', 'penalties', 'outstanding'];

  /**
   * Retrieves the loans with associations data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.parent!.data.subscribe((data: any) => {
      this.originalScheduleDetails = data.loanDetailsData.originalSchedule;
    });
  }

  ngOnInit() {
  }

}
