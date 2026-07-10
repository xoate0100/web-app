/** Angular Imports */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';

/** Custom Services */
import { ProductsService } from '../../products.service';

/** Custom Components */
import { FloatingRatePeriodDialogComponent } from '../floating-rate-period-dialog/floating-rate-period-dialog.component';
import { DeleteDialogComponent } from 'app/shared/delete-dialog/delete-dialog.component';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDivider } from '@angular/material/divider';
import { MatMiniFabButton, MatIconButton, MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatTooltip } from '@angular/material/tooltip';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';

/**
 * Create Floating Rate Component.
 */
@Component({
    selector: 'mifosx-create-floating-rate',
    templateUrl: './create-floating-rate.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./create-floating-rate.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatInput, NgIf, MatError, MatCheckbox, MatDivider, MatMiniFabButton, FaIconComponent, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, MatTooltip, MatIconButton, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator, MatCardActions, LayoutAlignDirective, MatButton, RouterLink, HasPermissionDirective, DatePipe]
})
export class CreateFloatingRateComponent implements OnInit {

  /** Floating Rate Period Data. */
  floatingRatePeriodsData: any[] = [];
  /** Minimum floating rate period date allowed. */
  minDate = new Date();
  /** Floating Rate Form. */
  floatingRateForm: FormGroup;
  /** Columns to be displayed in floating rate periods table. */
  displayedColumns: string[] = ['fromDate', 'interestRate', 'isDifferential', 'actions'];
  /** Data source for floating rate periods table. */
  dataSource: MatTableDataSource<any>;
  /** Date Format. */
  dateFormat = 'dd MMMM yyyy';

  /** Paginator for floating rate periods table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for floating rate periods table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * @param {Router} router Router for navigation.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {ProductsService} productsService Product Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {DatePipe} datePipe Date Pipe.
   * @param {MatDialog} dialog Dialog reference.
   */
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private productsService: ProductsService,
              private route: ActivatedRoute,
              private datePipe: DatePipe,
              private dialog: MatDialog) { }

  /**
   * Sets the floating rate periods table.
   */
  ngOnInit() {
    this.setFloatingRates();
    this.createFloatingRateForm();
  }

  /**
   * Creates the floating rate form.
   */
  createFloatingRateForm() {
    this.floatingRateForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'isBaseLendingRate': [false],
      'isActive': [false]
    });
  }

  /**
   * Initializes the data source, paginator and sorter for floating rate periods table.
   */
  setFloatingRates() {
    this.dataSource = new MatTableDataSource(this.floatingRatePeriodsData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Creates the Floating Rate Periods Form.
   * @returns {FormGroup} Floating Rate Period Form.
   */
  createFloatingRatePeriodsForm(): FormGroup {
    return this.formBuilder.group({
      'fromDate': ['', Validators.required],
      'interestRate': ['', Validators.required],
      'isDifferentialToBaseLendingRate': [false]
    });
  }

  /**
   * Adds a new floating rate period.
   */
  addFloatingRatePeriod() {
    const floatingRatePeriodDialogRef = this.dialog.open(FloatingRatePeriodDialogComponent, {
      data: {}
    });
    floatingRatePeriodDialogRef.afterClosed().subscribe((response: any) => {
      if (response) {
        this.floatingRatePeriodsData.push({
          fromDate: this.datePipe.transform(response.fromDate, this.dateFormat),
          interestRate: response.interestRate,
          isDifferentialToBaseLendingRate: response.isDifferentialToBaseLendingRate,
          locale: 'en',
          dateFormat: this.dateFormat
        });
        this.dataSource.connect().next(this.floatingRatePeriodsData);
      }
    });
  }

  /**
   * Edits floating rate period.
   * @param {any} ratePeriod Floating Rate Period.
   */
  editFloatingRatePeriod(ratePeriod: any) {
    const editFloatingRatePeriodDialogRef = this.dialog.open(FloatingRatePeriodDialogComponent, {
      data: {
        fromDate: ratePeriod.fromDate,
        interestRate: ratePeriod.interestRate,
        isDifferentialToBaseLendingRate: ratePeriod.isDifferentialToBaseLendingRate
      }
    });
    editFloatingRatePeriodDialogRef.afterClosed().subscribe((response: any) => {
      if (response) {
        this.floatingRatePeriodsData[this.floatingRatePeriodsData.indexOf(ratePeriod)] = {
          fromDate: this.datePipe.transform(response.fromDate, this.dateFormat),
          interestRate: response.interestRate,
          isDifferentialToBaseLendingRate: response.isDifferentialToBaseLendingRate,
          locale: 'en',
          dateFormat: this.dateFormat
        };
        this.dataSource.connect().next(this.floatingRatePeriodsData);
      }
    });
  }

  /**
   * Deletes the floating rate period.
   * @param {any} ratePeriod Floating Rate Period.
   */
  deleteFloatingRatePeriod(ratePeriod: any) {
    const deleteFloatingRatePeriodRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `floating rate period with from date as ${ratePeriod.fromDate}` }
    });
    deleteFloatingRatePeriodRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.floatingRatePeriodsData.splice(this.floatingRatePeriodsData.indexOf(ratePeriod), 1);
        this.dataSource.connect().next(this.floatingRatePeriodsData);
      }
    });
  }

  /**
   * Submits the floating rate form and creates floating rate,
   * if successful redirects to view created floating rate.
   */
  submit() {
    this.floatingRateForm.value.ratePeriods = this.floatingRatePeriodsData;
    this.productsService.createFloatingRate(this.floatingRateForm.value)
      .subscribe((response: any) => {
        this.router.navigate(['../', response.resourceId], { relativeTo: this.route });
      });
  }

}
