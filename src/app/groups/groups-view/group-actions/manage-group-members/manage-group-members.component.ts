/** Angular Imports */
import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

/** Custom Dialogs */
import { DeleteDialogComponent } from 'app/shared/delete-dialog/delete-dialog.component';

/** Custom Services */
import { GroupsService } from 'app/groups/groups.service';
import { ClientsService } from 'app/clients/clients.service';
import { MatDialog } from '@angular/material/dialog';
import { LayoutDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatCard } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatAutocompleteTrigger, MatAutocomplete, MatOption } from '@angular/material/autocomplete';
import { NgFor, NgIf } from '@angular/common';
import { MatIconButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatListSubheaderCssMatStyler, MatNavList } from '@angular/material/list';
import { MatLine } from '@angular/material/grid-list';

/**
 * Manage Group Members Component
 */
@Component({
    selector: 'mifosx-manage-group-members',
    templateUrl: './manage-group-members.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./manage-group-members.component.scss'],
    imports: [LayoutDirective, LayoutGapDirective, MatCard, FlexDirective, MatFormField, MatLabel, MatInput, ReactiveFormsModule, MatAutocompleteTrigger, MatAutocomplete, NgFor, MatOption, MatIconButton, FaIconComponent, MatListSubheaderCssMatStyler, NgIf, MatNavList, MatLine]
})
export class ManageGroupMembersComponent implements AfterViewInit {

  /** Group Data */
  groupData: any;
  /** Client data. */
  clientsData: any = [];
  /** Client Members. */
  clientMembers: any[] = [];
  /** Client Choice. */
  clientChoice = new FormControl<any>('');

  /**
   * Fetches group action data from `resolve`
   * @param {ActivatedRoute} route Activated Route
   * @param {GroupsService} groupsService Groups Service
   * @param {ClientsService} clientsService Clients Service
   * @param {MatDialog} dialog Mat Dialog
   */
  constructor(private route: ActivatedRoute,
              private groupsService: GroupsService,
              private clientsService: ClientsService,
              public dialog: MatDialog) {
    this.route.data.subscribe((data: any) => {
      this.groupData = data.groupActionData;
      this.clientMembers = data.groupActionData.clientMembers;
    });
  }


  /**
   * Subscribes to Clients search filter:
   */
  ngAfterViewInit() {
    this.clientChoice.valueChanges.subscribe( (value: string) => {
      if (value.length >= 2) {
        this.clientsService.getFilteredClients('displayName', 'ASC', true, value, this.groupData.officeId)
          .subscribe((data: any) => {
            this.clientsData = data.pageItems;
          });
      }
    });
  }

  /**
   * Add client.
   */
  addClient() {
    if (!this.clientMembers.includes(this.clientChoice.value)) {
      this.groupsService.executeGroupCommand(this.groupData.id, 'associateClients', {clientMembers: [this.clientChoice.value.id]})
        .subscribe(() => { this.clientMembers.push(this.clientChoice.value); });
    }
  }

  /**
   * Remove client.
   * @param {number} index Client's array index.
   * @param {any} client Client
   */
  removeClient(index: number, client: any) {
    const removeMemberDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `client member: ${client.displayName}` }
    });
    removeMemberDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.groupsService.executeGroupCommand(this.groupData.id, 'disassociateClients', {clientMembers: [client.id]})
          .subscribe(() => { this.clientMembers.splice(index, 1); });
      }
    });
  }

  /**
   * Displays Client name in form control input.
   * @param {any} client Client data.
   * @returns {string} Client name if valid otherwise undefined.
   */
  displayClient(client: any): string {
    return client ? client.displayName : '';
  }

}
