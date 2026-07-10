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
 * Undo Approval Savings Account Component
 */
@Component({
    selector: 'mifosx-undo-approval-savings-account',
    templateUrl: './undo-approval-savings-account.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./undo-approval-savings-account.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, MatFormField, FlexDirective, MatLabel, MatInput, MatCardActions, LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class UndoApprovalSavingsAccountComponent implements OnInit {

  /** Undo Approval Savings Account form. */
  undoApprovalSavingsAccountForm: FormGroup;
  /** Savings Account Id */
  accountId: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {SavingsService} savingsService Savings Service
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   */
  constructor(private formBuilder: FormBuilder,
              private savingsService: SavingsService,
              private route: ActivatedRoute,
              private router: Router) {
    this.accountId = this.route.parent!.snapshot.params['savingAccountId']!;
  }

  /**
   * Creates the undo-approval savings form.
   */
  ngOnInit() {
    this.createUndoApprovalSavingsAccountForm();
  }

  /**
   * Creates the undo-approval savings account form.
   */
  createUndoApprovalSavingsAccountForm() {
    this.undoApprovalSavingsAccountForm = this.formBuilder.group({
      'note': ['']
    });
  }

  /**
   * Submits the form and undo the approval of share account,
   * if successful redirects to the share account.
   */
  submit() {
    const data = {
      ...this.undoApprovalSavingsAccountForm.value,
    };
    this.savingsService.executeSavingsAccountCommand(this.accountId, 'undoapproval', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
