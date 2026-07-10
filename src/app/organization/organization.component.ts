/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/**
 * Organization component.
 */
@Component({
  standalone: false,
  selector: 'mifosx-products',
  templateUrl: './organization.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
