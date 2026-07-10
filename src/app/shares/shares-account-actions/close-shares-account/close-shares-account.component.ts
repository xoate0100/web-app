/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { SharesService } from 'app/shares/shares.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';

/**
 * Close Shares Account Component
 */
@Component({
    selector: 'mifosx-close-shares-account',
    templateUrl: './close-shares-account.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./close-shares-account.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class CloseSharesAccountComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Close Share Account form. */
  closeSharesAccountForm: FormGroup;
  /** Shares Account Id */
  accountId: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {SharesService} sharesService Shares Service
   * @param {DatePipe} datePipe Date Pipe
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   */
  constructor(private formBuilder: FormBuilder,
              private sharesService: SharesService,
              private datePipe: DatePipe,
              private route: ActivatedRoute,
              private router: Router) {
    this.accountId = this.route.parent!.snapshot.params['shareAccountId']!;
  }

  /**
   * Creates the close shares form.
   */
  ngOnInit() {
    this.createCloseSharesAccountForm();
  }

  /**
   * Creates the close shares account form.
   */
  createCloseSharesAccountForm() {
    this.closeSharesAccountForm = this.formBuilder.group({
      'closedDate': ['', Validators.required],
      'note': ['']
    });
  }

  /**
   * Submits the form and closes the share account,
   * if successful redirects to the share account.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = 'en';
    const dateFormat = 'dd MMMM yyyy';
    const prevClosedDate: Date = this.closeSharesAccountForm.value.closedDate;
    this.closeSharesAccountForm.patchValue({
      closedDate: this.datePipe.transform(prevClosedDate as Date, dateFormat),
    });
    const data = {
      ...this.closeSharesAccountForm.value,
      dateFormat,
      locale
    };
    this.sharesService.executeSharesAccountCommand(this.accountId, 'close', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
