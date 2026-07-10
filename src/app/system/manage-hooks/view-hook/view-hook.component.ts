/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

/** Custom Components */
import { DeleteDialogComponent } from '../../../shared/delete-dialog/delete-dialog.component';

/** Custom Services */
import { SystemService } from '../../system.service';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardContent } from '@angular/material/card';
import { NgFor, NgIf, DatePipe } from '@angular/common';
import { MatLabel } from '@angular/material/form-field';

/**
 * View Hook Component.
 */
@Component({
    selector: 'mifosx-view-hook',
    templateUrl: './view-hook.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-hook.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatCard, MatCardContent, FlexDirective, NgFor, MatLabel, NgIf, DatePipe]
})
export class ViewHookComponent implements OnInit {

  /** Hook Data. */
  hookData: any;

  /**
   * Retrieves the hook data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   * @param {MatDialog} dialog Dialog Reference.
   * @param {SystemService} systemService System Service.
   * @param {Router} router Router for navigation.
   */
  constructor(private route: ActivatedRoute,
              private dialog: MatDialog,
              private systemService: SystemService,
              private router: Router) {
    this.route.data.subscribe((data: any) => {
      this.hookData = data.hook;
    });
  }

  ngOnInit() {
  }

  /**
   * Deletes the current hook.
   */
  delete() {
    const deleteHookDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `hook ${this.hookData.id}` }
    });
    deleteHookDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.systemService.deleteHook(this.hookData.id)
          .subscribe(() => {
            this.router.navigate(['/system/hooks']);
          });
      }
    });
  }

}
