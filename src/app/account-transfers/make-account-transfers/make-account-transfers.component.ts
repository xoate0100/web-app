/** Angular Imports */
import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgFor, NgIf } from '@angular/common';

/** Custom Services */
import { AccountTransfersService } from '../account-transfers.service';
import { SettingsService } from 'app/settings/settings.service';
import { ClientsService } from 'app/clients/clients.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, FlexFillDirective, FlexDirective, LayoutGapDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOption, MatAutocompleteTrigger, MatAutocomplete } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../directives/has-permission/has-permission.directive';


/**
 * Create account transfers
 */
@Component({
    selector: 'mifosx-make-account-transfers',
    templateUrl: './make-account-transfers.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./make-account-transfers.component.scss'],
    imports: [MatCard, MatCardContent, LayoutDirective, FlexFillDirective, MatDivider, FlexDirective, ReactiveFormsModule, LayoutGapDirective, MatFormField, MatLabel, MatSelect, NgFor, MatOption, NgIf, MatError, MatInput, MatAutocompleteTrigger, MatAutocomplete, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatCardActions, LayoutAlignDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class MakeAccountTransfersComponent implements OnInit, AfterViewInit {

  /** Standing Instructions Data */
  accountTransferTemplateData: any;
  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date(2100, 0, 1);
  /** Edit Standing Instructions form. */
  makeAccountTransferForm: FormGroup;
  /** To Office Type Data */
  toOfficeTypeData: any;
  /** To Client Type Data */
  toClientTypeData: any;
  /** To Account Type Data */
  toAccountTypeData: any;
  /** To Account Data */
  toAccountData: any;
  /** Account Type Id */
  accountTypeId: any;
  /** Account Type */
  accountType: any;
  /** Savings Id or Loans Id */
  id: any;
  /** Clients Data */
  clientsData: any;

  /**
   * Retrieves the standing instructions template from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   * @param {FormBuilder} formBuilder Form Builder
   * @param {Router} router Router
   * @param {AccountTransfersService} accountTransfersService Account Transfers Service
   * @param {DatePipe} datePipe Date Pipe
   * @param {SettingsService} settingsService Settings Service
   * @param {ClientsService} clientsService Clients Service
   */
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountTransfersService: AccountTransfersService,
    private datePipe: DatePipe,
    private settingsService: SettingsService,
    private clientsService: ClientsService) {
    this.route.data.subscribe((data: any) => {
      this.accountTransferTemplateData = data.accountTransferTemplate;
      this.setParams();
      this.setOptions();
    });
  }
  /** Sets the value from the URL */
  setParams() {
    this.accountType = this.route.snapshot.queryParams['accountType']!;
    switch (this.accountType) {
      case 'fromloans':
        this.accountTypeId = '1';
        this.id = this.route.snapshot.queryParams['loanId']!;
        break;
      case 'fromsavings':
        this.accountTypeId = '2';
        this.id = this.route.snapshot.queryParams['savingsId']!;
        break;
      default:
        this.accountTypeId = '0';
    }
  }

  /**
   * Creates and sets the create standing instructions form.
   */
  ngOnInit() {
    this.createMakeAccountTransferForm();
  }

  /**
   * Creates the standing instruction form.
   */
  createMakeAccountTransferForm() {
    this.makeAccountTransferForm = this.formBuilder.group({
      'toOfficeId': ['', Validators.required],
      'toClientId': ['', Validators.required],
      'toAccountType': ['', Validators.required],
      'toAccountId': ['', Validators.required],
      'transferAmount': [this.accountTransferTemplateData.transferAmount, Validators.required],
      'transferDate': ['', Validators.required],
      'transferDescription': ['', Validators.required],
    });
  }

  /** Sets options value */
  setOptions() {
    this.toOfficeTypeData = this.accountTransferTemplateData.toOfficeOptions;
    this.toAccountTypeData = this.accountTransferTemplateData.toAccountTypeOptions;
    this.toAccountData = this.accountTransferTemplateData.toAccountOptions;
  }

  /** Executes on change of various select options */
  changeEvent() {
    const formValue = this.refineObject(this.makeAccountTransferForm.value);
    this.accountTransfersService.newAccountTranferResource(this.id, this.accountTypeId, formValue).subscribe((response: any) => {
      this.accountTransferTemplateData = response;
      this.toClientTypeData = response.toClientOptions;
      this.setOptions();
    });
  }

  /** Refine Object
   * Removes the object param with null or '' values
   */
  refineObject(dataObj: { [x: string]: any; transferAmount: any; transferDate: any; transferDescription: any; }) {
    delete (dataObj as any).transferAmount;
    delete (dataObj as any).transferDate;
    delete (dataObj as any).transferDescription;
    if (dataObj.toClientId) {
      dataObj.toClientId = dataObj.toClientId.id;
    }
    const propNames = Object.getOwnPropertyNames(dataObj);
    for (let i = 0; i < propNames.length; i++) {
      const propName = propNames[i];
      if (dataObj[propName] === null || dataObj[propName] === undefined || dataObj[propName] === '') {
        dataObj[propName] = undefined;
      }
    }
    return dataObj;
  }

  /**
   * Subscribes to Clients search filter:
   */
  ngAfterViewInit() {
    this.makeAccountTransferForm.controls.toClientId.valueChanges.subscribe((value: any) => {
      if (value.length >= 2) {
        this.clientsService.getFilteredClients('displayName', 'ASC', true, value)
          .subscribe((data: any) => {
            this.clientsData = data.pageItems;
          });
        this.changeEvent();
      }
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

  /**
   * Submits the standing instructions form
   */
  submit() {
    const dateFormat = this.settingsService.dateFormat;
    const locale = this.settingsService.language.code;
    const makeAccountTransferData = {
      ... this.makeAccountTransferForm.value,
      transferDate: this.datePipe.transform(this.makeAccountTransferForm.value.transferDate as Date, dateFormat),
      dateFormat,
      locale,
      toClientId: this.makeAccountTransferForm.controls.toClientId.value.id,
      fromAccountId: this.id,
      fromAccountType: this.accountTypeId,
      fromClientId: this.accountTransferTemplateData.fromClient.id,
      fromOfficeId: this.accountTransferTemplateData.fromClient.officeId
    };
    this.accountTransfersService.createAccountTransfer(makeAccountTransferData).subscribe(() => {
      this.router.navigate(['../../general'], { relativeTo: this.route });
    });
  }

}
