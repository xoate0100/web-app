/** Angular Imports */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

/** Custom Dialogs */
import { FormDialogComponent } from 'app/shared/form-dialog/form-dialog.component';

/** Custom Models */
import { FormfieldBase } from 'app/shared/form-dialog/formfield/model/formfield-base';
import { InputBase } from 'app/shared/form-dialog/formfield/model/input-base';

/** Custom Services */
import { OrganizationService } from '../organization.service';
import { MatCard } from '@angular/material/card';
import { HasPermissionDirective } from '../../directives/has-permission/has-permission.directive';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf, NgFor } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';

/**
 * Manage Funds component.
 */
@Component({
    selector: 'mifosx-manage-funds',
    templateUrl: './manage-funds.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./manage-funds.component.scss'],
    imports: [MatCard, HasPermissionDirective, ReactiveFormsModule, LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatFormField, FlexDirective, MatInput, NgIf, MatError, MatButton, FaIconComponent, MatGridList, NgFor, MatGridTile]
})
export class ManageFundsComponent implements OnInit {

  /** Manage Funds data. */
  fundsData: any;
  /** New Fund form */
  fundForm: any;
  /** Funds form reference */
  @ViewChild('formRef') formRef: any;

  /**
   * Retrieves the manage funds data from `resolve`.
   * @param {ActivatedRoute} route Activated Route
   * @param {FormBuilder} formBuilder Form Builder
   * @param {OrganizationService} organizationservice Organization Service
   * @param {MatDialog} dialog Mat Dialog
   */
  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private organizationservice: OrganizationService,
              public dialog: MatDialog) {
    this.route.data.subscribe((data: any) => {
      this.fundsData = data.funds;
    });
  }

  ngOnInit() {
    this.createFundForm();
  }

  /**
   * Creates the fund form.
   */
  createFundForm() {
    this.fundForm = this.formBuilder.group({
      'name': ['', Validators.required]
    });
  }

  /**
   * Adds a new fund to the list.
   */
  addFund() {
    const newFund = this.fundForm.value;
    this.organizationservice.createFund(newFund).subscribe((response: any) => {
        this.fundsData.push({
          id: response.resourceId,
          name: newFund.name
        });
      this.formRef.resetForm();
    });
  }

  /**
   * Edits the selected fund.
   * @param {string} fundId Fund Id.
   * @param {string} fundContent Fund's content.
   * @param {number} index  Index of fund.
   */
  editFund(fundId: string, fundContent: string, index: number) {
    const formfields: FormfieldBase[] = [
      new InputBase({
        controlName: 'name',
        label: 'Fund Content',
        value: fundContent,
        type: 'text',
        required: true
      }),
    ];
    const data = {
      title: 'Edit Fund',
      layout: { addButtonText: 'Confirm' },
      formfields: formfields
    };
    const editFundDialogRef = this.dialog.open(FormDialogComponent, { data });
    editFundDialogRef.afterClosed().subscribe((response: any) => {
      if (response.data) {
        this.organizationservice.editFund(fundId, response.data.value).subscribe(() => {
          this.fundsData[index].name = response.data.value.name;
        });
      }
    });
  }

}
