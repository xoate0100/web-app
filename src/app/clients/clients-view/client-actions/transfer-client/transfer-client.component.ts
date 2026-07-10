/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { ClientsService } from 'app/clients/clients.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';

/**
 * Transfer Client Component
 */
@Component({
    selector: 'mifosx-transfer-client',
    templateUrl: './transfer-client.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./transfer-client.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatSelect, NgFor, MatOption, NgIf, MatError, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class TransferClientComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Transfer Client form. */
  transferClientForm: FormGroup;
  /** Client Data */
  officeData: any;
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
      this.officeData = data.clientActionData;
    });
    this.clientId = this.route.parent!.snapshot.params['clientId']!;
  }

  ngOnInit() {
    this.createTransferClientForm();
  }

  /**
   * Creates the transfer client form.
   */
  createTransferClientForm() {
    this.transferClientForm = this.formBuilder.group({
      'destinationOfficeId': ['', Validators.required],
      'transferDate': ['', Validators.required],
      'note': ['']
    });
  }

  /**
   * Submits the form and transfers the client.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const prevClosedDate: Date = this.transferClientForm.value.transferDate;
    this.transferClientForm.patchValue({
      transferDate: this.datePipe.transform(prevClosedDate as Date, dateFormat),
    });
    const data = {
      ...this.transferClientForm.value,
      dateFormat,
      locale
    };
    this.clientsService.executeClientCommand(this.clientId, 'proposeTransfer', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
