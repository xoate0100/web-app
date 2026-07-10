/** Angular Imports  */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SystemService } from '../../system.service';
import * as _ from 'lodash';

/** Custom Components */
import { DeleteDialogComponent } from '../../../shared/delete-dialog/delete-dialog.component';
import { DisableDialogComponent } from '../../../shared/disable-dialog/disable-dialog.component';
import { EnableDialogComponent } from '../../../shared/enable-dialog/enable-dialog.component';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatList, MatListItem } from '@angular/material/list';
import { ClassDirective } from '@ngbracket/ngx-layout/extended';
import { MatDivider } from '@angular/material/divider';
import { MatCheckbox } from '@angular/material/checkbox';

/**
 * View Role and Permissions Component
 */
@Component({
    selector: 'mifosx-view-role',
    templateUrl: './view-role.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-role.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatButton, FaIconComponent, NgIf, MatCard, MatCardContent, FlexDirective, MatList, NgFor, MatListItem, NgClass, ClassDirective, MatDivider, ReactiveFormsModule, MatCheckbox, MatCardActions]
})
export class ViewRoleComponent implements OnInit {

  /** Role Permissions Data */
  rolePermissionService: any;
  /** Stores the current grouping */
  currentGrouping: string;
  /** Stores the previous grouping */
  previousGrouping = '';
  /** Stores Grouping Data */
  groupings: string[] = [];
  /** Stores the selected role */
  selectedItem = '';
  /** Checks if its disabled */
  isDisabled: Boolean = true;
  /** Checks if there is any change in data */
  checkboxesChanged: Boolean = false;
  /** Stores backup values */
  bValuesOnly: string[] = [];
  /** Role ID */
  roleId: any;
  /** Creates permission form  */
  formGroup: FormGroup;
  /** Creates Backup form */
  backupform: FormGroup;
  /** Temporarily stores Permission data */
  tempPermissionUIData: Record<string, { permissions: { code: string; id: string; selected?: boolean }[] }> = {};
  /** Stores permissions */
  permissions: {
    permissions: { code: string, id: string, selected?: boolean }[]
  };

  /**
   * Retrieves the roledetails data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   * @param {SystemService} systemService System Service.
   * @param {Router} router Router for navigation.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {MatDialog} dialog Shared Dialog Boxes.
   */
  constructor(private route: ActivatedRoute,
    private systemService: SystemService,
    private router: Router,
    private formBuilder: FormBuilder,
    public dialog: MatDialog) {
    this.route.data.subscribe((data: any) => {
      this.rolePermissionService = data.roledetails;
    });
  }

  /**
   * Groups all the data on init
   */
  ngOnInit() {
    this.permissions = {
      permissions: []
    };
    this.createForm();
    this.groupRules();
    this.selectedItem = 'special';
    this.showPermissions('special');
    this.route.params.subscribe((routeParams: any) => {
      this.roleId = routeParams.id;
    });
  }

  /**
   * creates the form to display and edit permissions
   */
  createForm() {
    this.formGroup = this.formBuilder.group({
      roster: this.formBuilder.array(this.rolePermissionService.permissionUsageData.map((elem: any) => this.createMemberGroup(elem)))
    });

  }

  createMemberGroup(permission: any): FormGroup {
    return this.formBuilder.group({
      ...permission,
      ...{
        code: [permission.code, Validators.required],
        selected: [{ value: permission.selected, disabled: true }, Validators.required]
      }
    });
  }

  /**
   * Groups the permissions based on rules
   */
  groupRules() {
    this.tempPermissionUIData = {};
    for (const i in this.rolePermissionService.permissionUsageData) {
      if (this.rolePermissionService.permissionUsageData[i]) {
        if (this.rolePermissionService.permissionUsageData[i].grouping !== this.currentGrouping) {
          this.currentGrouping = this.rolePermissionService.permissionUsageData[i].grouping;
          this.groupings.push(this.currentGrouping);
          this.tempPermissionUIData[this.currentGrouping] = { permissions: [] };
        }
        const temp = { code: this.rolePermissionService.permissionUsageData[i].code, id: i, selected: this.rolePermissionService.permissionUsageData[i].selected };
        this.tempPermissionUIData[this.currentGrouping].permissions.push(temp);
      }
    }
  }

  /**
   * Displays the permission for selected role
   * @param grouping Selected Role
   */
  showPermissions(grouping: string) {
    this.permissions = this.tempPermissionUIData[grouping];
    this.selectedItem = grouping;
    this.previousGrouping = grouping;
  }

  /**
   * Formats the Role Name
   * @param string String
   */
  formatName(string: any) {
    if (string.indexOf('portfolio_') > -1) {
      string = string.replace('portfolio_', '');
    }
    if (string.indexOf('transaction_') > -1) {
      const temp = string.split('_');
      string = temp[1] + ' ' + temp[0].charAt(0).toUpperCase() + temp[0].slice(1) + 's';
    }
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
  }

  /**
   * Formats the permission from permission code
   * @param name String
   */
  permissionName(name: any) {
    name = name || '';
    // replace '_' with ' '
    name = name.replace(/_/g, ' ');
    // for reorts replace read with view
    if (this.previousGrouping === 'report') {
      name = name.replace(/READ/g, 'View');
    }
    return name;
  }

  /**
   * Backups the valued
   */
  backupCheckValues() {
    this.backupform = _.cloneDeep(this.formGroup) as FormGroup;
  }

  /**
   * Restores the checkboxes to previous data on clicking cancel
   */
  restoreCheckboxes() {
    this.formGroup = _.cloneDeep(this.backupform) as FormGroup;
  }

  isRoleEnable(value: any) {
    return value;
  }

  editRoles() {
    this.isDisabled = false;
    this.formGroup.controls.roster.enable();
  }

  /**
   * Cancel the changes
   */
  cancel() {
    this.isDisabled = true;
    this.formGroup.controls.roster.disable();
  }

  /**
   * Submits the modified permissions
   */
  submit() {
    const value = this.formGroup.get('roster')!.value;
    const data: Record<string, any> = {};
    const permissionData = {
      permissions: {}
    };
    for (let i = 0; i < value.length; i++ ) {
      data[value[i].code] = value[i].selected;
    }
    permissionData.permissions = data;
    this.formGroup.controls.roster.disable();
    this.checkboxesChanged = false;
    this.isDisabled = true;
    this.systemService.updateRolePermission(this.roleId, permissionData).subscribe((response: any) => {
      console.log('response: ', response);
    });
  }

  /**
   * Selects all the permission of a particular role
   */
  selectAll() {
    for (let i = 0; i < this.permissions.permissions.length; i++) {
      (this.formGroup.controls.roster as FormArray).controls[(this.permissions.permissions[i].id as any)].patchValue({
        selected: true
      });
    }
  }

  /**
   * Deselects all the permissions of a particular role
   */
  deselectAll() {
    for (let i = 0; i < this.permissions.permissions.length; i++) {
      (this.formGroup.controls.roster as FormArray).controls[(this.permissions.permissions[i].id as any)].patchValue({
        selected: false
      });
    }
  }

  /**
   * Deletes the Role and redirects to Roles and Permissions.
   */
  deleteRole() {
    const deleteRoleDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `role ${this.roleId}` }
    });
    deleteRoleDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.systemService.deleteRole(this.roleId)
          .subscribe(() => {
            this.router.navigate(['/system/roles-and-permissions']);
          });
      } else {

      }
    });
  }

  /**
   * Enables the Role and redirects to Roles and Permissions.
   */
  enableRolesConfirmation() {
    const enableRoleDialogRef = this.dialog.open(EnableDialogComponent, {
      data: { enableContext: `role ${this.roleId}` }
    });
    enableRoleDialogRef.afterClosed().subscribe((response: any) => {
      if (response.enable) {
        this.systemService.enableRole(this.roleId)
          .subscribe(() => {
            this.router.navigate(['/system/roles-and-permissions']);
          });
      } else {

      }
    });
  }

  /**
   * Disables the Role and redirects to Roles and Permissions.
   */
  disableRolesConfirmation() {
    const deleteRoleDialogRef = this.dialog.open(DisableDialogComponent, {
      data: { disableContext: `role ${this.roleId}` }
    });
    deleteRoleDialogRef.afterClosed().subscribe((response: any) => {
      if (response.disable) {
        this.systemService.disableRole(this.roleId)
          .subscribe(() => {
            this.router.navigate(['/system/roles-and-permissions']);
          });
      } else {

      }
    });
  }

}
