/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

/** Custom Services */
import { LoansService } from '../../../loans.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FlexDirective, LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { HasPermissionDirective } from '../../../../directives/has-permission/has-permission.directive';

/**
 * Undo Disbursal component.
 */
@Component({
    selector: 'mifosx-undo-disbursal',
    templateUrl: './undo-disbursal.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./undo-disbursal.component.scss'],
    imports: [MatCard, MatCardContent, MatFormField, FlexDirective, MatLabel, MatInput, ReactiveFormsModule, MatCardActions, LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class UndoDisbursalComponent implements OnInit {

  /** Loan ID. */
  loanId: any;
  /** Undo disbursal form. */
  note: FormControl;

  /**
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {LoansService} loansService Loans Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   */
  constructor(private formBuilder: FormBuilder,
              private loansService: LoansService,
              private router: Router,
              private route: ActivatedRoute) {
    this.loanId = this.route.parent!.snapshot.params['loanId']!;
  }

  /**
   * Creates the undo disbursal form.
   */
  ngOnInit() {
    this.note = this.formBuilder.control('');
  }

  /**
   * Submits the undo disbursal form.
   */
  submit() {
    this.loansService.loanActionButtons(this.loanId, 'undodisbursal', {'note': this.note.value}).subscribe((response: any) => {
      this.router.navigate(['../../general'], { relativeTo: this.route });
    });
  }

}
