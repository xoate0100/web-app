/** Angular Imports */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe, NgIf, NgFor, DecimalPipe } from '@angular/common';

/** Custom Services */
import { OrganizationService } from '../organization.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../directives/has-permission/has-permission.directive';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatTooltip } from '@angular/material/tooltip';

/**
 * View Standing Instructions History Component.
 */
@Component({
    selector: 'mifosx-standing-instructions-history',
    templateUrl: './standing-instructions-history.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./standing-instructions-history.component.scss'],
    imports: [NgIf, MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatSelect, NgFor, MatOption, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective, FaIconComponent, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, MatTooltip, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator, DecimalPipe]
})
export class StandingInstructionsHistoryComponent implements OnInit {

  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();
  /** Instruction  form. */
  instructionForm: FormGroup;
  /** Standing Instructions Template */
  standingInstructionsTemplate: any;
  /** Toggles b/w form and table */
  isCollapsed = false;

  /** Columns to be displayed in instructions table. */
  displayedColumns: string[] = ['fromClient', 'fromAccount', 'toClient', 'toAccount', 'executionTime', 'amount', 'status', 'errorLog'];
  /** Data source for instructions table. */
  dataSource: MatTableDataSource<any>;

  /** Paginator for instructions table. */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /** Sorter for instructions table. */
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Retrieves the instructions template from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {OrganizationService} organizationService Organization Service.
   * @param {SettingsService} settingsService Settings Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {DatePipe} datePipe Date Pipe to format date.
   */
  constructor(private formBuilder: FormBuilder,
              private organizationService: OrganizationService,
              private settingsService: SettingsService,
              private router: Router,
              private route: ActivatedRoute,
              private datePipe: DatePipe) {
    this.route.data.subscribe((data: any) => {
      this.standingInstructionsTemplate = data.standingInstructionsTemplate;
    });
  }

  ngOnInit() {
    this.createInstructionForm();
    this.buildDependencies();
  }

  /**
   * Creates the Instruction Form
   */
  createInstructionForm() {
    this.instructionForm = this.formBuilder.group({
      'clientName': [''],
      'clientId': [''],
      'transferType': [''],
      'fromAccountType': [''],
      'fromDate': [''],
      'toDate': ['']
    });
  }

  /**
   * Sets conditional child controls.
   */
  buildDependencies() {
    this.instructionForm.get('fromAccountType')!.valueChanges.subscribe(() => {
      this.instructionForm.addControl('fromAccountId', new FormControl(''));
    });
  }

  /**
   * Initializes the data source, paginator and sorter for instructions table.
   * @param {any} data
   */
  setInstructions(data: any) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Searches standing instructions.
   */
  search() {
    this.isCollapsed = true;
    // TODO: Update once language and date settings are setup
    const dateFormat = this.settingsService.dateFormat;
    const instruction = this.instructionForm.value;
    instruction.locale = this.settingsService.language.code;
    instruction.dateFormat = dateFormat;
    instruction.fromDate = this.datePipe.transform(instruction.fromDate as Date, dateFormat);
    instruction.toDate = this.datePipe.transform(instruction.toDate as Date, dateFormat);
    this.organizationService.getStandingInstructions(instruction).subscribe((response: any) => {
      this.setInstructions(response.pageItems);
    });
  }

}
