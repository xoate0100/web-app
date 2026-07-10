import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';

@Component({
    selector: 'mifosx-loan-collateral-tab',
    templateUrl: './loan-collateral-tab.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./loan-collateral-tab.component.scss'],
    imports: [MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow]
})
export class LoanCollateralTabComponent implements OnInit {

  /** Loan Details */
  loanDetails: any;
  /** Columns to be displayed in collateral table. */
  displayedColumns: string[] = ['type', 'value', 'description'];

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
  }

}
