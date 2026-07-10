/** Angular Imports */
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgFor, NgIf } from '@angular/common';

/** Custom Services */
import { SettingsService } from 'app/settings/settings.service';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

/**
 * Create Client Component
 */
@Component({
    selector: 'mifosx-client-general-step',
    templateUrl: './client-general-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./client-general-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatSelect, NgFor, MatOption, NgIf, MatError, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatCheckbox, LayoutAlignDirective, MatButton, MatStepperPrevious, FaIconComponent, MatStepperNext]
})
export class ClientGeneralStepComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();

  /** Client Template */
  @Input() clientTemplate: any;
  /** Create Client Form */
  createClientForm: FormGroup;

  /** Office Options */
  officeOptions: any;
  /** Staff Options */
  staffOptions: any;
  /** Legal Form Options */
  legalFormOptions: any;
  /** Client Type Options */
  clientTypeOptions: any;
  /** Client Classification Options */
  clientClassificationTypeOptions: any;
  /** Business Line Options */
  businessLineOptions: any;
  /** Constitution Options */
  constitutionOptions: any;
  /** Gender Options */
  genderOptions: any;
  /** Saving Product Options */
  savingProductOptions: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {DatePipe} datePipe Date Pipe
   * @param {SettingsService} settingsService Setting service
   */
  constructor(private formBuilder: FormBuilder,
              private datePipe: DatePipe,
              private settingsService: SettingsService) {
    this.setClientForm();
  }

  ngOnInit() {
    this.setOptions();
    this.buildDependencies();
  }

  /**
   * Creates the client form.
   */
  setClientForm() {
    this.createClientForm = this.formBuilder.group({
      'officeId': ['', Validators.required],
      'staffId': [''],
      'legalFormId': [''],
      'isStaff': [false],
      'active': [false],
      'addSavings': [false],
      'accountNo': [''],
      'externalId': [''],
      'genderId': [''],
      'mobileNo': [''],
      'dateOfBirth': [''],
      'clientTypeId': [''],
      'clientClassificationId': [''],
      'submittedOnDate': ['']
    });
  }

  /**
   * Sets select dropdown options.
   */
  setOptions() {
    this.officeOptions = this.clientTemplate.officeOptions;
    this.staffOptions = this.clientTemplate.staffOptions;
    this.legalFormOptions = this.clientTemplate.clientLegalFormOptions;
    this.clientTypeOptions = this.clientTemplate.clientTypeOptions;
    this.clientClassificationTypeOptions = this.clientTemplate.clientClassificationOptions;
    this.businessLineOptions = this.clientTemplate.clientNonPersonMainBusinessLineOptions;
    this.constitutionOptions = this.clientTemplate.clientNonPersonConstitutionOptions;
    this.genderOptions = this.clientTemplate.genderOptions;
    this.savingProductOptions = this.clientTemplate.savingProductOptions;
  }

  /**
   * Adds controls conditionally.
   */
  buildDependencies() {
    this.createClientForm.get('legalFormId')!.valueChanges.subscribe((legalFormId: any) => {
      if (legalFormId === 1) {
        this.createClientForm.removeControl('fullname');
        this.createClientForm.removeControl('clientNonPersonDetails');
        this.createClientForm.addControl('firstname', new FormControl('', [Validators.required, Validators.pattern('(^[A-z]).*')]));
        this.createClientForm.addControl('middlename', new FormControl('', Validators.pattern('(^[A-z]).*')));
        this.createClientForm.addControl('lastname', new FormControl('', [Validators.required, Validators.pattern('(^[A-z]).*')]));
      } else {
        this.createClientForm.removeControl('firstname');
        this.createClientForm.removeControl('middlename');
        this.createClientForm.removeControl('lastname');
        this.createClientForm.addControl('fullname', new FormControl('', [Validators.required, Validators.pattern('(^[A-z]).*')]));
        this.createClientForm.addControl('clientNonPersonDetails', this.formBuilder.group({
          'constitutionId': [''],
          'incorpValidityTillDate': [''],
          'incorpNumber': [''],
          'mainBusinessLineId': [''],
          'remarks': ['']
        }));
      }
    });
    this.createClientForm.get('legalFormId')!.patchValue(1);
    this.createClientForm.get('active')!.valueChanges.subscribe((active: boolean) => {
      if (active) {
        this.createClientForm.addControl('activationDate', new FormControl('', Validators.required));
      } else {
        this.createClientForm.removeControl('activationDate');
      }
    });
    this.createClientForm.get('addSavings')!.valueChanges.subscribe((active: boolean) => {
      if (active) {
        this.createClientForm.addControl('savingsProductId', new FormControl('', Validators.required));
      } else {
        this.createClientForm.removeControl('savingsProductId');
      }
    });
  }

  /**
   * Client General Details
   */
  get clientGeneralDetails() {
    const generalDetails = this.createClientForm.value;
    const dateFormat = this.settingsService.dateFormat;
    const locale = this.settingsService.language.code;
    // TODO: Update once language and date settings are setup
    for (const key in generalDetails) {
      if (generalDetails[key] === '' || key === 'addSavings') {
        generalDetails[key] = undefined;
      }
    }
    if (generalDetails.submittedOnDate) {
      generalDetails.submittedOnDate = this.datePipe.transform(generalDetails.submittedOnDate as Date, dateFormat);
    }
    if (generalDetails.activationDate) {
      generalDetails.activationDate = this.datePipe.transform(generalDetails.activationDate as Date, dateFormat);
    }
    if (generalDetails.dateOfBirth) {
      generalDetails.dateOfBirth = this.datePipe.transform(generalDetails.dateOfBirth as Date, dateFormat);
    }

    if (generalDetails.clientNonPersonDetails && generalDetails.clientNonPersonDetails.incorpValidityTillDate) {
      generalDetails.clientNonPersonDetails = {
        ...generalDetails.clientNonPersonDetails,
        incorpValidityTillDate: this.datePipe.transform(generalDetails.dateOfBirth as Date, dateFormat),
        dateFormat,
        locale
      };
    }
    return generalDetails;
  }

}
