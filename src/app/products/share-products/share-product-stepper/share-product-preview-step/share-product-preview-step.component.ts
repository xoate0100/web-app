import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'mifosx-share-product-preview-step',
  templateUrl: './share-product-preview-step.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./share-product-preview-step.component.scss']
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
