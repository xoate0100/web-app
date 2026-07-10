/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/**
 * Self service component.
 *
 * All components related to self service admin portal are routed here.
 */
@Component({
  standalone: false,
  selector: 'mifosx-self-service',
  templateUrl: './self-service.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./self-service.component.scss']
})
export class SelfServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
