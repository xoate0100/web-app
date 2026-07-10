/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
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
 * Edit Configuration Component
 */
@Component({
    selector: 'mifosx-edit-configuration',
    templateUrl: './edit-configuration.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-configuration.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class EditConfigurationComponent implements OnInit {

  /** Global Configuration form. */
  configurationForm: FormGroup;
  /** Configuration. */
  configuration: any;

  /**
   * Retrieves the configuration data from `resolve`.
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
      this.configuration = data.configuration;
    });
  }

  /**
   * Creates and sets the configuration form.
   */
  ngOnInit() {
    this.createConfigurationForm();
  }

  /**
   * Creates and sets the global configuration form.
   */
  createConfigurationForm() {
    this.configurationForm = this.formBuilder.group({
      'name': [{ value: this.configuration.name, disabled: true }, Validators.required],
      'value': [this.configuration.value, Validators.required]
    });
  }

  /**
   * Submits the global configuration form and updates global configuration,
   * if successful redirects to view all global configurations.
   */
  submit() {
    this.systemService
      .updateConfiguration(this.configuration.id, this.configurationForm.value)
      .subscribe((response: any) => {
        this.router.navigate(['../../'], { relativeTo: this.route });
      });
  }

}
