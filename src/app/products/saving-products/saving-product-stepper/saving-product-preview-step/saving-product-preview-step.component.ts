import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'mifosx-saving-product-preview-step',
  templateUrl: './saving-product-preview-step.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./saving-product-preview-step.component.scss']
})
export class SavingProductPreviewStepComponent implements OnInit {

  @Input() savingProductsTemplate: any;
  @Input() accountingRuleData: any;
  @Input() savingProduct: any;
  @Input() taskPermission: string;
  @Output() submit = new EventEmitter();

  chargesDisplayedColumns: string[] = ['name', 'chargeCalculationType', 'amount', 'chargeTimeType'];
  paymentFundSourceDisplayedColumns: string[] = ['paymentTypeId', 'fundSourceAccountId'];
  feesPenaltyIncomeDisplayedColumns: string[] = ['chargeId', 'incomeAccountId'];

  constructor() { }

  ngOnInit() {
  }

}
