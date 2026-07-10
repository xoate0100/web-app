import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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

    /** Loan Datatable */
    loanDatatable: any;
    /** Multi Row Datatable Flag */
    multiRowDatatableFlag: boolean;

    /**
     * Fetches data table data from `resolve`
     * @param {ActivatedRoute} route Activated Route.
     */
    constructor(private route: ActivatedRoute) {
      this.route.data.subscribe((data: any) => {
        this.loanDatatable = data.loanDatatable;
        this.multiRowDatatableFlag = this.loanDatatable.columnHeaders[0].columnName === 'id' ? true : false;
      });
    }

}
