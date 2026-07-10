/** Angular Imports */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterOutlet, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

/** Custom Components */
import { DeleteDialogComponent } from '../../../shared/delete-dialog/delete-dialog.component';

/** Custom Services */
import { ClientsService } from '../../clients.service';
import { LayoutDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription } from '@angular/material/expansion';
import { NgFor, DatePipe } from '@angular/common';
import { MatDivider } from '@angular/material/divider';

/**
 * Client Family Members Tab
 */
@Component({
    selector: 'mifosx-family-members-tab',
    templateUrl: './family-members-tab.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./family-members-tab.component.scss'],
    imports: [RouterOutlet, LayoutDirective, LayoutAlignDirective, MatButton, RouterLink, FaIconComponent, MatAccordion, NgFor, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatDivider, DatePipe]
})
export class FamilyMembersTabComponent {

  /** Client Family Members */
  clientFamilyMembers: any;

  /**
   * @param {ActivatedRoute} route Activated Route
   * @param {ClientsService} clientsService Clients Service
   * @param {MatDialog }dialog Mat Dialog
   */
  constructor(private route: ActivatedRoute,
              private clientsService: ClientsService,
              public dialog: MatDialog) {
    this.route.data.subscribe((data: any) => {
      this.clientFamilyMembers = data.clientFamilyMembers;
    });
  }

  /**
   * Deletes the family member and redirects to family members tab.
   */
  deleteFamilyMember(clientId: string, id: string, name: string, index: number) {
    const deleteFamilyMemberDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `Family member id:${id} name : ${name} ${index}` }
    });
    deleteFamilyMemberDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.clientsService.deleteFamilyMember(clientId, id)
          .subscribe(() => {
            this.clientFamilyMembers.splice(index, 1);
          });
      }
    });
  }

}
