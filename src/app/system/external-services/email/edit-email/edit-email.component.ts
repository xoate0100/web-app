/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

/** Custom Services */
import { SystemService } from 'app/system/system.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';

/**
 * Edit Email Configuration Component.
 */
@Component({
    selector: 'mifosx-edit-email',
    templateUrl: './edit-email.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-email.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class EditEmailComponent implements OnInit {

  /** Email Configuration data */
  emailConfigurationData: any;
  /** Email Configuration Form */
  emailConfigurationForm: FormGroup;

  /**
   * Retrieves the Email configuration data from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {SystemService} systemService Accounting Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   */
  constructor(private formBuilder: FormBuilder,
              private systemService: SystemService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.data.subscribe((data: any) => {
      this.emailConfigurationData = data.emailConfiguration;
    });
  }

  /**
   * Creates Email configuration form.
   */
  ngOnInit() {
    this.setEmailConfigurationForm();
  }

  /**
   * Creates Email configuration form.
   */
  setEmailConfigurationForm() {
    this.emailConfigurationForm = this.formBuilder.group({
      'username': [this.emailConfigurationData[0].value, Validators.required],
      'password': [this.emailConfigurationData[1].value, Validators.required],
      'host': [this.emailConfigurationData[2].value, Validators.required],
      'port': [this.emailConfigurationData[3].value, Validators.required],
      'useTLS': [this.emailConfigurationData[4].value, Validators.required]
    });
  }

  /**
   * Submits the Email configuration and updates the Email configuration,
   * if successful redirects to view Email configuration.
   */
  submit() {
    this.systemService
      .updateExternalConfiguration('SMTP', this.emailConfigurationForm.value)
      .subscribe((response: any) => {
        this.router.navigate(['../'], { relativeTo: this.route });
      });
  }

}
