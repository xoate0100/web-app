/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { GroupsService } from '../../groups.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';

/**
 * Groups Add Role Component
 */
@Component({
    selector: 'mifosx-add-role',
    templateUrl: './add-role.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./add-role.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatSelect, NgFor, MatOption, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class AddRoleComponent implements OnInit {

  /** Groups Add Role Form */
  groupsAddRoleForm: FormGroup;
  /** Client Member Data */
  clientMemberData: any;
  /** Role Data */
  roleData: any;
  /** Groups Account and Template Data */
  groupAndTemplateData: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {GroupsService} groupsService Groups Service
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   */
  constructor(private formBuilder: FormBuilder,
              private groupsService: GroupsService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.data.subscribe((data: any) => {
      this.groupAndTemplateData = data.groupAndTemplateData;
    });
  }

  ngOnInit() {
    this.clientMemberData = this.groupAndTemplateData.activeClientMembers;
    this.roleData = this.groupAndTemplateData.availableRoles;
    this.createGroupsAddRoleForm();
  }

  /**
   * Creates the add group role form.
   */
  createGroupsAddRoleForm() {
    this.groupsAddRoleForm = this.formBuilder.group({
      'clientId': ['', Validators.required],
      'role': ['', Validators.required]
    });
  }

  /**
   * Submits the form and assigns the group role.
   */
  submit() {
    this.groupsService.executeGroupCommand(this.groupAndTemplateData.id, 'assignRole', this.groupsAddRoleForm.value).subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

}
