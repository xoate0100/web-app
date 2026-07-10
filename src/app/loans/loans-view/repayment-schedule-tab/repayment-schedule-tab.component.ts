import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatFooterCellDef, MatFooterCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatFooterRowDef, MatFooterRow } from '@angular/material/table';
import { NgIf, DecimalPipe, DatePipe } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'mifosx-repayment-schedule-tab',
    templateUrl: './repayment-schedule-tab.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./repayment-schedule-tab.component.scss'],
    imports: [FaIconComponent, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatFooterCellDef, MatFooterCell, NgIf, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatFooterRowDef, MatFooterRow, DecimalPipe, DatePipe]
})
export class RepaymentScheduleTabComponent implements OnInit {

  /** Loan Repayment Schedule Details Data */
  repaymentScheduleDetails: any;
  /** Stores if there is any waived amount */
  isWaived: boolean;
  /** Columns to be displayed in original schedule table. */
  displayedColumns: string[] = ['number', 'days', 'date', 'paiddate', 'check', 'principalDue', 'balanceOfLoan', 'interest', 'fees', 'penalties', 'due', 'paid', 'inadvance', 'late', 'waived', 'outstanding'];

  /**
   * Retrieves the loans with associations data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.parent!.data.subscribe((data: any) => {
      this.repaymentScheduleDetails = data.loanDetailsData.repaymentSchedule;
    });
  }

  ngOnInit() {
    this.isWaived = this.repaymentScheduleDetails.totalWaived > 0;
  }

}
