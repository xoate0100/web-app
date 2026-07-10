/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgIf, NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { GroupsService } from 'app/groups/groups.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, FlexDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';

/**
 * Close Group Component
 */
@Component({
    selector: 'mifosx-close-group',
    templateUrl: './close-group.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./close-group.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, FlexDirective, MatSelect, NgFor, MatOption, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class CloseGroupComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Close Group form. */
  closeGroupForm: FormGroup;
  /** Group Closure Data */
  closureData: any;
  /** Group Id */
  groupId: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {GroupsService} groupsService Shares Service
   * @param {DatePipe} datePipe Date Pipe
   * @param {ActivatedRoute} route Activated Route
   * @param {Router} router Router
   * @param {SettingsService} settingsService SettingsService
   */
  constructor(private formBuilder: FormBuilder,
              private groupsService: GroupsService,
              private datePipe: DatePipe,
              private route: ActivatedRoute,
              private router: Router,
              private settingsService: SettingsService) {
    this.route.data.subscribe((data: any) => {
      this.closureData = data.groupActionData.closureReasons;
    });
    this.groupId = this.route.parent!.snapshot.params['groupId']!;
  }

  ngOnInit() {
    this.createCloseGroupForm();
  }

  /**
   * Creates the close group form.
   */
  createCloseGroupForm() {
    this.closeGroupForm = this.formBuilder.group({
      'closureDate': ['', Validators.required],
      'closureReasonId': ['', Validators.required]
    });
  }

  /**
   * Submits the form and closes the group.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const prevClosedDate: Date = this.closeGroupForm.value.closureDate;
    this.closeGroupForm.patchValue({
      closureDate: this.datePipe.transform(prevClosedDate as Date, dateFormat),
    });
    const data = {
      ...this.closeGroupForm.value,
      dateFormat,
      locale
    };
    this.groupsService.executeGroupCommand(this.groupId, 'close', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
