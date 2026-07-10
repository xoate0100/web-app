/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe, NgIf, NgFor } from '@angular/common';

/** Custom Services */
import { GroupsService } from 'app/groups/groups.service';
import { CentersService } from '../centers.service';
import { SettingsService } from 'app/settings/settings.service';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatIconButton, MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatNavList, MatListSubheaderCssMatStyler } from '@angular/material/list';
import { MatLine } from '@angular/material/grid-list';
import { HasPermissionDirective } from '../../directives/has-permission/has-permission.directive';

/**
 * Create Center component.
 */
@Component({
    selector: 'mifosx-create-center',
    templateUrl: './create-center.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./create-center.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, MatFormField, MatLabel, MatInput, NgIf, MatError, MatSelect, NgFor, MatOption, MatCheckbox, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatIconButton, FaIconComponent, MatNavList, MatListSubheaderCssMatStyler, MatLine, MatCardActions, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, HasPermissionDirective]
})
export class CreateCenterComponent implements OnInit {

  /** Minimum date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum date allowed. */
  maxDate = new Date();
  /** Center form. */
  centerForm: FormGroup;
  /** Office data. */
  officeData: any;
  /** Group data. */
  groupsData: any;
  /** Staff data. */
  staffData: any;
  /** Group Members. */
  groupMembers: any[] = [];
  /** Group Choice. */
  groupChoice = new FormControl('');

  /**
   * Retrieves the offices data from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {CentersService} centerService CentersService.
   * @param {SettingsService} settingsService Settings Service.
   * @param {GroupsService} groupService GroupsService.
   * @param {DatePipe} datePipe Date Pipe to format date.
   */
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private centerService: CentersService,
              private settingsService: SettingsService,
              private groupService: GroupsService,
              private datePipe: DatePipe) {
    this.route.data.subscribe((data: any) => {
      this.officeData = data.offices;
    });
  }

  /**
   * Creates and sets the center form.
   */
  ngOnInit() {
    this.createCenterForm();
  }

  /**
   * Creates the center form.
   */
  createCenterForm() {
    this.centerForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.pattern('(^[A-z]).*')]],
      'officeId': ['', Validators.required],
      'submittedOnDate': ['', Validators.required],
      'staffId': [''],
      'externalId': [''],
      'active': [''],
    });
    this.buildDependencies();
  }

  /**
   * Sets the staff and groups data each time the user selects a new office.
   * Adds form control Activation Date if active.
   */
  buildDependencies() {
    this.centerForm.get('officeId')!.valueChanges.subscribe( (option: any) => {
      this.groupService.getGroupsByOfficeId(option).subscribe( (data: any) => {
        this.groupsData = data;
        if (!this.groupsData.length) {
          this.groupChoice.disable();
        } else {
          this.groupChoice.enable();
        }
      });
      this.centerService.getStaff(option).subscribe( (data: any) => {
        this.staffData = data['staffOptions'];
        if (this.staffData === undefined) {
          this.centerForm.controls['staffId']!.disable();
        } else {
          this.centerForm.controls['staffId']!.enable();
        }
      });
    });
    this.centerForm.get('active')!.valueChanges.subscribe( (bool: boolean) => {
      if (bool) {
        this.centerForm.addControl('activationDate', new FormControl('', Validators.required));
      } else {
        this.centerForm.removeControl('activationDate');
      }
    });
  }

  /**
   * Add group.
   */
  addGroup() {
    if (!this.groupMembers.includes(this.groupChoice.value)) {
      this.groupMembers.push(this.groupChoice.value);
    }
  }

  /**
   * Remove group.
   */
  removeGroup(index: number) {
    this.groupMembers.splice(index, 1);
  }

  /**
   * Submits the center form and creates center,
   * if successful redirects to centers.
   */
  submit() {
      const prevSubmittedOnDate: Date = this.centerForm.value.submittedOnDate;
      const prevActivationDate: Date = this.centerForm.value.activationDate;
      // TODO: Update once language and date settings are setup
      const dateFormat = this.settingsService.dateFormat;
      this.centerForm.patchValue({
        submittedOnDate: this.datePipe.transform(prevSubmittedOnDate as Date, dateFormat),
        activationDate: this.datePipe.transform(prevActivationDate as Date, dateFormat)
      });
      const center = this.centerForm.value;
      center.locale = this.settingsService.language.code;
      center.dateFormat = dateFormat;
      center.groupMembers = [];
      this.groupMembers.forEach((group: any) => center.groupMembers.push(group.id));
      this.centerService.createCenter(center).subscribe((response: any) => {
        this.router.navigate(['../centers']);
      });
    }

}
