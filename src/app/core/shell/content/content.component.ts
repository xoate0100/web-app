/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/**
 * Content component.
 */
@Component({
  standalone: false,
  selector: 'mifosx-content',
  templateUrl: './content.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
