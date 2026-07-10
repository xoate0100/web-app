/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * View tax Component component.
 */
@Component({
  standalone: false,
  selector: 'mifosx-view-tax-component',
  templateUrl: './view-tax-component.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./view-tax-component.component.scss']
})
export class ViewTaxComponentComponent implements OnInit {

  /** tax Component Data. */
  taxComponentData: any;

  /**
   * Retrieves the tax Component data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: { taxComponent: any }) => {
      this.taxComponentData = data.taxComponent;
    });
  }

  ngOnInit() {
  }

}
