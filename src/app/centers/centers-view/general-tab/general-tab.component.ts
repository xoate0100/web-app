/** Angular Imports */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf, NgClass, DatePipe } from '@angular/common';
import { LayoutDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatTooltip } from '@angular/material/tooltip';
import { ClassDirective } from '@ngbracket/ngx-layout/extended';
import { MatButton } from '@angular/material/button';
import { StatusLookupPipe } from '../../../pipes/status-lookup.pipe';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

/**
 * Create Center General Tab Component
 */
@Component({
    selector: 'mifosx-general-tab',
    templateUrl: './general-tab.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./general-tab.component.scss'],
    imports: [FaIconComponent, NgIf, LayoutDirective, LayoutGapDirective, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatTooltip, NgClass, ClassDirective, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, RouterLink, MatButton, DatePipe, StatusLookupPipe]
})
export class GeneralTabComponent implements OnInit {

  /** Savings Account Table Columns */
  savingsAccountColumns: string[] = ['Account No', 'Products', 'Balance', 'Actions'];
  /** Groups Table Columns */
  groupsColumns: string[] = ['Account No', 'Group Name', 'Office Name', 'Submitted On'];
  /** Stores the summary of center */
  centerSummaryData: any;
  /** Stores Center Data for particular center */
  centerViewData: any;
  /** Stores Saving Account for particular center */
  savingsAccountData: any;
  /** Stores Group Data */
  groupResourceData: any;

  /**
   * Retrieves the data for centers
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.centerSummaryData = data.centerSummaryData[0];
      this.centerViewData = data.centerViewData;
      this.savingsAccountData = data.savingsAccountData.savingsAccounts;
      this.groupResourceData = data.centerViewData.groupMembers;
    });
  }

  ngOnInit() {
  }


  /**
   * Stops the propagation to view pages.
   * @param $event Mouse Event
   */
  routeEdit($event: MouseEvent) {
    $event.stopPropagation();
  }

}
