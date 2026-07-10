/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

/** Custom Services */
import { SystemService } from 'app/system/system.service';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { NgFor, TitleCasePipe } from '@angular/common';

/**
 * View Survey Component.
 */
@Component({
    selector: 'mifosx-view-survey',
    templateUrl: './view-survey.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-survey.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, FaIconComponent, MatCard, MatCardHeader, MatCardTitle, MatDivider, MatCardContent, FlexDirective, NgFor, TitleCasePipe]
})
export class ViewSurveyComponent implements OnInit {

  /** Survey Data */
  surveyData: any;

  /** Columns shown in individual survey table */
  displayedColumns: string[] = [ 'text', 'value'];

  /**
   * Retrieves the survey data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   * @param {SystemService} systemService System Service.
   * @param {MatDialog} dialog Dialog Reference.
   * @param {Router} router Router for navigation.
   */
  constructor(private route: ActivatedRoute,
              private systemService: SystemService,
              private dialog: MatDialog,
              private router: Router) {
    this.route.data.subscribe((data: any) => {
      this.surveyData = data.survey;
    });
  }

  ngOnInit(): void {
  }
}
