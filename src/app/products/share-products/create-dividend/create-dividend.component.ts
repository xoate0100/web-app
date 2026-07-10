/** Angular Imports. */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe, NgIf } from '@angular/common';

/** Custom Services. */
import { ProductsService } from 'app/products/products.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';

/**
 * Create Dividend component.
 */
@Component({
    selector: 'mifosx-create-dividend',
    templateUrl: './create-dividend.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./create-dividend.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class CreateDividendComponent implements OnInit {

  /** Create Dividend Form. */
  createDividendForm: FormGroup;
  /** Share Product data. */
  shareProductData: any;
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();

  /**
   * Get Share Product data from `Resolver`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router.
   */
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private datePipe: DatePipe,
              private productService: ProductsService,
              private router: Router) {
    this.route.data.subscribe((data: any) => {
      this.shareProductData = data.shareProduct;
    });
  }

  ngOnInit() {
    this.setDividendForm();
  }

  /**
   * Sets Create Dividend from.
   */
  setDividendForm() {
    this.createDividendForm = this.formBuilder.group({
      'dividendPeriodStartDate': ['', Validators.required],
      'dividendPeriodEndDate': ['', Validators.required],
      'dividendAmount': ['', Validators.required]
    });
  }

  /**
   * Submits Create Dividend form.
   */
  submit() {
    const dateFormat = 'yyyy-MM-dd';
    const startDate = this.createDividendForm.value.dividendPeriodStartDate;
    const endDate = this.createDividendForm.value.dividendPeriodEndDate;
    this.createDividendForm.patchValue({
      'dividendPeriodStartDate': this.datePipe.transform(startDate as Date, dateFormat),
      'dividendPeriodEndDate': this.datePipe.transform(endDate as Date, dateFormat)
    });
    const dividendForm = this.createDividendForm.value;
    dividendForm.locale = 'en';
    dividendForm.dateFormat = dateFormat;
    this.productService.createDividend(this.shareProductData.id, dividendForm).subscribe((response: any) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

}
