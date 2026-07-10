import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'mifosx-share-product-details-step',
    templateUrl: './share-product-details-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./share-product-details-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatInput, MatError, LayoutAlignDirective, MatButton, MatStepperPrevious, FaIconComponent, MatStepperNext]
})
export class ShareProductDetailsStepComponent implements OnInit {

  @Input() shareProductsTemplate: any;

  shareProductDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createShareProductDetailsForm();
  }

  ngOnInit() {
    if (this.shareProductsTemplate) {
      this.shareProductDetailsForm.patchValue({
        'name': this.shareProductsTemplate.name,
        'shortName': this.shareProductsTemplate.shortName,
        'description': this.shareProductsTemplate.description
      });
    }
  }

  createShareProductDetailsForm() {
    this.shareProductDetailsForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'shortName': ['', Validators.required],
      'description': ['']
    });
  }

  get shareProductDetails() {
    return this.shareProductDetailsForm.value;
  }

}
