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
export class DatatableTabComponent implements OnInit {
  clientDatatable: any;
  multiRowDatatableFlag: boolean;
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.clientDatatable = data.clientDatatable;
      this.multiRowDatatableFlag = this.clientDatatable.columnHeaders[0].columnName === 'id' ? true : false;
    });

  }

  ngOnInit() {
  }

}
