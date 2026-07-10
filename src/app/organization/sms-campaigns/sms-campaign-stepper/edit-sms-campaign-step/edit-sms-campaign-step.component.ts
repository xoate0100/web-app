/** Angular Imports */
import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

/** Custom Services */
import { ReportsService } from 'app/reports/reports.service';

/** Custom Models */
import { ReportParameter } from 'app/reports/common-models/report-parameter.model';
import { LayoutDirective, LayoutGapDirective, LayoutAlignDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf, NgFor } from '@angular/common';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { EditBusinessRuleParametersComponent } from './edit-business-rule-parameters/edit-business-rule-parameters.component';

/**
 * Edit SMS Campaign step.
 */
@Component({
    selector: 'mifosx-edit-sms-campaign-step',
    templateUrl: './edit-sms-campaign-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-sms-campaign-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, LayoutAlignDirective, MatFormField, FlexDirective, MatLabel, MatInput, MatError, NgIf, MatSelect, NgFor, MatOption, MatCheckbox, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, EditBusinessRuleParametersComponent]
})
export class EditSmsCampaignStepComponent implements OnInit {

  /** SMS Campaign Template */
  @Input() smsCampaignTemplate: any;
  /** SMS Campaign */
  @Input() smsCampaign: any;

  /** SMS Campaign Form */
  smsCampaignDetailsForm: FormGroup;
  /** Data to be passed to sub component */
  paramData: any;
  /** Trigger types options */
  triggerTypes: any[];
  /** SMS providers options */
  smsProviders: any[];
  /** Business Rules options */
  businessRules: any[];
  /** Repetition Intervals */
  repetitionIntervals: any[];
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();

  /** Template Parameters Event Emitter */
  @Output() templateParameters = new EventEmitter();

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {ReportsService} reportService Reports Service
   */
  constructor(private formBuilder: FormBuilder,
              private reportService: ReportsService) {
    this.createSMSCampaignDetailsForm();
  }

  /**
   * Initializes the SMS campaign form.
   */
  createSMSCampaignDetailsForm() {
    this.smsCampaignDetailsForm = this.formBuilder.group({
      'campaignName': ['', Validators.required],
      'providerId': [null],
      'triggerType': ['', Validators.required],
      'runReportId': ['', Validators.required],
      'isNotification': [false]
    });
  }

  ngOnInit() {
    this.triggerTypes = this.smsCampaignTemplate.triggerTypeOptions;
    this.smsProviders = this.smsCampaignTemplate.smsProviderOptions;
    this.businessRules = this.smsCampaignTemplate.businessRulesOptions;
    this.setControlValues();
    this.getParameters();
  }

  /**
   * Passes template parameters emitted from child to parent.
   * @param {any} $event Template Parameters
   */
  passParameters($event: any) {
    this.templateParameters.emit($event);
  }

  /**
   * Gets Template parameters and disables the SMS form.
   */
  getParameters() {
    this.reportService.getReportParams(this.smsCampaign.reportName).subscribe((response: ReportParameter[]) => {
      this.paramData = response;
    });
    this.smsCampaignDetailsForm.disable();
  }

  /**
   * Patches all control values as in API response.
   */
  setControlValues() {
    this.smsCampaignDetailsForm.patchValue({
      'campaignName': this.smsCampaign.campaignName,
      'providerId': this.smsCampaign.providerId,
      'triggerType': this.smsCampaign.triggerType.id,
      'runReportId': this.smsCampaign.runReportId,
      'isNotification': this.smsCampaign.isNotification
    });
    if (this.smsCampaign.triggerType.value === 'Schedule') {
      this.smsCampaignDetailsForm.addControl('recurrenceStartDate', new FormControl(new Date(this.smsCampaign.recurrenceStartDate)));
    }
  }

}
