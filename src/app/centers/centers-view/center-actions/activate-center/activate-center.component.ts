/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { CentersService } from 'app/centers/centers.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { FlexDirective, LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';

/**
 * Activate Center Component
 */
@Component({
    selector: 'mifosx-activate-center',
    templateUrl: './activate-center.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./activate-center.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, MatFormField, FlexDirective, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class ActivateCenterComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Activate center form. */
  activateCenterForm: FormGroup;
  /** Group Account Id */
  centerId: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {centersService} CentersService Shares Service
   * @param {SettingsService} settingsService Settings Service.
   * @param {DatePipe} datePipe Date Pipe
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   */
  constructor(private formBuilder: FormBuilder,
              private centersService: CentersService,
              private settingsService: SettingsService,
              private datePipe: DatePipe,
              private route: ActivatedRoute,
              private router: Router) {
    this.centerId = this.route.parent!.snapshot.params['centerId']!;
  }

  /**
   * Creates the activate center form.
   */
  ngOnInit() {
    this.createActivateCenterForm();
  }

  /**
   * Creates the activate center form.
   */
  createActivateCenterForm() {
    this.activateCenterForm = this.formBuilder.group({
      'activationDate': [new Date(), Validators.required]
    });
  }

  /**
   * Submits the form and activates the center,
   * if successful redirects to the center.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const prevactivationDate: Date = this.activateCenterForm.value.activationDate;
    this.activateCenterForm.patchValue({
      activationDate: this.datePipe.transform(prevactivationDate as Date, dateFormat),
    });
    const data = {
      ...this.activateCenterForm.value,
      dateFormat,
      locale
    };
    this.centersService.executeCenterActionCommand(this.centerId, 'activate', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
