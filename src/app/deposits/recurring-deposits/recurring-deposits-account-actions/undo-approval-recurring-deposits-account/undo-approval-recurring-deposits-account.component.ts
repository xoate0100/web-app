/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { RecurringDepositsService } from '../../recurring-deposits.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FlexDirective, LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

/**
 * Undo Approval Recurring Deposits Account Component
 */
@Component({
    selector: 'mifosx-undo-approval-recurring-deposits-account',
    templateUrl: './undo-approval-recurring-deposits-account.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./undo-approval-recurring-deposits-account.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, MatFormField, FlexDirective, MatLabel, MatInput, MatCardActions, LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class UndoApprovalRecurringDepositsAccountComponent implements OnInit {

  /** Undo Approval Recurring Deposits Account form. */
  undoApprovalRecurringDepositsAccountForm: FormGroup;
  /** Recurring Deposits Account Id */
  accountId: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {SavingsService} recurringDepositsService Recurring Deposits Service
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   */
  constructor(private formBuilder: FormBuilder,
    private recurringDepositsService: RecurringDepositsService,
    private route: ActivatedRoute,
    private router: Router) {
    this.accountId = this.route.parent!.snapshot.params['recurringDepositAccountId']!;
  }

  /**
   * Creates the undo-approval recurring deposits form.
   */
  ngOnInit() {
    this.createUndoApprovalRecurringDepositsAccountForm();
  }

  /**
   * Creates the undo-approval recurring deposits account form.
   */
  createUndoApprovalRecurringDepositsAccountForm() {
    this.undoApprovalRecurringDepositsAccountForm = this.formBuilder.group({
      'note': ['']
    });
  }

  /**
   * Submits the form and undo the approval of recurring deposits account,
   * if successful redirects to the recurring deposits account.
   */
  submit() {
    const data = {
      ...this.undoApprovalRecurringDepositsAccountForm.value,
    };
    this.recurringDepositsService.executeRecurringDepositsAccountCommand(this.accountId, 'undoapproval', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
