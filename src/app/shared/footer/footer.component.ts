/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/** Environment Configuration */
import { environment } from 'environments/environment';

/**
 *  Footer component.
 */
@Component({
  standalone: false,
  selector: 'mifosx-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  /** Mifos X version. */
  version: string = environment.version;

  constructor() { }

  ngOnInit() {
  }

}
