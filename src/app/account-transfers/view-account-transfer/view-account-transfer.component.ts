/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCard, MatCardContent } from '@angular/material/card';
import { LayoutDirective, FlexFillDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatDivider } from '@angular/material/divider';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'mifosx-view-account-transfer',
    templateUrl: './view-account-transfer.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-account-transfer.component.scss'],
    imports: [MatCard, MatCardContent, LayoutDirective, FlexFillDirective, MatDivider, FlexDirective, DatePipe]
})
export class ViewAccountTransferComponent {

  viewAccountTransferData: any;
  /**
   * Retrieves the view account transfer data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.viewAccountTransferData = data.viewAccountTransferData;
    });
  }

}
