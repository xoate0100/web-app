/** Angular Imports */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe, NgIf, NgFor } from '@angular/common';

/** Custom Services */
import { OrganizationService } from '../organization.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutGapDirective, LayoutAlignDirective, FlexDirective, FlexFillDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { ShowHideDirective } from '@ngbracket/ngx-layout/extended';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

/**
 * Fund Mapping Component.
 */
@Component({
    selector: 'mifosx-fund-mapping',
    templateUrl: './fund-mapping.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./fund-mapping.component.scss'],
    imports: [NgIf, MatCard, ReactiveFormsModule, LayoutDirective, LayoutGapDirective, LayoutAlignDirective, MatFormField, FlexDirective, MatLabel, MatSelect, MatOption, ShowHideDirective, NgFor, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatError, MatCheckbox, FlexFillDirective, MatCardActions, MatButton, RouterLink, FaIconComponent, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator]
})
export class FundMappingComponent implements OnInit {

  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();
  /** Fund mapping form. */
  fundMappingForm: FormGroup;
  /** Advance Search Template */
  advanceSearchTemplate: any;
  /** Toggles b/w form and table */
  isCollapsed = false;

  /** Columns to be displayed in loans table. */
  displayedColumns: string[] = ['officeName', 'productName', 'count', 'outstanding', 'percentage'];
  /** Data source for loans table. */
  dataSource: MatTableDataSource<any>;

  /** Paginator for loans table. */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /** Sorter for loans table. */
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Retrieves the advance search template from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {OrganizationService} organizationService Organization Service.
   * @param {SettingsService} settingsService Settings Service.
   * @param {Router} router Router for navigation.
   * @param {DatePipe} datePipe Date Pipe to format date.
   */
  constructor(private formBuilder: FormBuilder,
              private organizationService: OrganizationService,
              private settingsService: SettingsService,
              private route: ActivatedRoute,
              private datePipe: DatePipe) {
    this.route.data.subscribe((data: any) => {
      this.advanceSearchTemplate = data.advanceSearchTemplate;
    });
  }

  ngOnInit() {
    this.createFundMappingForm();
    this.buildDependencies();
  }

  /**
   * Creates the Fund Mapping Form
   */
  createFundMappingForm() {
    this.fundMappingForm = this.formBuilder.group({
      'loanStatus': [''],
      'loanProducts': [''],
      'offices': [''],
      'loanDateOption': ['', Validators.required],
      'loanFromDate': ['', Validators.required],
      'loanToDate': ['', Validators.required],
      'includeOutStandingAmountPercentage': [false],
      'includeOutstandingAmount': [false]
    });
  }

  /**
   * Sets conditional child controls.
   */
  buildDependencies() {
    this.fundMappingForm.get('includeOutStandingAmountPercentage')!.valueChanges.subscribe((value: boolean) => {
      if (value) {
        this.fundMappingForm.addControl('outStandingAmountPercentageCondition', new FormControl('', Validators.required));
        this.fundMappingForm.get('outStandingAmountPercentageCondition')!.valueChanges.subscribe((_value: string) => {
          if (_value === 'between') {
            this.fundMappingForm.addControl('minOutStandingAmountPercentage', new FormControl('', Validators.required));
            this.fundMappingForm.addControl('maxOutStandingAmountPercentage', new FormControl('', Validators.required));
            this.fundMappingForm.removeControl('outStandingAmountPercentage');
          } else {
            this.fundMappingForm.addControl('outStandingAmountPercentage', new FormControl('', Validators.required));
            this.fundMappingForm.removeControl('minOutStandingAmountPercentage');
            this.fundMappingForm.removeControl('maxOutStandingAmountPercentage');
          }
        });
        this.fundMappingForm.get('outStandingAmountPercentageCondition')!.patchValue('between');
      } else {
        this.fundMappingForm.removeControl('outStandingAmountPercentageCondition');
        this.fundMappingForm.removeControl('minOutStandingAmountPercentage');
        this.fundMappingForm.removeControl('maxOutStandingAmountPercentage');
        this.fundMappingForm.removeControl('outStandingAmountPercentage');
      }
    });
    this.fundMappingForm.get('includeOutStandingAmountPercentage')!.patchValue(true);
    this.fundMappingForm.get('includeOutstandingAmount')!.valueChanges.subscribe((value: boolean) => {
      if (value) {
        this.fundMappingForm.addControl('outstandingAmountCondition', new FormControl('', Validators.required));
        this.fundMappingForm.get('outstandingAmountCondition')!.valueChanges.subscribe((_value: string) => {
          if (_value === 'between') {
            this.fundMappingForm.addControl('minOutstandingAmount', new FormControl('', Validators.required));
            this.fundMappingForm.addControl('maxOutstandingAmount', new FormControl('', Validators.required));
            this.fundMappingForm.removeControl('outstandingAmount');
          } else {
            this.fundMappingForm.addControl('outstandingAmount', new FormControl('', Validators.required));
            this.fundMappingForm.removeControl('minOutstandingAmount');
            this.fundMappingForm.removeControl('maxOutstandingAmount');
          }
        });
        this.fundMappingForm.get('outstandingAmountCondition')!.patchValue('between');
      } else {
        this.fundMappingForm.removeControl('outstandingAmountCondition');
        this.fundMappingForm.removeControl('minOutstandingAmount');
        this.fundMappingForm.removeControl('maxOutstandingAmount');
        this.fundMappingForm.removeControl('outstandingAmount');
      }
    });
    this.fundMappingForm.get('includeOutstandingAmount')!.patchValue(true);
  }

  /**
   * Initializes the data source, paginator and sorter for loans table.
   * @param {any} data
   */
  setLoans(data: any) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Searches standing loans.
   */
  submit() {
    this.isCollapsed = true;
    // TODO: Update once language and date settings are setup
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    this.fundMappingForm.patchValue({
      'loanFromDate': this.datePipe.transform(this.fundMappingForm.value.loanFromDate as Date, dateFormat),
      'loanToDate': this.datePipe.transform(this.fundMappingForm.value.loanToDate as Date, dateFormat)
    });
    const fundMapping = {
      ...this.fundMappingForm.value,
      entities: ['loans'],
      dateFormat,
      locale
    };
    this.organizationService.retrieveAdvanceSearchResults(fundMapping).subscribe((response: any) => {
      this.setLoans(response);
    });
  }

}
