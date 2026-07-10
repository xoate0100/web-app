/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { ClientsService } from 'app/clients/clients.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { FlexDirective, LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';

/**
 * Reactivate Client Component
 */
@Component({
    selector: 'mifosx-reactivate-client',
    templateUrl: './reactivate-client.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./reactivate-client.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, MatFormField, FlexDirective, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class ReactivateClientComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Reactivate client form. */
  reactivateClientForm: FormGroup;
  /** Client Account Id */
  clientId: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {clientsService} clientsService Clients Service
   * @param {DatePipe} datePipe Date Pipe
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   * @param {SettingsService} settingsService Setting service
   */
  constructor(private formBuilder: FormBuilder,
              private clientsService: ClientsService,
              private datePipe: DatePipe,
              private route: ActivatedRoute,
              private router: Router,
              private settingsService: SettingsService) {
    this.clientId = this.route.parent!.snapshot.params['clientId']!;
  }

  /**
   * Creates the reactivate client form.
   */
  ngOnInit() {
    this.createReactivateClientForm();
  }

  /**
   * Creates the reactivate client form.
   */
  createReactivateClientForm() {
    this.reactivateClientForm = this.formBuilder.group({
      'reactivationDate': ['', Validators.required]
    });
  }

  /**
   * Submits the form and reactivates the client,
   * if successful redirects to the client.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const prevReactivationDate: Date = this.reactivateClientForm.value.reactivationDate;
    this.reactivateClientForm.patchValue({
      reactivationDate: this.datePipe.transform(prevReactivationDate as Date, dateFormat),
    });
    const data = {
      ...this.reactivateClientForm.value,
      dateFormat,
      locale
    };
    this.clientsService.executeClientCommand(this.clientId, 'reactivate', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
