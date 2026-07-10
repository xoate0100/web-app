
/** Angular Imports */
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'mifosx-office-navigation',
  templateUrl: './office-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./office-navigation.component.scss']
})
export class OfficeNavigationComponent implements OnInit {

  @Input() officeData: any;
  @Input() employeeData: any;

  constructor() { }

  ngOnInit() {
  }

}
