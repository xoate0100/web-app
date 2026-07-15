/** Angular Imports */
import { Component, ChangeDetectionStrategy, SecurityContext } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
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
  /** Sanitized HTML body for display (SEC-04). */
  safeTemplateHtml = '';

  /**
   * Retrieves the template data from `resolve`.
   */
  constructor(private route: ActivatedRoute,
              private templatesService: TemplatesService,
              private router: Router,
              private dialog: MatDialog,
              private sanitizer: DomSanitizer) {
    this.route.data.subscribe((data: any) => {
      this.templateData = data.template;
      this.safeTemplateHtml = this.sanitizer.sanitize(SecurityContext.HTML, this.templateData?.text ?? '') ?? '';
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
