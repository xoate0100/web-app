/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardContent } from '@angular/material/card';

/**
 * View Scheduler Job component.
 */
@Component({
    selector: 'mifosx-view-scheduler-job',
    templateUrl: './view-scheduler-job.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-scheduler-job.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, FaIconComponent, MatCard, MatCardContent, FlexDirective]
})
export class ViewSchedulerJobComponent {

  /** Job Data. */
  jobData: any;

  /**
   * Retrieves the selected job data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.jobData = data.selectedJob;
    });
  }

}
