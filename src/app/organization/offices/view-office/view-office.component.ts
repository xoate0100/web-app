/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * View Office Component
 */
@Component({
  standalone: false,
  selector: 'mifosx-view-office',
  templateUrl: './view-office.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./view-office.component.scss']
})
export class ViewOfficeComponent {

  /** Office datatables data */
  officeDatatables: any;

  /**
   * Fetches office datatables from `resolve`
   * @param {ActivatedRoute} route Activated Route
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: { officeDatatables: any }) => {
      this.officeDatatables = data.officeDatatables;
    });
  }

}
