/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/** Environment Configuration */
import { environment } from 'environments/environment';
import { LayoutDirective, FlexAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatDivider } from '@angular/material/divider';

/**
 *  Footer component.
 */
@Component({
    selector: 'mifosx-footer',
    templateUrl: './footer.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./footer.component.scss'],
    imports: [LayoutDirective, MatDivider, FlexAlignDirective]
})
export class FooterComponent implements OnInit {

  /** Mifos X version. */
  version: string = environment.version ?? '';

  constructor() { }

  ngOnInit() {
  }

}
