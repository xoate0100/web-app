/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/**
 * External Services component.
 */
@Component({
  standalone: false,
  selector: 'mifosx-external-services',
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './external-services.component.html',
})
export class ExternalServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
