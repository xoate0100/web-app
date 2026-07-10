/** Angular Imports. */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * View Tax Group component.
 */
@Component({
  standalone: false,
  selector: 'mifosx-view-tax-group',
  templateUrl: './view-tax-group.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./view-tax-group.component.scss']
})
export class ViewTaxGroupComponent {

  /** tax Group Data. */
  taxGroupData: any;

  /**
   * Retrieves the tax Group data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: { taxGroup: any }) => {
      this.taxGroupData = data.taxGroup;
    });
  }

}
