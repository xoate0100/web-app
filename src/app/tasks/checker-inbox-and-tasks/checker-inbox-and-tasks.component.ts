/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatTabNav, MatTabLink } from '@angular/material/tabs';
import { HasPermissionDirective } from '../../directives/has-permission/has-permission.directive';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';

/**
 * Checker Inbox and Tasks Component
 */
@Component({
    selector: 'mifosx-checker-inbox-and-tasks',
    templateUrl: './checker-inbox-and-tasks.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./checker-inbox-and-tasks.component.scss'],
    imports: [MatCard, MatCardContent, MatTabNav, HasPermissionDirective, MatTabLink, RouterLinkActive, RouterLink, RouterOutlet]
})
export class CheckerInboxAndTasksComponent {

  constructor() { }

}
