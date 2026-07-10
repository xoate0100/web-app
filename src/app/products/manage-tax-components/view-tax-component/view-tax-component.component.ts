/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardContent } from '@angular/material/card';
import { NgIf, DatePipe } from '@angular/common';

/**
 * View tax Component component.
 */
@Component({
    selector: 'mifosx-view-tax-component',
    templateUrl: './view-tax-component.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-tax-component.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatCard, MatCardContent, FlexDirective, NgIf, DatePipe]
})
export class ViewTaxComponentComponent implements OnInit {

  /** tax Component Data. */
  taxComponentData: any;

  /**
   * Retrieves the tax Component data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.taxComponentData = data.taxComponent;
    });
  }

  ngOnInit() {
  }

}
