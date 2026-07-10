/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { ClientsService } from 'app/clients/clients.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, FlexDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';

/**
 * Clients Update Savings Account Component
 */
@Component({
    selector: 'mifosx-update-client-savings-account',
    templateUrl: './update-client-savings-account.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./update-client-savings-account.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, FlexDirective, MatLabel, MatSelect, NgFor, MatOption, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class UpdateClientSavingsAccountComponent implements OnInit {

  /** Client Update Savings Account form. */
  clientSavingsAccountForm: FormGroup;
  /** Savings Accounts Data */
  savingsAccounts: any;
  /** Client Data */
  clientData: any;

  /**
   * Fetches Client Action Data from `resolve`
   * @param {FormBuilder} formBuilder Form Builder
   * @param {SavingsService} savingsService Savings Service
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   */
  constructor(private formBuilder: FormBuilder,
              private clientsService: ClientsService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.data.subscribe((data: any) => {
      this.clientData = data.clientActionData;
    });
  }

  ngOnInit() {
    this.savingsAccounts = this.clientData.savingAccountOptions;
    this.createClientSavingsAccountForm();
  }

  /**
   * Creates the client update savings account form.
   */
  createClientSavingsAccountForm() {
    this.clientSavingsAccountForm = this.formBuilder.group({
      'savingsAccountId': [this.clientData.savingsAccountId]
    });
  }

  /**
   * Submits the form and update savings account for the client.
   */
  submit() {
    this.clientsService.executeClientCommand(this.clientData.id, 'updateSavingsAccount', this.clientSavingsAccountForm.value)
      .subscribe(() => {
        this.router.navigate(['../../'], { relativeTo: this.route });
      });
  }

}
