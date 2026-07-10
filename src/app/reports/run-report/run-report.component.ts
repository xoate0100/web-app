/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgIf, NgFor, NgSwitch, NgSwitchCase } from '@angular/common';

/** Custom Services */
import { ReportsService } from '../reports.service';
import { SettingsService } from 'app/settings/settings.service';

/** Custom Models */
import { ReportParameter } from '../common-models/report-parameter.model';
import { SelectOption } from '../common-models/select-option.model';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, FlexDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { TableAndSmsComponent } from './table-and-sms/table-and-sms.component';
import { ChartComponent } from './chart/chart.component';
import { PentahoComponent } from './pentaho/pentaho.component';

/**
 * Run report component.
 */
@Component({
    selector: 'mifosx-run-report',
    templateUrl: './run-report.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./run-report.component.scss'],
    imports: [NgIf, MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, NgFor, NgSwitch, NgSwitchCase, MatFormField, FlexDirective, MatLabel, MatInput, MatError, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatSelect, MatOption, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, FaIconComponent, TableAndSmsComponent, ChartComponent, PentahoComponent]
})
export class RunReportComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();

  /** Contains report specifications i.e: name, type and id */
  report: any = {};
  /** Formatted data post labeling of report parameters fetched from API */
  paramData: ReportParameter[] = [];
  /** Array of all parent parameters */
  parentParameters: any[] = [];
  /** Parameter data to configure pentaho output */
  pentahoReportParameters: any[] = [];
  /** Data to be passed on to component selectors */
  dataObject: any;

  /** Initializes new form group eportForm */
  reportForm = new FormGroup({});
  /** Static Form control for decimal places in output */
  decimalChoice = new FormControl();

  /** Toggles Report form */
  isCollapsed = false;
  /** Toggles  Table output. */
  hideTable = true;
   /** Toggles Chart output */
  hideChart = true;
   /** Toggles Pentaho output */
  hidePentaho = true;

  /**
   * Fetches report specifications from route params and retrieves report parameters data from `resolve`.
   * @param {ActivatedRoute} route ActivatedRoute.
   * @param {ReportsService} reportsService ReportsService
   * @param {SettingsService} settingsService Settings Service
   * @param {DatePipe} datePipe Date Pipe
   */
  constructor(private route: ActivatedRoute,
              private reportsService: ReportsService,
               private settingsService: SettingsService,
              private datePipe: DatePipe) {
    this.report.name = this.route.snapshot.params['name']!;
    this.route.queryParams.subscribe((queryParams: any) => {
      this.report.type = queryParams.type;
      this.report.id = queryParams.id;
    });
    this.route.data.subscribe((data: any) => {
      this.paramData = data.reportParameters;
    });
  }

  /**
   * Creates and sets the run report form.
   */
  ngOnInit() {
    this.createRunReportForm();
  }

  /**
   * Establishes form controls for Report Parameter's name attribute,
   * Fetches dropdown options and builds child dependencies.
   */
  createRunReportForm() {
    this.paramData.forEach(
      (param: ReportParameter) => {
        if (!param.parentParameterName) { // Non Child Parameter
          this.reportForm.addControl(param.name, new FormControl('', Validators.required));
          if (param.displayType === 'select') {
            this.fetchSelectOptions(param, param.name);
          }
        } else { // Child Parameter
          const parent: ReportParameter = this.paramData
            .find((entry: any) => entry.name === param.parentParameterName)!;
          parent.childParameters.push(param);
          this.updateParentParameters(parent);
        }
      });
    if (this.report.type === 'Pentaho') {
      this.reportForm.addControl('outputType', new FormControl(''));
      this.mapPentahoParams();
    }
    this.decimalChoice.patchValue('0');
    this.setChildControls();
  }

  /**
   * Updates the array of parent parameters.
   * @param {ReportParameter} parent Parent report parameter
   */
  updateParentParameters(parent: ReportParameter) {
    const parentNames = this.parentParameters.map(parameter => parameter.name);
    if (!parentNames.includes(parent.name)) { // Parent's first child.
      this.parentParameters.push(parent);
    } else { // Parent already has a child
      const index = parentNames.indexOf(parent.name);
      this.parentParameters[index] = parent;
    }
  }

  /**
   * Maps pentaho specific names to form-control names.
   */
  mapPentahoParams() {
    this.reportsService.getPentahoParams(this.report.id).subscribe((data: any) => {
      data.forEach((entry: any) => {
        const param: ReportParameter = this.paramData
         .find((_entry: any) => _entry.name === entry.parameterName)!;
        param.pentahoName = `R_${entry.reportParameterName}`;
      });
    });
  }

  /**
   * Subscribes to changes in parent parameters value, builds child parameter vis-a-vis parent's value.
   */
  setChildControls() {
    this.parentParameters.forEach((param: ReportParameter) => {
      this.reportForm.get(param.name)!.valueChanges.subscribe((option: any) => {
        param.childParameters.forEach((child: ReportParameter) => {
          if (child.displayType === 'none') {
            this.reportForm.addControl(child.name, new FormControl(child.defaultVal));
          } else {
            this.reportForm.addControl(child.name, new FormControl('', Validators.required));
          }
          if (child.displayType === 'select') {
            const inputstring = `${child.name}?${param.inputName}=${option.id}`;
            this.fetchSelectOptions(child, inputstring);
          }
        });
      });
    });
  }

  /**
   * Fetches Select Dropdown options for param type "Select".
   * @param {ReportParameter} param Parameter for which dropdown options are required.
   * @param {string} inputstring url substring for API call.
   */
  fetchSelectOptions(param: ReportParameter, inputstring: string) {
    this.reportsService.getSelectOptions(inputstring).subscribe((options: SelectOption[]) => {
      param.selectOptions = options;
      if (param.selectAll === 'Y') {
        param.selectOptions.push({id: '-1', name: 'All'});
      }
    });
  }

  /**
   * Formats user response and readies it for utilization by run report function.
   * @param {any} response Object containing formcontrol values.
   */
  formatUserResponse(response: any) {
    const formattedResponse: any = {};
    let newKey: string;
    for (const [key, value] of Object.entries(response)) {
      if (key === 'outputType') {
        formattedResponse['output-type'] = value;
        continue;
      }
      const param: ReportParameter = this.paramData
        .find((_entry: any) => _entry.name === key)!;
      newKey = this.report.type === 'Pentaho' ? param.pentahoName : param.inputName;
      switch (param.displayType) {
        case 'text':
          formattedResponse[newKey] = value;
          break;
        case 'select':
          formattedResponse[newKey] = (value as any)['id'];
          break;
        case 'date':
          const dateFormat = this.settingsService.dateFormat;
          formattedResponse[newKey] = this.datePipe.transform(value as string | number | Date as Date, dateFormat);
          break;
        case 'none':
          formattedResponse[newKey] = value;
          break;
      }
    }
    return formattedResponse;
  }

  /**
   * Core run report functionality.
   */
  run() {
    this.isCollapsed = true;
    const userResponse = this.formatUserResponse(this.reportForm.value);
    this.dataObject = {
      formData: userResponse,
      report: this.report,
      decimalChoice: this.decimalChoice.value
    };
    switch (this.report.type) {
      case 'SMS':
      case 'Table':
        this.hideTable = false;
       break;
      case 'Chart':
        this.hideChart = false;
       break;
      case 'Pentaho':
        this.hidePentaho = false;
       break;
    }
  }

}
