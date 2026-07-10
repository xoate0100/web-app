/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { SavingsService } from 'app/savings/savings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FlexDirective, LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

/**
 * Undo Approval Fixed Deposits Account Component
 */
@Component({
    selector: 'mifosx-undo-approval-fixed-deposits-account',
    templateUrl: './undo-approval-fixed-deposits-account.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./undo-approval-fixed-deposits-account.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, MatFormField, FlexDirective, MatLabel, MatInput, MatCardActions, LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class UndoApprovalFixedDepositsAccountComponent implements OnInit {

  /** Undo Approval Fixed Deposits Account form. */
  undoApprovalFixedDepositsAccountForm: FormGroup;
  /** Fixed Deposits Account Id */
  accountId: any;

  /**
   * Fixed deposits endpoint is not supported so using Savings endpoint.
   * @param {FormBuilder} formBuilder Form Builder
   * @param {SavingsService} savingsService Savings Service
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   */
  constructor(private formBuilder: FormBuilder,
              private savingsService: SavingsService,
              private route: ActivatedRoute,
              private router: Router) {
    this.accountId = this.route.parent!.snapshot.params['fixedDepositAccountId']!;
  }

  /**
   * Creates the undo-approval fixed deposits form.
   */
  ngOnInit() {
    this.createUndoApprovalFixedDepositsAccountForm();
  }

  /**
   * Creates the undo-approval fixed deposits account form.
   */
  createUndoApprovalFixedDepositsAccountForm() {
    this.undoApprovalFixedDepositsAccountForm = this.formBuilder.group({
      'note': ['']
    });
  }

  /**
   * Submits the form and undo the approval of fixed deposits account,
   * if successful redirects to the share account.
   */
  submit() {
    const data = {
      ...this.undoApprovalFixedDepositsAccountForm.value,
    };
    this.savingsService.executeSavingsAccountCommand(this.accountId, 'undoapproval', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
