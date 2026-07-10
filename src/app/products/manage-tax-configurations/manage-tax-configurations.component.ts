/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/**
 * Manage Tax Configurations component.
 */
@Component({
  standalone: false,
  selector: 'mifosx-manage-tax-configurations',
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './manage-tax-configurations.component.html',
})
export class ManageTaxConfigurationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
