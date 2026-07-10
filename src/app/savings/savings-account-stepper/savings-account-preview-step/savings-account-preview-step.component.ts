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
 * Savings account preview step
 */
@Component({
    selector: 'mifosx-savings-account-preview-step',
    templateUrl: './savings-account-preview-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./savings-account-preview-step.component.scss'],
    imports: [LayoutDirective, FlexFillDirective, MatDivider, FlexDirective, NgIf, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, LayoutAlignDirective, LayoutGapDirective, MatButton, MatStepperPrevious, FaIconComponent, RouterLink, DatePipe, FindPipe]
})
export class SavingsAccountPreviewStepComponent {

  /** Savings Account Product Template */
  @Input() savingsAccountProductTemplate: any;
  /** Savings Account Template */
  @Input() savingsAccountTemplate: any;
  /** Savings Account Terms Form */
  @Input() savingsAccountTermsForm: any;
  /** Savings Account */
  @Input() savingsAccount: any;

  /** Display columns for charges table */
  chargesDisplayedColumns: string[] = ['name', 'chargeCalculationType', 'amount', 'chargeTimeType', 'date', 'repaymentsEvery'];

  /** Form submission event */
  @Output() submit = new EventEmitter();

  constructor() { }

}
