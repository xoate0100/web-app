/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Office View General Tab
 */
@Component({
  standalone: false,
  selector: 'mifosx-general-tab',
  templateUrl: './general-tab.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./general-tab.component.scss']
})
export class GeneralTabComponent {

  /** Office data */
  officeData: any;

  /**
   * Fetches office data from `resolve`
   * @param {ActivatedRoute} route Activated Route
   */
  constructor(private route: ActivatedRoute) {
    this.route.parent.data.subscribe((data: { office: any }) => {
      this.officeData = data.office;
    });
  }

}
