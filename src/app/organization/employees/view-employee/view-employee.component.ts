/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * View Employee Component.
 */
@Component({
  standalone: false,
  selector: 'mifosx-view-employee',
  templateUrl: './view-employee.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  /** Employee data. */
  employeeData: any;

  /**
   * Retrieves the employee data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: { employee: any }) => {
      this.employeeData = data.employee;
    });
  }

  ngOnInit() {
  }

}
