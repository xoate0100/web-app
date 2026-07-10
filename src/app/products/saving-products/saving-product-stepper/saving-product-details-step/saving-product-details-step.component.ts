import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'mifosx-saving-product-details-step',
    templateUrl: './saving-product-details-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./saving-product-details-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatInput, MatError, LayoutAlignDirective, MatButton, MatStepperPrevious, FaIconComponent, MatStepperNext]
})
export class SavingProductDetailsStepComponent implements OnInit {

  @Input() savingProductsTemplate: any;

  savingProductDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createSavingProductDetailsForm();
  }

  ngOnInit() {
    if (this.savingProductsTemplate) {
      this.savingProductDetailsForm.patchValue({
        'name': this.savingProductsTemplate.name,
        'shortName': this.savingProductsTemplate.shortName,
        'description': this.savingProductsTemplate.description
      });
    }
  }

  createSavingProductDetailsForm() {
    this.savingProductDetailsForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'shortName': ['', Validators.required],
      'description': ['']
    });
  }

  get savingProductDetails() {
    return this.savingProductDetailsForm.value;
  }

}
