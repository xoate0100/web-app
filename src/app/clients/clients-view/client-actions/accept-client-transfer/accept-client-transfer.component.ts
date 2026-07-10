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
 * Accept Client Transfer Component
 */
@Component({
    selector: 'mifosx-accept-client-transfer',
    templateUrl: './accept-client-transfer.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./accept-client-transfer.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, FlexDirective, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class AcceptClientTransferComponent implements OnInit {

  /** Accept Client Transfer form. */
  acceptClientTransferForm: FormGroup;
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

  /**
   * Creates the accept client transfer form.
   */
  ngOnInit() {
    this.createAcceptClientTransferForm();
  }

  /**
   * Creates the accept client transfer form.
   */
  createAcceptClientTransferForm() {
    this.acceptClientTransferForm = this.formBuilder.group({
      'transferDate': {value: new Date(this.transferDate), disabled: true},
      'note': ['']
    });
  }

  /**
   * Submits the form and accept the transfer of client
   * if successful redirects to the client.
   */
  submit() {
    const data = {
      ...this.acceptClientTransferForm.value,
    };
    this.clientsService.executeClientCommand(this.clientId, 'acceptTransfer', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
