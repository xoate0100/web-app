/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe, NgIf, NgFor } from '@angular/common';

/** Custom Services */
import { ClientsService } from '../../../clients.service';
import { SettingsService } from 'app/settings/settings.service';
import { LayoutDirective, LayoutAlignDirective, FlexDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';

/**
 * Edit Family Member Component
 */
@Component({
    selector: 'mifosx-edit-family-member',
    templateUrl: './edit-family-member.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-family-member.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutAlignDirective, MatFormField, FlexDirective, MatLabel, MatInput, NgIf, MatError, MatCheckbox, MatSelect, NgFor, MatOption, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, LayoutGapDirective, MatButton, RouterLink]
})
export class EditFamilyMemberComponent implements OnInit {

  /** Minimum Due Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Due Date allowed. */
  maxDate = new Date();
  /** Add family member form. */
  editFamilyMemberForm: FormGroup;
  /** Add family member template. */
  addFamilyMemberTemplate: any;
  /** Family Members Details */
  familyMemberDetails: any;

  /**
   * @param {FormBuilder} formBuilder Form Builder
   * @param {DatePipe} datePipe DatePipe
   * @param {Router} router Router
   * @param {ActivatedRoute} route Route
   * @param {ClientsService} clientsService Clients Service
   * @param {SettingsService} settingsService Setting service
   */
  constructor(private formBuilder: FormBuilder,
              private datePipe: DatePipe,
              private router: Router,
              private route: ActivatedRoute,
              private clientsService: ClientsService,
              private settingsService: SettingsService) {
    this.route.data.subscribe((data: any) => {
      this.addFamilyMemberTemplate = data.clientTemplate.familyMemberOptions;
      this.familyMemberDetails = data.editFamilyMember;
    });
  }

  ngOnInit() {
    this.createEditFamilyMemberForm(this.familyMemberDetails);
  }

  /**
   * Creates Edit Family Member Form
   * @param {any} familyMember Family Member
   */
  createEditFamilyMemberForm(familyMember: any) {
    this.editFamilyMemberForm = this.formBuilder.group({
      'firstName': [familyMember.firstName, Validators.required],
      'middleName': [familyMember.middleName],
      'lastName': [familyMember.lastName, Validators.required],
      'qualification': [familyMember.qualification],
      'age': [familyMember.age, Validators.required],
      'isDependent': [familyMember.isDependent],
      'relationshipId': [familyMember.relationshipId, Validators.required],
      'genderId': [familyMember.genderId, Validators.required],
      'professionId': [familyMember.professionId],
      'maritalStatusId': [familyMember.maritalStatusId],
      'dateOfBirth': [this.datePipe.transform(familyMember.dateOfBirth, 'yyyy-MM-dd'), Validators.required]
    });
  }

  /**
   * Submits the form and updates the client family member.
   */
  submit() {
    const prevDateOfBirth: Date = this.editFamilyMemberForm.value.dateOfBirth;
    // TODO: Update once language and date settings are setup
    const dateFormat = this.settingsService.dateFormat;
    this.editFamilyMemberForm.patchValue({
      dateOfBirth: this.datePipe.transform(prevDateOfBirth as Date, dateFormat)
    });
    const familyMemberData = this.editFamilyMemberForm.value;
    familyMemberData.locale = this.settingsService.language.code;
    familyMemberData.dateFormat = dateFormat;
    this.clientsService.editFamilyMember(this.familyMemberDetails.clientId, this.familyMemberDetails.id, familyMemberData).subscribe(res => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
