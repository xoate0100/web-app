/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { MultiRowComponent } from './multi-row/multi-row.component';
import { SingleRowComponent } from './single-row/single-row.component';

/**
 * Savings Datatable Tabs Component
 */
@Component({
    selector: 'mifosx-datatable-tabs',
    templateUrl: './datatable-tabs.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./datatable-tabs.component.scss'],
    imports: [NgIf, MultiRowComponent, SingleRowComponent]
})
export class DatatableTabsComponent {

  /** Savings Datatable */
  savingsDatatable: any;
  /** Multi Row Datatable Flag */
  multiRowDatatableFlag: boolean;

  /**
   * Fetches Savings and datatables data from `resolve`
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.savingsDatatable = data.savingsDatatable;
      this.multiRowDatatableFlag = this.savingsDatatable.columnHeaders[0].columnName === 'id' ? true : false;
    });
  }

}
