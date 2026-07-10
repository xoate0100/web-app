/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatList, MatListItem } from '@angular/material/list';
import { DatePipe } from '@angular/common';

/**
 * Office View General Tab
 */
@Component({
    selector: 'mifosx-general-tab',
    templateUrl: './general-tab.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./general-tab.component.scss'],
    imports: [MatList, MatListItem, DatePipe]
})
export class GeneralTabComponent {

  /** Office data */
  officeData: any;

  /**
   * Fetches office data from `resolve`
   * @param {ActivatedRoute} route Activated Route
   */
  constructor(private route: ActivatedRoute) {
    this.route.parent!.data.subscribe((data: any) => {
      this.officeData = data.office;
    });
  }

}
