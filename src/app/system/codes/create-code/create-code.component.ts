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
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';

@Component({
    selector: 'mifosx-create-code',
    templateUrl: './create-code.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./create-code.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class CreateCodeComponent implements OnInit {

  /** Code form. */
  codeForm: FormGroup;

  /**
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {SystemService} systemService Accounting Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   */
  constructor(private formBuilder: FormBuilder,
              private systemService: SystemService,
              private route: ActivatedRoute,
              private router: Router) { }

  /**
   * Creates the code form.
   */
  ngOnInit() {
    this.createCodeForm();
  }

  /**
   * Creates the create code form.
   */
  createCodeForm() {
    this.codeForm = this.formBuilder.group({
      'name': ['', Validators.required]
    });
  }

  /**
   * Submits the code form and creates a code,
   * if successful redirects to view created code.
   */
  submit() {
    this.systemService.createCode(this.codeForm.value)
      .subscribe((response: any) => {
        this.router.navigate(['../', response.resourceId], { relativeTo: this.route });
    });
  }

}
