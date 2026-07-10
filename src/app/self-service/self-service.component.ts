/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Self service component.
 *
 * All components related to self service admin portal are routed here.
 */
@Component({
    selector: 'mifosx-self-service',
    templateUrl: './self-service.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./self-service.component.scss'],
    imports: [RouterOutlet]
})
export class SelfServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
