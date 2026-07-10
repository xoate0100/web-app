/** Angular Imports */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { LayoutDirective, FlexFillDirective, FlexDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatDivider } from '@angular/material/divider';
import { NgIf, DatePipe } from '@angular/common';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { MatButton } from '@angular/material/button';
import { MatStepperPrevious } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { FindPipe } from '../../../pipes/find.pipe';

/**
 * Shares account preview step
 */
@Component({
    selector: 'mifosx-shares-account-preview-step',
    templateUrl: './shares-account-preview-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./shares-account-preview-step.component.scss'],
    imports: [LayoutDirective, FlexFillDirective, MatDivider, FlexDirective, NgIf, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, LayoutAlignDirective, LayoutGapDirective, MatButton, MatStepperPrevious, FaIconComponent, RouterLink, DatePipe, FindPipe]
})
export class SharesAccountPreviewStepComponent {

  /** Shares Account Product Template */
  @Input() sharesAccountProductTemplate: any;
  /** Shares Account Template */
  @Input() sharesAccountTemplate: any;
  /** Shares Account Terms Form */
  @Input() sharesAccountTermsForm: any;
  /** Shares Account */
  @Input() sharesAccount: any;

  /** Display columns for charges table. */
  chargesDisplayedColumns: string[] = ['name', 'chargeCalculationType', 'amount', 'chargeTimeType'];

  /** Form submission event */
  @Output() submit = new EventEmitter();

  constructor() { }

}
