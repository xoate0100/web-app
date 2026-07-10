/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { MultiRowComponent } from './multi-row/multi-row.component';
import { SingleRowComponent } from './single-row/single-row.component';

/**
 * Offices Datatable Tabs Component
 */
@Component({
    selector: 'mifosx-datatable-tabs',
    templateUrl: './datatable-tabs.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./datatable-tabs.component.scss'],
    imports: [NgIf, MultiRowComponent, SingleRowComponent]
})
export class DatatableTabsComponent {

  /** Office Datatable */
  officeDatatable: any;
  /** Multi Row Datatable Flag */
  multiRowDatatableFlag: boolean;

  /**
   * Fetches data table data from `resolve`
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.officeDatatable = data.officeDatatable;
      this.multiRowDatatableFlag = this.officeDatatable.columnHeaders[0].columnName === 'id' ? true : false;
    });
  }

}
