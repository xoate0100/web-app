/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { ClientsService } from 'app/clients/clients.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, FlexDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';

/**
 * Reject Client Transfer Component
 */
@Component({
    selector: 'mifosx-reject-client-transfer',
    templateUrl: './reject-client-transfer.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./reject-client-transfer.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, FlexDirective, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class RejectClientTransferComponent implements OnInit {

  /** Reject Client Transfer form. */
  rejectClientTransferForm: FormGroup;
  /** Client Id */
  clientId: any;
  /** Transfer Date */
  transferDate: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {ClientsService} clientsService Clients Service
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   */
  constructor(private formBuilder: FormBuilder,
              private clientsService: ClientsService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.data.subscribe((data: any) => {
      this.transferDate = data.clientActionData;
    });
    this.clientId = this.route.parent!.snapshot.params['clientId']!;
  }

  ngOnInit() {
    this.createRejectClientTransferForm();
  }

  /**
   * Creates the reject client transfer form.
   */
  createRejectClientTransferForm() {
    this.rejectClientTransferForm = this.formBuilder.group({
      'transferDate': {value: new Date(this.transferDate), disabled: true},
      'note': ['']
    });
  }

  /**
   * Submits the form and reject the transfer of client
   * if successful redirects to the client.
   */
  submit() {
    const data = {
      ...this.rejectClientTransferForm.value,
    };
    this.clientsService.executeClientCommand(this.clientId, 'rejectTransfer', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
