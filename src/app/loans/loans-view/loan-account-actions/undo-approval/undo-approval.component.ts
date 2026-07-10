/** Angular Imports. */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services. */
import { LoansService } from 'app/loans/loans.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FlexDirective, LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';
/**
 * Undo Loan component.
 */
@Component({
    selector: 'mifosx-undo-approval',
    templateUrl: './undo-approval.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./undo-approval.component.scss'],
    imports: [MatCard, MatCardContent, MatFormField, FlexDirective, MatLabel, MatInput, ReactiveFormsModule, MatCardActions, LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class UndoApprovalComponent implements OnInit {

  /** Form Controller. */
  note: FormControl;

  /**
   * @param loanService Loan Service.
   * @param route Activated Route.
   * @param router Router.
   */
  constructor(private loanService: LoansService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.note = this.formBuilder.control('');
  }

  /**
   * Submits undo approval form.
   */
  submit() {
    const loanId = this.route.parent!.snapshot.params['loanId']!;
    this.loanService.loanActionButtons(loanId, 'undoapproval', { 'note': this.note.value }).subscribe((response: any) => {
      this.router.navigate(['../../general'], {relativeTo: this.route});
    });
  }

}
