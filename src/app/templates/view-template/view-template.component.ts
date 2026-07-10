/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

/** Custom Services */
import { TemplatesService } from '../templates.service';

/** Custom Components */
import { DeleteDialogComponent } from 'app/shared/delete-dialog/delete-dialog.component';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardContent } from '@angular/material/card';

/**
 * View Template Component.
 */
@Component({
    selector: 'mifosx-view-template',
    templateUrl: './view-template.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-template.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatCard, MatCardContent, FlexDirective]
})
export class ViewTemplateComponent {

  /** Template Data */
  templateData: any;

  /**
   * Retrieves the template data from `resolve`.
   * @param {TemplateService} templateService Accounting Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {MatDialog} dialog Dialog reference.
   */
  constructor(private route: ActivatedRoute,
              private templatesService: TemplatesService,
              private router: Router,
              private dialog: MatDialog) {
    this.route.data.subscribe((data: any) => {
      this.templateData = data.template;
    });
  }

  /**
   * Deletes the template and redirects to templates.
   */
  delete() {
    const deleteTemplateDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `template ${this.templateData.id}` }
    });
    deleteTemplateDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.templatesService.deleteTemplate(this.templateData.id)
          .subscribe(() => {
            this.router.navigate(['/templates']);
          });
      }
    });
  }

}
