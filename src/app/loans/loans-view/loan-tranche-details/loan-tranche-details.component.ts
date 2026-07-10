import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlexFillDirective, FlexDirective, LayoutDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { NgIf, DecimalPipe, DatePipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';

@Component({
    selector: 'mifosx-loan-tranche-details',
    templateUrl: './loan-tranche-details.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./loan-tranche-details.component.scss'],
    imports: [
        FlexFillDirective,
        FlexDirective,
        LayoutDirective,
        LayoutAlignDirective,
        NgIf,
        MatButton,
        FaIconComponent,
        MatTable,
        MatColumnDef,
        MatHeaderCellDef,
        MatHeaderCell,
        MatCellDef,
        MatCell,
        MatHeaderRowDef,
        MatHeaderRow,
        MatRowDef,
        MatRow,
        DecimalPipe,
        DatePipe,
    ],
})
export class LoanTrancheDetailsComponent implements OnInit {
  loanDetails: any;
  return: any;
  status: any;
  totalDisbursedAmount: any;
  count: number;
  expectedDisbursementColumns: string[] = ['expected disbursement on', 'disbursed on', 'principal', 'action'];
  emivariationColumns: string[] = ['emi amount variation from', 'fixed emi amount'];

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
    this.status = this.loanDetails.status.value;
  }

  showAddDeleteTrancheButtons(action: string) {
    this.return = true;
    if (
      this.status === 'Closed (obligations met)' ||
      this.status === 'Overpaid' ||
      this.status === 'Closed (rescheduled)' ||
      this.status === 'Closed (written off)' ||
      this.status === 'Submitted and pending approval'
    ) {
      this.return = false;
    }
    this.totalDisbursedAmount = 0;
    this.count = 0;
    this.loanDetails.disbursementDetails.forEach((element: any) => {
      if (element.actualDisbursementDate) {
        this.totalDisbursedAmount += element.principal;
      } else {
        this.count += 1;
      }
    });

    if (this.totalDisbursedAmount === this.loanDetails.approvedPrincipal || this.return === false) {
      return false;
    }
    if (this.count === 0 && action === 'deletedisbursedetails') {
      return false;
    }

    return true;
  }

  showEdit(disbursementDetail: any) {
    if (
      (!disbursementDetail.actualDisbursementDate || disbursementDetail.actualDisbursementDate === null) &&
      this.status === 'Approved'
    ) {
      return true;
    }
    return false;
  }

  delete() {
    // Tranche deletion is not yet implemented.
  }
}
