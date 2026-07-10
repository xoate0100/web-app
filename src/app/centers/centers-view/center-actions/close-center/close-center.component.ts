/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgIf, NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { CentersService } from 'app/centers/centers.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, FlexDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';

/**
 * Close Center Component
 */
@Component({
    selector: 'mifosx-close-center',
    templateUrl: './close-center.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./close-center.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, FlexDirective, MatSelect, NgFor, MatOption, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class CloseCenterComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Close Share Account form. */
  closeCenterForm: FormGroup;
  /** Center Data */
  closureData: any;
  /** Center Id */
  centerId: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {CentersService} centersService Shares Service
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
    this.route.data.subscribe((data: any) => {
      this.closureData = data.centeractionData.closureReasons;
    });
    this.centerId = this.route.parent!.snapshot.params['centerId']!;
  }

  ngOnInit() {
    this.createCloseCenterForm();
  }

  /**
   * Creates the close centers form.
   */
  createCloseCenterForm() {
    this.closeCenterForm = this.formBuilder.group({
      'closureDate': ['', Validators.required],
      'closureReasonId': ['', Validators.required]
    });
  }

  /**
   * Submits the form and closes the center.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const prevClosedDate: Date = this.closeCenterForm.value.closureDate;
    this.closeCenterForm.patchValue({
      closureDate: this.datePipe.transform(prevClosedDate as Date, dateFormat),
    });
    const data = {
      ...this.closeCenterForm.value,
      dateFormat,
      locale
    };
    this.centersService.executeCenterActionCommand(this.centerId, 'close', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
