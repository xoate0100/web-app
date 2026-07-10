import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexFillDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { NgIf, DatePipe } from '@angular/common';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';

@Component({
    selector: 'mifosx-view-share-product',
    templateUrl: './view-share-product.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-share-product.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatCard, MatCardContent, FlexFillDirective, MatDivider, FlexDirective, NgIf, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, DatePipe]
})
export class ViewShareProductComponent implements OnInit {

  shareProduct: any;

  marketPriceDisplayedColumns: string[] = ['fromDate', 'shareValue'];
  chargesDisplayedColumns: string[] = ['name', 'chargeCalculationType', 'amount', 'chargeTimeType'];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.shareProduct = data.shareProduct;
    });
  }

  ngOnInit() {
  }

}
