/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

/** Custom Dialogs */
import { UnassignStaffDialogComponent } from './custom-dialogs/unassign-staff-dialog/unassign-staff-dialog.component';
import { DeleteDialogComponent } from 'app/shared/delete-dialog/delete-dialog.component';

/** Custom Services */
import { GroupsService } from '../groups.service';
import { MatCard, MatCardHeader, MatCardTitleGroup, MatCardMdImage, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardContent } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { NgClass, NgIf, NgFor, LowerCasePipe, DatePipe } from '@angular/common';
import { ClassDirective } from '@ngbracket/ngx-layout/extended';
import { MatTooltip } from '@angular/material/tooltip';
import { HasPermissionDirective } from '../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { MatTabNav, MatTabLink } from '@angular/material/tabs';
import { StatusLookupPipe } from '../../pipes/status-lookup.pipe';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

/**
 * Groups View Component.
 */
@Component({
    selector: 'mifosx-groups-view',
    templateUrl: './groups-view.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./groups-view.component.scss'],
    imports: [FaIconComponent, MatCard, MatCardHeader, LayoutDirective, MatCardTitleGroup, MatCardMdImage, MatCardTitle, NgClass, ClassDirective, MatTooltip, MatCardSubtitle, NgIf, LayoutAlignDirective, MatCardActions, HasPermissionDirective, MatButton, MatMenuTrigger, MatMenu, MatMenuItem, RouterLink, MatCardContent, MatTabNav, MatTabLink, RouterLinkActive, NgFor, RouterOutlet, LowerCasePipe, DatePipe, StatusLookupPipe]
})
export class GroupsViewComponent {

  /** Group view data */
  groupViewData: any;
  /** Group datatables data */
  groupDatatables: any;

  /**
   * Fetches group data from `resolve`
   * @param {ActivatedRoute} route Activated Route
   * @param {GroupsService} groupsService Groups Service
   * @param {Router} router Router
   * @param {MatDialog} dialog Dialog
   */
  constructor(private route: ActivatedRoute,
              private groupsService: GroupsService,
              private router: Router,
              public dialog: MatDialog) {
    this.route.data.subscribe((data: any) => {
      this.groupViewData = data.groupViewData;
      this.groupDatatables = data.groupDatatables;
    });
  }

  /**
   * Performs action button/option action.
   * @param {string} name action name.
   */
  doAction(name: string) {
    switch (name) {
      case 'Assign Staff':
      case 'Close':
      case 'Activate':
      case 'Attach Meeting':
      case 'Attendance':
      case 'Manage Members':
      case 'Transfer Clients':
        this.router.navigate([`actions/${name}`], { relativeTo: this.route });
        break;
      case 'Edit Meeting':
        const queryParams: any = { calendarId: this.groupViewData.collectionMeetingCalendar.id };
        this.router.navigate([`actions/${name}`], { relativeTo: this.route, queryParams: queryParams });
        break;
      case 'Edit':
        this.router.navigate(['edit'], { relativeTo: this.route });
        break;
      case 'Unassign Staff':
        this.unassignStaff();
        break;
      case 'Delete':
        this.deleteGroup();
        break;
    }
  }

  /**
   * Checks if meeting is editable.
   */
  get editMeeting() {
    if (this.groupViewData.collectionMeetingCalendar) {
      const entityType = this.groupViewData.collectionMeetingCalendar.entityType.value;
      if (entityType === 'GROUPS' && this.groupViewData.hierarchy === '.' + this.groupViewData.id + '.' ) {
        return true;
      }
    }
    return false;
  }

  /**
   * Refetches data for the component
   * TODO: Replace by a custom reload component instead of hard-coded back-routing.
   */
  reload() {
    const url: string = this.router.url;
    this.router.navigateByUrl(`/groups`, {skipLocationChange: true})
      .then(() => this.router.navigate([url]));
  }

  /**
   * Unassign's the group's staff.
   */
  private unassignStaff() {
    const unAssignStaffDialogRef = this.dialog.open(UnassignStaffDialogComponent);
    unAssignStaffDialogRef.afterClosed().subscribe((response: { confirm: any }) => {
      if (response.confirm) {
        this.groupsService.executeGroupCommand(this.groupViewData.id, 'unassignStaff', { staffId: this.groupViewData.staffId })
          .subscribe(() => {
            this.reload();
          });
      }
    });
  }

  /**
   * Deletes the group
   */
  private deleteGroup() {
    const deleteGroupDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `group with id: ${this.groupViewData.id}` }
    });
    deleteGroupDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.groupsService.deleteGroup(this.groupViewData.id).subscribe(() => {
          this.router.navigate(['/groups'], { relativeTo: this.route });
        });
      }
    });
  }

}
