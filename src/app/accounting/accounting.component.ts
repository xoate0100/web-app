/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/**
 * Accounting component.
 */
@Component({
  standalone: false,
  selector: 'mifosx-accounting',
  templateUrl: './accounting.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./accounting.component.scss']
})
export class AccountingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
