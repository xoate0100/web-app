/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe, NgIf } from '@angular/common';

/** Custom Services */
import { ProductsService } from '../../products.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';

/**
 * Edit tax component.
 */
@Component({
    selector: 'mifosx-edit-tax-component',
    templateUrl: './edit-tax-component.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-tax-component.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, NgIf, MatError, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class EditTaxComponentComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Tax Component form. */
  taxComponentForm: FormGroup;
  /** Tax Component data. */
  taxComponentData: any;

  /**
   * Retrieves the offices data from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {ProductsService} productsService Products Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {DatePipe} datePipe Date Pipe to format date.
   */
  constructor(private formBuilder: FormBuilder,
              private productsService: ProductsService,
              private route: ActivatedRoute,
              private router: Router,
              private datePipe: DatePipe) {
    this.route.data.subscribe((data: any) => {
      this.taxComponentData = data.taxComponent;
    });
  }

  /**
   * Creates the edit tax component form.
   */
  ngOnInit() {
    this.editTaxComponent();
  }

  /**
   * Edit tax component form.
   */
  editTaxComponent() {
    this.taxComponentForm = this.formBuilder.group({
      'name': [this.taxComponentData.name, [Validators.required]],
      'percentage': [this.taxComponentData.percentage, [Validators.required, Validators.pattern('^(0*[1-9][0-9]*(\\.[0-9]+)?|0+\\.[0-9]*[1-9][0-9]*)$'), Validators.max(100)]],
      'startDate': [this.taxComponentData.startDate && new Date(this.taxComponentData.startDate)],
      'creditAccountType': [{value: this.taxComponentData.creditAccountType.value, disabled: true}],
      'creditAccount': [{value: this.taxComponentData.creditAccount.name, disabled: true}]
    });
  }

  /**
   * Submits the edit tax component form and edits tax component,
   * if successfull redirects to tax component.
   */
  submit() {
    const prevStartDate: Date = this.taxComponentForm.value.startDate;
    // TODO: Update once language and date settings are setup
    const dateFormat = 'yyyy-MM-dd';
    this.taxComponentForm.patchValue({
      startDate: this.datePipe.transform(prevStartDate as Date, dateFormat)
    });
    const taxComponent = this.taxComponentForm.value;
    taxComponent.locale = 'en';
    taxComponent.dateFormat = dateFormat;
    this.productsService.updateTaxComponent(this.taxComponentData.id, taxComponent).subscribe((response: any) => {
      this.router.navigate(['../../', response.resourceId], { relativeTo: this.route });
    });
  }

}
