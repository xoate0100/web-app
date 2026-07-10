import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'mifosx-floating-interest-rates',
    templateUrl: './floating-interest-rates.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./floating-interest-rates.component.scss'],
    imports: [MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, DatePipe]
})
export class FloatingInterestRatesComponent implements OnInit {

  /** Loan Details */
  loanDetails: any;
  /** Interest Rate Data */
  interestRateData: any;
  /** Columns to be displayed in charges table. */
  displayedColumns: string[] = ['fromDate', 'interestRate'];

  /**
   * Retrieves the loans data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.parent!.data.subscribe((data: any) => {
      this.loanDetails = data.loanDetailsData;
    });
  }

  ngOnInit() {
    this.interestRateData = this.loanDetails.interestRatesPeriods;
  }

}
