/** Angular Imports */
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'mifosx-staff-navigation',
  templateUrl: './staff-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./staff-navigation.component.scss']
})
export class StaffNavigationComponent implements OnInit {

  @Input() employeeData: any;
  @Input() centerData: any;

  constructor() { }

  ngOnInit() {
  }

}
