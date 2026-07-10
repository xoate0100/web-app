import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe, NgIf } from '@angular/common';
import { LoansService } from '../loans.service';
import { LoansAccountDetailsStepComponent } from '../loans-account-stepper/loans-account-details-step/loans-account-details-step.component';
import { LoansAccountTermsStepComponent } from '../loans-account-stepper/loans-account-terms-step/loans-account-terms-step.component';
import { LoansAccountChargesStepComponent } from '../loans-account-stepper/loans-account-charges-step/loans-account-charges-step.component';

/** Custom Services */
import { SettingsService } from 'app/settings/settings.service';
import { MatStepper, MatStepperIcon, MatStep, MatStepLabel } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { LoansAccountPreviewStepComponent } from '../loans-account-stepper/loans-account-preview-step/loans-account-preview-step.component';

/**
 * Edit Loans
 */
@Component({
    selector: 'mifosx-edit-loans-account',
    templateUrl: './edit-loans-account.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-loans-account.component.scss'],
    imports: [MatStepper, MatStepperIcon, FaIconComponent, MatStep, MatStepLabel, LoansAccountDetailsStepComponent, LoansAccountTermsStepComponent, LoansAccountChargesStepComponent, NgIf, LoansAccountPreviewStepComponent]
})
export class EditLoansAccountComponent implements OnInit {

  @ViewChild(LoansAccountDetailsStepComponent, { static: true }) loansAccountDetailsStep: LoansAccountDetailsStepComponent;
  @ViewChild(LoansAccountTermsStepComponent, { static: true }) loansAccountTermsStep: LoansAccountTermsStepComponent;
  @ViewChild(LoansAccountChargesStepComponent, { static: true }) loansAccountChargesStep: LoansAccountChargesStepComponent;

  loansAccountAndTemplate: any;
  /** Loans Account Product Template */
  loansAccountProductTemplate: any;
  /** Collateral Options */
  collateralOptions: any;
  /** Loan Id */
  loanId: any;

  /**
   * Sets loans account edit form.
   * @param {route} ActivatedRoute Activated Route.
   * @param {router} Router Router.
   * @param {datePipe} DatePipe Date Pipe
   * @param {loansService} LoansService Loans Service
   * @param {SettingsService} settingsService Settings Service
   */
  constructor(private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private loansService: LoansService,
    private settingsService: SettingsService
  ) {
    this.route.data.subscribe((data: any) => {
      this.loansAccountAndTemplate = data.loansAccountAndTemplate;
    });
    this.loanId = this.route.parent!.snapshot.params['loanId']!;
  }

  ngOnInit() {
  }

  /**
   * Sets loans account product template and collateral template
   * @param {any} $event API response
   */
  setTemplate($event: any) {
    this.loansAccountProductTemplate = $event;
    this.loansService.getLoansCollateralTemplateResource(this.loansAccountProductTemplate.loanProductId).subscribe((response: any) => {
      this.collateralOptions = response.loanCollateralOptions;
    });
  }

  /** Get Loans Account Details Form Data */
  get loansAccountDetailsForm() {
    return this.loansAccountDetailsStep.loansAccountDetailsForm;
  }

  /** Get Loans Account Terms Form Data */
  get loansAccountTermsForm() {
    return this.loansAccountTermsStep.loansAccountTermsForm;
  }

  /** Checks wheter all the forms in different steps are valid and not pristine */
  get loansAccountFormValidAndNotPristine() {
    return (
      this.loansAccountDetailsForm.valid &&
      this.loansAccountTermsForm.valid &&
      (
        !this.loansAccountDetailsForm.pristine ||
        !this.loansAccountTermsForm.pristine ||
        !this.loansAccountChargesStep.pristine
      )
    );
  }

  /** Retrieves Data of all forms except Currency to submit the data */
  get loansAccount() {
    return {
      ...this.loansAccountDetailsStep.loansAccountDetails,
      ...this.loansAccountTermsStep.loansAccountTerms,
      ...this.loansAccountChargesStep.loansAccountCharges,
    };
  }

  /**
   * Submits Data to create loan account
   */
  submit() {
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const loanType = 'individual';
    const loansAccountData = {
      ...this.loansAccount,
      clientId: this.loansAccountAndTemplate.clientId,
      charges: this.loansAccount.charges.map((charge: any) => ({
        chargeId: charge.id,
        amount: charge.amount,
        dueDate: charge.dueDate && this.datePipe.transform(charge.dueDate as Date, dateFormat),
      })),
      collateral: this.loansAccount.collateral.map((collateralEle: any) => ({
        type: collateralEle.type,
        value: collateralEle.value,
        description: collateralEle.description
      })),
      interestChargedFromDate: this.datePipe.transform(this.loansAccount.interestChargedFromDate as Date, dateFormat),
      repaymentsStartingFromDate: this.datePipe.transform(this.loansAccount.repaymentsStartingFromDate as Date, dateFormat),
      submittedOnDate: this.datePipe.transform(this.loansAccount.submittedOnDate as Date, dateFormat),
      expectedDisbursementDate: this.datePipe.transform(this.loansAccount.expectedDisbursementDate as Date, dateFormat),
      dateFormat,
      locale,
      loanType
    };

    if (loansAccountData.syncRepaymentsWithMeeting) {
      loansAccountData.calendarId = this.loansAccountProductTemplate.calendarOptions[0].id;
      delete (loansAccountData as any).syncRepaymentsWithMeeting;
    }

    if (loansAccountData.recalculationRestFrequencyDate) {
      loansAccountData.recalculationRestFrequencyDate = this.datePipe.transform(this.loansAccount.recalculationRestFrequencyDate as Date, dateFormat);
    }

    if (loansAccountData.recalculationCompoundingFrequencyDate) {
      loansAccountData.recalculationCompoundingFrequencyDate = this.datePipe.transform(this.loansAccount.recalculationCompoundingFrequencyDate as Date, dateFormat);
    }

    if (loansAccountData.interestCalculationPeriodType === 0) {
      loansAccountData.allowPartialPeriodInterestCalcualtion = false;
    }
    if (!(loansAccountData.isFloatingInterestRate === false)) {
      delete (loansAccountData as any).isFloatingInterestRate;
    }

    this.loansService.updateLoansAccount(this.loanId, loansAccountData).subscribe((response: any) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

}
