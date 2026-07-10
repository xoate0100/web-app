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
 * Undo Client Rejection Component
 */
@Component({
    selector: 'mifosx-undo-client-rejection',
    templateUrl: './undo-client-rejection.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./undo-client-rejection.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, MatFormField, FlexDirective, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class UndoClientRejectionComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Undo Client Rejection form. */
  undoClientRejectionForm: FormGroup;
  /** Client Id */
  clientId: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {clientsService} clientsService Cliens Service
   * @param {DatePipe} datePipe Date Pipe
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
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
   * Creates the undo client rejection form.
   */
  ngOnInit() {
    this.createUndoClientRejectionForm();
  }

  /**
   * Creates the undo client rejection form.
   */
  createUndoClientRejectionForm() {
    this.undoClientRejectionForm = this.formBuilder.group({
      'reopenedDate': ['', Validators.required]
    });
  }

  /**
   * Submits the form and undo client rejection,
   * if successful redirects to the client.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const prevReopenedDate: Date = this.undoClientRejectionForm.value.reopenedDate;
    this.undoClientRejectionForm.patchValue({
      reopenedDate: this.datePipe.transform(prevReopenedDate as Date, dateFormat),
    });
    const data = {
      ...this.undoClientRejectionForm.value,
      dateFormat,
      locale
    };
    this.clientsService.executeClientCommand(this.clientId, 'undoRejection', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
