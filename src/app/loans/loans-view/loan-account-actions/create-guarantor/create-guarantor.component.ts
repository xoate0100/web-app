/** Angular Imports */
import { Component, OnInit, Input, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { LoansService } from 'app/loans/loans.service';
import { DatePipe, NgIf, NgFor } from '@angular/common';
import { ClientsService } from 'app/clients/clients.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, FlexDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatAutocompleteTrigger, MatAutocomplete, MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';

/**
 * Create Guarantor Action
 */
@Component({
    selector: 'mifosx-create-guarantor',
    templateUrl: './create-guarantor.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./create-guarantor.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatCheckbox, NgIf, MatFormField, FlexDirective, MatLabel, MatInput, MatAutocompleteTrigger, MatError, MatAutocomplete, NgFor, MatOption, MatSelect, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class CreateGuarantorComponent implements OnInit, AfterViewInit {

  @Input() dataObject: any;
  /** New Guarantor Form */
  newGuarantorForm: FormGroup;
  /** Loan ID */
  loanId: string;
  /** Relation Types */
  relationTypes: any;
  /** Show Client Details Form */
  showClientDetailsForm = false;
  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Client data. */
  clientsData: any = [];
  /** Account Options */
  accountOptions: any = [];

  /**
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {LoansService} loanService Loan Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {DatePipe} datePipe Date Pipe.
   * @param {SettingsService} settingsService Settings Service
   */
  constructor(private formBuilder: FormBuilder,
    private loanService: LoansService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private clientsService: ClientsService,
    private settingsService: SettingsService) {
    this.loanId = this.route.parent!.snapshot.params['loanId']!;
  }

  ngOnInit() {
    this.createNewGuarantorForm();
    this.setNewGuarantorDetailsForm();
    this.buildDependencies();
  }

  /** Create Guarantor Details Form */
  createNewGuarantorForm() {
    this.newGuarantorForm = this.formBuilder.group({
      'existingClient': [''],
      'name': ['', Validators.required],
      'clientRelationshipTypeId': [''],
      'savingsId': [''],
      'amount': ['']
    });
  }

  /** Sets Guarantor Details Form */
  setNewGuarantorDetailsForm() {
    this.relationTypes = this.dataObject.allowedClientRelationshipTypes;
    this.newGuarantorForm.patchValue({
      existingClient: true
    });
  }

  /**
   * Add guarantor detail fields to the UI.
   */
  buildDependencies() {
    this.newGuarantorForm.get('existingClient')!.valueChanges.subscribe(() => {
      this.showClientDetailsForm = !this.showClientDetailsForm;
      if (this.showClientDetailsForm) {
        this.newGuarantorForm.addControl('firstname', new FormControl(''));
        this.newGuarantorForm.addControl('lastname', new FormControl(''));
        this.newGuarantorForm.addControl('dob', new FormControl(''));
        this.newGuarantorForm.addControl('addressLine1', new FormControl(''));
        this.newGuarantorForm.addControl('addressLine2', new FormControl(''));
        this.newGuarantorForm.addControl('city', new FormControl(''));
        this.newGuarantorForm.addControl('zip', new FormControl(''));
        this.newGuarantorForm.addControl('mobileNumber', new FormControl(''));
        this.newGuarantorForm.addControl('housePhoneNumber', new FormControl(''));
        this.newGuarantorForm.removeControl('name');
        this.newGuarantorForm.removeControl('savingsId');
        this.newGuarantorForm.removeControl('amount');
      } else {
        this.newGuarantorForm.addControl('name', new FormControl(''));
        this.newGuarantorForm.addControl('savingsId', new FormControl(''));
        this.newGuarantorForm.addControl('amount', new FormControl(''));
        this.newGuarantorForm.removeControl('firstname');
        this.newGuarantorForm.removeControl('lastname');
        this.newGuarantorForm.removeControl('dob');
        this.newGuarantorForm.removeControl('addressLine1');
        this.newGuarantorForm.removeControl('addressLine2');
        this.newGuarantorForm.removeControl('city');
        this.newGuarantorForm.removeControl('zip');
        this.newGuarantorForm.removeControl('mobileNumber');
        this.newGuarantorForm.removeControl('housePhoneNumber');
      }
    });
  }

  /**
   * Subscribes to Clients search filter:
   */
  ngAfterViewInit() {
    if (this.newGuarantorForm.value.existingClient) {
      this.newGuarantorForm.get('name')!.valueChanges.subscribe((value: any) => {
        if (value.length >= 2) {
          this.clientsService.getFilteredClients('displayName', 'ASC', true, value)
            .subscribe((data: any) => {
              this.clientsData = data.pageItems;
            });
        }
      });
    }
  }

  clientSelected(clientDetails: any) {
    this.accountOptions = [];
    this.loanService.guarantorAccountResource(this.loanId, clientDetails.id).subscribe((response: any) => {
      this.accountOptions = response.accountLinkingOptions;
    });
  }

  /**
   * Displays Client name in form control input.
   * @param {any} client Client data.
   * @returns {string} Client name if valid otherwise undefined.
   */
  displayClient(client: any): string {
    return client ? client.displayName : '';
  }

  /** Submits the new guarantor details form */
  submit() {
    const prevdob: Date = this.newGuarantorForm.value.dob;
    const guarantorTypeId: number = this.newGuarantorForm.value.existingClient ? this.dataObject.guarantorTypeOptions[0].id : this.dataObject.guarantorTypeOptions[2].id;
    // TODO: Update once language and date settings are setup
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const newGuarantorData = {
      ... this.newGuarantorForm.value,
      locale,
      guarantorTypeId
    };

    if (this.newGuarantorForm.value.existingClient) {
      newGuarantorData['entityId'] = this.newGuarantorForm.controls.name.value.id;
    } else {
      newGuarantorData['dob'] = this.datePipe.transform(prevdob as Date, dateFormat),
      newGuarantorData['dateFormat'] = dateFormat;
    }

    delete (newGuarantorData as any).existingClient;
    delete (newGuarantorData as any).name;

    this.loanService.createNewGuarantor(this.loanId, newGuarantorData)
      .subscribe((response: any) => {
        this.router.navigate(['../../general'], { relativeTo: this.route });
      });
  }

}
