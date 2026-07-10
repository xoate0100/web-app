/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatTabNav, MatTabLink } from '@angular/material/tabs';
import { NgFor } from '@angular/common';

/**
 * View Office Component
 */
@Component({
    selector: 'mifosx-view-office',
    templateUrl: './view-office.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-office.component.scss'],
    imports: [LayoutAlignDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatCard, MatCardContent, MatTabNav, MatTabLink, RouterLinkActive, NgFor, RouterOutlet]
})
export class ViewOfficeComponent {

  /** Office datatables data */
  officeDatatables: any;

  /**
   * Fetches office datatables from `resolve`
   * @param {ActivatedRoute} route Activated Route
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.officeDatatables = data.officeDatatables;
    });
  }

}
