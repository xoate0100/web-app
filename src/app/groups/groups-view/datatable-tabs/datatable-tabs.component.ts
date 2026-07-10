/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { MultiRowComponent } from './multi-row/multi-row.component';
import { SingleRowComponent } from './single-row/single-row.component';

/**
 * Groups Datatable Tabs Component
 */
@Component({
    selector: 'mifosx-datatable-tabs',
    templateUrl: './datatable-tabs.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./datatable-tabs.component.scss'],
    imports: [NgIf, MultiRowComponent, SingleRowComponent]
})
export class DatatableTabsComponent {

  /** Group Datatable */
  groupDatatable: any;
  /** Multi Row Datatable Flag */
  multiRowDatatableFlag: boolean;

  /**
   * Fetches data table data from `resolve`
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.groupDatatable = data.groupDatatable;
      this.multiRowDatatableFlag = this.groupDatatable.columnHeaders[0].columnName === 'id' ? true : false;
    });
  }

}
