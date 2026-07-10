/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgIf, NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { ClientsService } from 'app/clients/clients.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, FlexDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';

/**
 * Reject Client Component
 */
@Component({
    selector: 'mifosx-reject-client',
    templateUrl: './reject-client.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./reject-client.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, FlexDirective, MatSelect, NgFor, MatOption, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class RejectClientComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Reject Share Account form. */
  rejectClientForm: FormGroup;
  /** Client Data */
  rejectionData: any;
  /** Client Id */
  clientId: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {ClientsService} clientsService Clients Service
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
    this.route.data.subscribe((data: any) => {
      this.rejectionData = data.clientActionData.narrations;
    });
    this.clientId = this.route.parent!.snapshot.params['clientId']!;
  }

  ngOnInit() {
    this.createRejectClientForm();
  }

  /**
   * Creates the reject client form.
   */
  createRejectClientForm() {
    this.rejectClientForm = this.formBuilder.group({
      'rejectionDate': ['', Validators.required],
      'rejectionReasonId': ['', Validators.required]
    });
  }

  /**
   * Submits the form and rejects the client.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const prevRejectedDate: Date = this.rejectClientForm.value.rejectionDate;
    this.rejectClientForm.patchValue({
      rejectionDate: this.datePipe.transform(prevRejectedDate as Date, dateFormat),
    });
    const data = {
      ...this.rejectClientForm.value,
      dateFormat,
      locale
    };
    this.clientsService.executeClientCommand(this.clientId, 'reject', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
