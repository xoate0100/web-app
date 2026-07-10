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
 * View Employee Component.
 */
@Component({
    selector: 'mifosx-view-employee',
    templateUrl: './view-employee.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-employee.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatCard, MatCardContent, FlexDirective, NgIf, DatePipe]
})
export class ViewEmployeeComponent implements OnInit {

  /** Employee data. */
  employeeData: any;

  /**
   * Retrieves the employee data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.employeeData = data.employee;
    });
  }

  ngOnInit() {
  }

}
