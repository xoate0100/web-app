/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe, NgClass, NgIf } from '@angular/common';
import { ClientsService } from 'app/clients/clients.service';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardTitle, MatCardContent, MatCardActions } from '@angular/material/card';
import { ClassDirective } from '@ngbracket/ngx-layout/extended';
import { MatDivider } from '@angular/material/divider';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { StatusLookupPipe } from '../../../../pipes/status-lookup.pipe';

/**
 * View Charge component.
 */
@Component({
    selector: 'mifosx-view-charge',
    templateUrl: './view-charge.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-charge.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatCard, MatCardTitle, NgClass, ClassDirective, MatDivider, MatCardContent, FlexDirective, NgIf, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatCardActions, DatePipe, StatusLookupPipe]
})
export class ViewChargeComponent implements OnInit {

  /** Charge Data. */
  chargeData: any;
  /** Mat Table Column defs. */
  viewChargeTableColumns: string[] = ['id', 'officeName', 'type', 'transactionDate', 'amount', 'actions'];

  /**
   * Retrieves the selected job data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   */
  constructor(private route: ActivatedRoute,
              private router: Router,
              private date: DatePipe,
              private clientService: ClientsService) {
    this.route.data.subscribe((data: any) => {
      this.chargeData = data.clientChargeData;
    });
   }

  ngOnInit() {

  }

  /**
   * Waive Charge.
   */
  waiveCharge() {
    const waiveChargeObj = { clientId: this.chargeData.clientId, resourceType: this.chargeData.id};
    this.clientService.waiveClientCharge(waiveChargeObj).subscribe(() => {
      this.getChargeData();
    });
  }

  /**
   * Undo Transaction.
   */
  undoTransaction(transactionId: any) {
    const transactionData = { clientId: this.chargeData.clientId.toString(), transactionId: transactionId};
    this.clientService.undoTransaction(transactionData).subscribe(() => {
      this.getChargeData();
    });
  }

  /**
   * Get Charge Data.
   */
  getChargeData() {
    this.clientService.getSelectedChargeData(this.chargeData.clientId, this.chargeData.id).subscribe((data: any) => {
      this.chargeData = data;
    });
  }

  /**
   * Delete Charge.
   */
  deleteCharge() {
    this.clientService.deleteCharge(this.chargeData.clientId, this.chargeData.id).subscribe(() => {
      this.router.navigate(['../../clients', this.chargeData.clientId, 'general']);
    });
  }

}
