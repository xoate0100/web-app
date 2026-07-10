/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { SystemService } from '../../system.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';

/**
 * Edit Role Description Component.
 */
@Component({
    selector: 'mifosx-edit-role',
    templateUrl: './edit-role.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-role.component.scss'],
    imports: [
        MatCard,
        ReactiveFormsModule,
        MatCardContent,
        LayoutDirective,
        MatFormField,
        MatLabel,
        MatInput,
        NgIf,
        MatError,
        MatCardActions,
        LayoutAlignDirective,
        LayoutGapDirective,
        MatButton,
        RouterLink,
    ],
})
export class EditRoleComponent implements OnInit {
  /** Role Form */
  roleForm: FormGroup;
  /** Role Data */
  roleData: any;

  /**
   * Retrieves the code data from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {SystemService} systemService System Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   */
  constructor(
    private formBuilder: FormBuilder,
    private systemService: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.data.subscribe((data: any) => {
      this.roleData = data.role;
    });
  }

  /**
   * Creates and sets the role form.
   */
  ngOnInit() {
    this.createRoleForm();
  }

  /**
   * Creates and sets role form.
   */
  createRoleForm() {
    this.roleForm = this.formBuilder.group({
      name: [{ value: this.roleData.name, disabled: true }, Validators.required],
      description: [this.roleData.description, Validators.required],
    });
  }

  /**
   * Submits the role form and updates role description,
   * if successful redirects to view updated roles and permissions.
   */
  submit() {
    this.systemService.updateRole(this.roleForm.value, this.roleData.id).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }
}
