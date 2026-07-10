import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'mifosx-share-product-details-step',
  templateUrl: './share-product-details-step.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./share-product-details-step.component.scss']
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
