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
 * Clients Assign Staff Component
 */
@Component({
    selector: 'mifosx-client-assign-staff',
    templateUrl: './client-assign-staff.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./client-assign-staff.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, FlexDirective, MatLabel, MatSelect, NgFor, MatOption, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class ClientAssignStaffComponent implements OnInit {

  /** Client Assign Staff form. */
  clientAssignStaffForm: FormGroup;
  /** Staff Data */
  staffData: any;
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

  /**
   * Creates the client assign staff form.
   */
  ngOnInit() {
    this.staffData = this.clientData.staffOptions;
    this.createClientAssignStaffForm();
  }

  /**
   * Creates the client assign staff form.
   */
  createClientAssignStaffForm() {
    this.clientAssignStaffForm = this.formBuilder.group({
      'staffId': ['']
    });
  }

  /**
   * Submits the form and assigns staff for the client.
   */
  submit() {
    this.clientsService.executeClientCommand(this.clientData.id, 'assignStaff', this.clientAssignStaffForm.value)
      .subscribe(() => {
        this.router.navigate(['../../'], { relativeTo: this.route });
      });
  }

}
