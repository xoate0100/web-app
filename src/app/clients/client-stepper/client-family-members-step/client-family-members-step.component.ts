/** Angular Imports */
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

/** Custom Components */
import { DeleteDialogComponent } from 'app/shared/delete-dialog/delete-dialog.component';
import { ClientFamilyMemberDialogComponent } from './client-family-member-dialog/client-family-member-dialog.component';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription } from '@angular/material/expansion';
import { NgFor, DatePipe } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { FindPipe } from '../../../pipes/find.pipe';

/**
 * Client Family Members Step
 */
@Component({
    selector: 'mifosx-client-family-members-step',
    templateUrl: './client-family-members-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./client-family-members-step.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, MatButton, FaIconComponent, MatAccordion, NgFor, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatDivider, LayoutGapDirective, MatStepperPrevious, MatStepperNext, DatePipe, FindPipe]
})
export class ClientFamilyMembersStepComponent {

  /** Cient Template */
  @Input() clientTemplate: any;
  /** Client Family Members */
  clientFamilyMembers: any[] = [];

  /**
   * @param {MatDialog} dialog Mat Dialog
   */
  constructor(public dialog: MatDialog) { }

  /**
   * Adds a family member.
   */
  addFamilyMember() {
    const addFamilyMemberDialogRef = this.dialog.open(ClientFamilyMemberDialogComponent, {
      data: {
        context: 'Add',
        options: this.clientTemplate.familyMemberOptions,
      },
      width: '50rem'
    });
    addFamilyMemberDialogRef.afterClosed().subscribe((response: any) => {
      if (response.member) {
        this.clientFamilyMembers.push(response.member);
      }
    });
  }

  /**
   * Edits the family member.
   * @param {any} member Family Member
   * @param {any} index Tree Index
   */
  editFamilyMember(member: any, index: any) {
    const addFamilyMemberDialogRef = this.dialog.open(ClientFamilyMemberDialogComponent, {
      data: {
        context: 'Edit',
        member: member,
        options: this.clientTemplate.familyMemberOptions,
      },
      width: '50rem'
    });
    addFamilyMemberDialogRef.afterClosed().subscribe((response: any) => {
      if (response.member) {
        this.clientFamilyMembers.splice(index, 1, response.member);
      }
    });
  }

  /**
   * Deletes the family member
   */
  deleteFamilyMember(name: string, index: number) {
    const deleteFamilyMemberDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `Family member name : ${name} ${index}` }
    });
    deleteFamilyMemberDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.clientFamilyMembers.splice(index, 1);
      }
    });
  }

  /**
   * Returns the array of client family members.
   */
  get familyMembers() {
    return { familyMembers: this.clientFamilyMembers };
  }

}
