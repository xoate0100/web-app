/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

/** Custom Services */
import { ReportsService } from 'app/reports/reports.service';
import { LayoutDirective, LayoutGapDirective, LayoutAlignDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

/**
 * Export Client Savings Transactions Component
 */
@Component({
    selector: 'mifosx-export-transactions',
    templateUrl: './export-transactions.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./export-transactions.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, LayoutAlignDirective, MatFormField, FlexDirective, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatError, MatButton, RouterLink, FaIconComponent, NgIf]
})
export class ExportTransactionsComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Transactions Report Form */
  transactionsReportForm: any;
  /** substitute for resolver */
  hideOutput = true;
  /** trusted resource url for pentaho output */
  pentahoUrl: any;
  /** Savings Account Id */
  savingsAccountId: any;

  /**
   * Fetches savings account data from grandparent's `resolve`
   * @param {DomSanitizer} sanitizer DOM Sanitizer
   * @param {ReportsService} reportsService Reports Service
   * @param {FormBuilder} formBuilder Form Builder
   * @param {DatePipe} datePipe Date Pipe
   * @param {ActivatedRoute} route Activated Route
   */
  constructor(private sanitizer: DomSanitizer,
              private reportsService: ReportsService,
              private formBuilder: FormBuilder,
              private datePipe: DatePipe,
              private route: ActivatedRoute) {
    this.route.parent!.parent!.data.subscribe((data: any) => {
      this.savingsAccountId = data.savingsAccountData.accountNo;
    });
  }


  ngOnInit() {
    this.createTransactionsReportForm();
  }

  /**
   * Creates the transactions report form.
   */
  createTransactionsReportForm() {
    this.transactionsReportForm = this.formBuilder.group({
      'fromDate': ['', Validators.required],
      'toDate': ['', Validators.required],
    });
  }

  /**
   * Generates client savings transactions report.
   */
  generate() {
    const data = {
      'output-type':	'PDF',
      R_startDate:	this.datePipe.transform(this.transactionsReportForm.value.fromDate, 'yyyy-MM-dd'),
      R_endDate:	this.datePipe.transform(this.transactionsReportForm.value.toDate, 'yyyy-MM-dd'),
      R_savingsAccountId:	this.savingsAccountId
    };
    this.reportsService.getPentahoRunReportData('Client Saving Transactions', data, 'default', 'en', 'dd MMMM yyyy')
      .subscribe( (res: any) => {
        const contentType = res.headers.get('Content-Type');
        const file = new Blob([res.body], {type: contentType});
        const filecontent = URL.createObjectURL(file);
        this.pentahoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(filecontent);
        this.hideOutput = false;
      });
  }

}
