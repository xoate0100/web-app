/** Angular Imports. */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardContent } from '@angular/material/card';
import { NgFor, NgIf, DatePipe } from '@angular/common';

/**
 * View Tax Group component.
 */
@Component({
    selector: 'mifosx-view-tax-group',
    templateUrl: './view-tax-group.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-tax-group.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatCard, MatCardContent, FlexDirective, NgFor, NgIf, DatePipe]
})
export class ViewTaxGroupComponent {

  /** tax Group Data. */
  taxGroupData: any;

  /**
   * Retrieves the tax Group data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.taxGroupData = data.taxGroup;
    });
  }

}
