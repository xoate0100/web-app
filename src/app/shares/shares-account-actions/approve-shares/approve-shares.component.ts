/** Angular Imports */
import { Component, OnInit, ViewChild, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

/** Custom Dialogs */
import { ApproveShareDialogComponent } from './approve-share-dialog/approve-share-dialog.component';

/** Custom Serices */
import { SharesService } from 'app/shares/shares.service';
import { NgClass, DatePipe } from '@angular/common';
import { ClassDirective } from '@ngbracket/ngx-layout/extended';
import { MatTooltip } from '@angular/material/tooltip';
import { MatButton } from '@angular/material/button';
import { StatusLookupPipe } from '../../../pipes/status-lookup.pipe';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

/**
 * Approve shares component.
 */
@Component({
    selector: 'mifosx-approve-shares',
    templateUrl: './approve-shares.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./approve-shares.component.scss'],
    imports: [FaIconComponent, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, NgClass, ClassDirective, MatTooltip, MatButton, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator, DatePipe, StatusLookupPipe]
})
export class ApproveSharesComponent implements OnInit {

  /** Shares account data. */
  sharesAccountData: any;

  /** Shares account Id */
  accountId: any;
  /** Shares account data. */
  sharesData: any[];
  /** Columns to be displayed in shares table. */
  displayedColumns: string[] = ['transactionDate', 'totalShares', 'redeemedPrice', 'status', 'approve'];
  /** Data source for shares table. */
  dataSource: MatTableDataSource<any>;

  /** Paginator for shares table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for shares table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  /** Shares table reference */
  @ViewChild('sharesTable', { static: true }) sharesTableRef: MatTable<Element>;

  /**
   * @param {SharesService} sharesService Shares Service
   */
  constructor(private sharesService: SharesService,
              private route: ActivatedRoute,
              public dialog: MatDialog) {
    this.accountId = this.route.parent!.snapshot.params['shareAccountId']!;
    this.route.data.subscribe((data: any) => {
      this.sharesAccountData = data.shareAccountActionData;
    });
  }

  /**
   * Sets the shares table.
   */
  ngOnInit() {
    this.sharesData = this.sharesAccountData.purchasedShares
    .filter((share: any) => share.status.value === 'Pending Approval');
    this.setShares();
  }

  /**
   * Initializes the data source, paginator and sorter for shares table.
   */
  setShares() {
    this.dataSource = new MatTableDataSource(this.sharesData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Approves a share
   * @param {any} id Share Id
   */
  approve(id: any) {
    const approveSharesDialogRef = this.dialog.open(ApproveShareDialogComponent, {
      data: { shareId: id }
    });
    approveSharesDialogRef.afterClosed().subscribe((response: any) => {
      if (response.approve) {
        const locale = 'en';
        const dateFormat = 'dd MMMM yyyy';
        const data = {
          requestedShares: [{id}],
          dateFormat,
          locale
        };
        this.sharesService.executeSharesAccountCommand(this.accountId, 'approveadditionalshares', data).subscribe(() => {
          const share = this.sharesData.find(element => element.id === id);
          const index = this.sharesData.indexOf(share);
          this.sharesData.splice(index, 1);
          this.dataSource.data = this.sharesData;
          this.sharesTableRef.renderRows();
        });
      }
    });
  }

}
