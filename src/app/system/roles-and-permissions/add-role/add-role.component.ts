/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

/** Custom Services */
import { SystemService } from '../../system.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';

/**
 * Add Role Component.
 */
@Component({
    selector: 'mifosx-add-role',
    templateUrl: './add-role.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./add-role.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class AddRoleComponent implements OnInit {

  /** Role form. */
  roleForm: FormGroup;

  /**
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {SystemService} systemService System Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   */
  constructor(private formBuilder: FormBuilder,
              private systemService: SystemService,
              private route: ActivatedRoute,
              private router: Router) { }

  /**
   * Creates the role form.
   */
  ngOnInit() {
    this.createRoleForm();
  }

  /**
   * Creates the create role form.
   */
  createRoleForm() {
    this.roleForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required]
    });
  }

  /**
   * Submits the role form and creates a role,
   * if successful redirects back to roles and permission.
   */
  submit() {
    this.systemService.createRole(this.roleForm.value)
      .subscribe((response: any) => {
        this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

}
