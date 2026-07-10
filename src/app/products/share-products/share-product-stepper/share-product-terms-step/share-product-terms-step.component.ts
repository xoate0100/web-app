import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'mifosx-share-product-terms-step',
    templateUrl: './share-product-terms-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./share-product-terms-step.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatInput, MatError, MatHint, LayoutAlignDirective, MatButton, MatStepperPrevious, FaIconComponent, MatStepperNext]
})
export class ShareProductTermsStepComponent implements OnInit {

  @Input() shareProductsTemplate: any;

  shareProductTermsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createShareProductTermsForm();
  }

  ngOnInit() {
    combineLatest([
      this.shareProductTermsForm.get('sharesIssued')!.valueChanges,
      this.shareProductTermsForm.get('unitPrice')!.valueChanges
    ]).subscribe(([sharesIssued, unitPrice]: number[]) => {
      this.shareProductTermsForm.get('shareCapital')!.setValue(sharesIssued * unitPrice);
    });

    if (this.shareProductsTemplate) {
      this.shareProductTermsForm.patchValue({
        'totalShares': this.shareProductsTemplate.totalShares,
        'sharesIssued': this.shareProductsTemplate.totalSharesIssued,
        'unitPrice': this.shareProductsTemplate.unitPrice,
        'shareCapital': this.shareProductsTemplate.shareCapital
      });
    }
  }

  createShareProductTermsForm() {
    this.shareProductTermsForm = this.formBuilder.group({
      'totalShares': ['', Validators.required],
      'sharesIssued': ['', Validators.required],
      'unitPrice': ['', Validators.required],
      'shareCapital': ['']
    });
  }

  get shareProductTerms() {
    return this.shareProductTermsForm.value;
  }

}
