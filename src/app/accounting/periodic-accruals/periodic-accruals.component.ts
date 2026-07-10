/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

/** Custom Services */
import { AccountingService } from '../accounting.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, FlexDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../directives/has-permission/has-permission.directive';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

/**
 * Periodic accruals component.
 */
@Component({
    selector: 'mifosx-periodic-accruals',
    templateUrl: './periodic-accruals.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./periodic-accruals.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, FlexDirective, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective, FaIconComponent]
})
export class PeriodicAccrualsComponent implements OnInit {

  /** Minimum accrue date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum accrue date allowed. */
  maxDate = new Date();
  /** Periodic accruals form. */
  periodicAccrualsForm: FormGroup;

  /**
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {AccountingService} accountingService Accounting Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   */
  constructor(private formBuilder: FormBuilder,
              private accountingService: AccountingService,
              private route: ActivatedRoute,
              private router: Router) { }

  /**
   * Creates periodic accruals form.
   */
  ngOnInit() {
    this.createPeriodicAccrualsForm();
  }

  /**
   * Creates periodic accruals form.
   */
  createPeriodicAccrualsForm() {
    this.periodicAccrualsForm = this.formBuilder.group({
      'tillDate': ['', Validators.required]
    });
  }

  /**
   * Submits the periodic accruals form and executes periodic accruals,
   * if successful redirects to accounting.
   */
  submit() {
    const periodicAccruals = this.periodicAccrualsForm.value;
    // TODO: Update once language and date settings are setup
    periodicAccruals.locale = 'en';
    periodicAccruals.dateFormat = 'yyyy-MM-dd';
    if (periodicAccruals.tillDate instanceof Date) {
      let day = periodicAccruals.tillDate.getDate();
      let month = periodicAccruals.tillDate.getMonth() + 1;
      const year = periodicAccruals.tillDate.getFullYear();
      if (day < 10) {
        day = `0${day}`;
      }
      if (month < 10) {
        month = `0${month}`;
      }
      periodicAccruals.tillDate = `${year}-${month}-${day}`;
    }
    this.accountingService.executePeriodicAccruals(periodicAccruals).subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

}
