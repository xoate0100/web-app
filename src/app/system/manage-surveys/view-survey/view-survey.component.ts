/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

/** Custom Services */
import { SystemService } from 'app/system/system.service';

/**
 * View Survey Component.
 */
@Component({
  standalone: false,
  selector: 'mifosx-view-survey',
  templateUrl: './view-survey.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./view-survey.component.scss']
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
    this.route.data.subscribe((data: { survey: any }) => {
      this.surveyData = data.survey;
    });
  }

  ngOnInit(): void {
  }
}
