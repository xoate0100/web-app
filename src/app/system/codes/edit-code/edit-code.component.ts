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
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';

/**
 * Edit Code Component.
 */
@Component({
    selector: 'mifosx-edit-code',
    templateUrl: './edit-code.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-code.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class EditCodeComponent implements OnInit {

  /** Code Form */
  codeForm: FormGroup;
  /** Code Data */
  codeData: any;

  /**
   * Retrieves the code data from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {SystemService} systemService System Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   */
  constructor(private formBuilder: FormBuilder,
              private systemService: SystemService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.data.subscribe((data: any) => {
      this.codeData = data.code;
    });
  }

  /**
   * Creates and sets the code form.
   */
  ngOnInit() {
    this.createCodeForm();
  }

  /**
   * Creates and sets code form.
   */
  createCodeForm() {
    this.codeForm = this.formBuilder.group({
      'name': [this.codeData.name, Validators.required]
    });
  }

  /**
   * Submits the code form and updates code,
   * if successful redirects to view updated code.
   */
  submit() {
    this.systemService.updateCode(this.codeForm.value, this.codeData.id)
      .subscribe((response: any) => {
        this.router.navigate(['../../', response.resourceId], { relativeTo: this.route });
      });
  }

}
