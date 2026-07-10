/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { LayoutDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatNavList, MatListItem } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatLine } from '@angular/material/grid-list';

/**
 * External Services component.
 */
@Component({
    selector: 'mifosx-external-services',
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './external-services.component.html',
    imports: [
        MatCard,
        LayoutDirective,
        FlexDirective,
        MatNavList,
        MatListItem,
        RouterLink,
        MatIcon,
        FaIconComponent,
        MatLine,
    ],
})
export class ExternalServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
