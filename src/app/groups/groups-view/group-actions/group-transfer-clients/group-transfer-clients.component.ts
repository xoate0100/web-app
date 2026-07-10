/** Angular Imports */
import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

/** Custom Services */
import { GroupsService } from 'app/groups/groups.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { NgFor, NgIf, DatePipe } from '@angular/common';
import { MatOption, MatAutocompleteTrigger, MatAutocomplete } from '@angular/material/autocomplete';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';

/**
 * Group Transfer Clients component.
 */
@Component({
    selector: 'mifosx-group-transfer-clients',
    templateUrl: './group-transfer-clients.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./group-transfer-clients.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatSelect, NgFor, MatOption, NgIf, MatError, MatCheckbox, MatInput, MatAutocompleteTrigger, MatAutocomplete, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective, DatePipe]
})
export class GroupTransferClientsComponent implements OnInit, AfterViewInit {

  /** Transfer Clients form. */
  transferClientsForm: FormGroup;
  /** Group Data */
  groupData: any;
  /** Group data. */
  groupsData: any = [];
  /** Staff data. */
  staffData: any;
  /** Client Members. */
  clientMembers: any[] = [];

  /**
   * Retrieves the offices data from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation
   * @param {GroupsService} groupsService GroupsService.
   * @param {SettingsService} settingsService SettingsService
   */
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private groupsService: GroupsService,
              private settingsService: SettingsService) {
    this.route.data.subscribe((data: any) => {
      this.groupData = data.groupActionData;
      this.clientMembers = this.groupData.clientMembers;
    });
  }

  ngOnInit() {
    this.createTransferClientsForm();
  }

  /**
   * Subscribes to Groups search filter:
   */
  ngAfterViewInit() {
    this.transferClientsForm.get('destinationGroupId')!.valueChanges.subscribe( (value: string) => {
      if (value.length >= 2) {
        this.groupsService.getFilteredGroups('name', 'ASC', value, this.groupData.officeId)
          .subscribe( (data: any) => {
            this.groupsData = data;
          });
      }
    });
  }

  /**
   * Creates the transfer clients form.
   */
  createTransferClientsForm() {
    this.transferClientsForm = this.formBuilder.group({
      'clients': ['', Validators.required],
      'inheritDestinationGroupLoanOfficer': [false],
      'destinationGroupId': ['', Validators.required]
    });
  }

  /**
   * Displays Group name in form control input.
   * @param {any} group Group data.
   * @returns {string} Group name if valid otherwise undefined.
   */
  displayGroup(group: any): string {
    return group ? group.name : '';
  }

  /**
   * Submits the group form and transfers the clients,
   * if successful redirects to group.
   */
  submit() {
    const locale = this.settingsService.language.code;
    const data = {
      ...this.transferClientsForm.value,
      destinationGroupId: this.transferClientsForm.get('destinationGroupId')!.value.id,
      locale
    };
    this.groupsService.executeGroupCommand(this.groupData.id, 'transferClients', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
