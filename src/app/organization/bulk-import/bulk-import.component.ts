/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { LayoutDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatNavList, MatListItem } from '@angular/material/list';
import { HasPermissionDirective } from '../../directives/has-permission/has-permission.directive';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatLine } from '@angular/material/grid-list';

/**
 * Bulk Import component.
 */
@Component({
    selector: 'mifosx-bulk-import',
    templateUrl: './bulk-import.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./bulk-import.component.scss'],
    imports: [MatCard, LayoutDirective, FlexDirective, MatNavList, HasPermissionDirective, MatListItem, RouterLink, MatIcon, FaIconComponent, MatLine]
})
export class BulkImportComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
