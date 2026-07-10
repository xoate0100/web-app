/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

/** Custom Services */
import { GroupsService } from 'app/groups/groups.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatFormField, MatLabel, MatSuffix, MatError } from '@angular/material/form-field';
import { FlexDirective, LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatInput } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';

/**
 * Activate Group Component
 */
@Component({
    selector: 'mifosx-activate-group',
    templateUrl: './activate-group.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./activate-group.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, MatFormField, FlexDirective, MatLabel, MatInput, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, NgIf, MatError, MatCardActions, LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink]
})
export class ActivateGroupComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Activate group form. */
  activateGroupForm: FormGroup;
  /** Group Id */
  groupId: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {groupsService} groupsService Groups Service
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
    this.groupId = this.route.parent!.snapshot.params['groupId']!;
  }

  ngOnInit() {
    this.createActivateGroupForm();
  }

  /**
   * Creates the activate group form.
   */
  createActivateGroupForm() {
    this.activateGroupForm = this.formBuilder.group({
      'activationDate': ['', Validators.required]
    });
  }

  /**
   * Submits the form and activates the group,
   * if successful redirects to the group.
   */
  submit() {
    // TODO: Update once language and date settings are setup
    const locale = this.settingsService.language.code;
    const dateFormat = this.settingsService.dateFormat;
    const prevactivationDate: Date = this.activateGroupForm.value.activationDate;
    this.activateGroupForm.patchValue({
      activationDate: this.datePipe.transform(prevactivationDate as Date, dateFormat),
    });
    const data = {
      ...this.activateGroupForm.value,
      dateFormat,
      locale
    };
    this.groupsService.executeGroupCommand(this.groupId, 'activate', data).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
