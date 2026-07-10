import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { LayoutDirective, FlexFillDirective, FlexDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatDivider } from '@angular/material/divider';
import { NgIf, DatePipe } from '@angular/common';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { MatButton } from '@angular/material/button';
import { MatStepperPrevious } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';
import { FindPipe } from '../../../../pipes/find.pipe';

@Component({
    selector: 'mifosx-share-product-preview-step',
    templateUrl: './share-product-preview-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./share-product-preview-step.component.scss'],
    imports: [LayoutDirective, FlexFillDirective, MatDivider, FlexDirective, NgIf, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, LayoutAlignDirective, LayoutGapDirective, MatButton, MatStepperPrevious, FaIconComponent, RouterLink, HasPermissionDirective, DatePipe, FindPipe]
})
export class ShareProductPreviewStepComponent implements OnInit {

  @Input() shareProductsTemplate: any;
  @Input() accountingRuleData: any;
  @Input() shareProduct: any;
  @Input() taskPermission: string;
  @Output() submit = new EventEmitter();

  marketPriceDisplayedColumns: string[] = ['fromDate', 'shareValue'];
  chargesDisplayedColumns: string[] = ['name', 'chargeCalculationType', 'amount', 'chargeTimeType'];

  constructor() { }

  ngOnInit() {
  }

}
