import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { MultiRowComponent } from './multi-row/multi-row.component';
import { SingleRowComponent } from './single-row/single-row.component';

@Component({
    selector: 'mifosx-datatable-tab',
    templateUrl: './datatable-tab.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./datatable-tab.component.scss'],
    imports: [NgIf, MultiRowComponent, SingleRowComponent]
})
export class DatatableTabComponent {

    /** Center Datatable */
    centerDatatable: any;
    /** Multi Row Datatable Flag */
    multiRowDatatableFlag: boolean;

    /**
     * Fetches data table data from `resolve`
     * @param {ActivatedRoute} route Activated Route.
     */
    constructor(private route: ActivatedRoute) {
      this.route.data.subscribe((data: any) => {
        this.centerDatatable = data.centerDatatable;
        this.multiRowDatatableFlag = this.centerDatatable.columnHeaders[0].columnName === 'id' ? true : false;
      });
    }

}
