/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Content component.
 */
@Component({
    selector: 'mifosx-content',
    templateUrl: './content.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./content.component.scss'],
    imports: [RouterOutlet]
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
