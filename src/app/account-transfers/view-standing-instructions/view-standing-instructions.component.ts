/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexFillDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { HasPermissionDirective } from '../../directives/has-permission/has-permission.directive';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { NgIf, DatePipe } from '@angular/common';

@Component({
    selector: 'mifosx-view-standing-instructions',
    templateUrl: './view-standing-instructions.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-standing-instructions.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, FaIconComponent, HasPermissionDirective, MatCard, MatCardContent, FlexFillDirective, MatDivider, FlexDirective, NgIf, DatePipe]
})
export class ViewStandingInstructionsComponent {

  /** Standing Instructions Data */
  standingInstructionsData: any;
  /** Allow Client Edit */
  allowclientedit = false;

  /**
   * Retrieves the standing instructions data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.standingInstructionsData = data.standingInstructionsData;
      if (this.standingInstructionsData.fromClient.id === this.standingInstructionsData.toClient.id) {
        this.allowclientedit = false;
      }
    });
  }

}
