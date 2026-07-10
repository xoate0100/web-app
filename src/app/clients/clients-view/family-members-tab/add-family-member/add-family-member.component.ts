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
 * Add Family Member Component
 */
@Component({
    selector: 'mifosx-add-family-member',
    templateUrl: './add-family-member.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./add-family-member.component.scss'],
    imports: [ReactiveFormsModule, LayoutDirective, LayoutAlignDirective, MatFormField, FlexDirective, MatLabel, MatInput, NgIf, MatError, MatCheckbox, MatSelect, NgFor, MatOption, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, LayoutGapDirective, MatButton, RouterLink]
})
export class AddFamilyMemberComponent implements OnInit {

  /** Minimum Due Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Due Date allowed. */
  maxDate = new Date();
  /** Add family member form. */
  addFamilyMemberForm: FormGroup;
  /** Add family member template. */
  addFamilyMemberTemplate: any;
  /** Client ID */
  clientId: any;

  /**
   * @param {FormBuilder} formBuilder FormBuilder
   * @param {DatePipe} datePipe Date Pipe
   * @param {Router} router Router
   * @param {Route} route Route
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
    });
    this.clientId = this.route.parent!.parent!.snapshot.params['clientId']!;

  }

  ngOnInit() {
    this.createAddFamilyMemberForm();
  }

  /**
   * Creates the add family member form
   */
  createAddFamilyMemberForm() {
    this.addFamilyMemberForm = this.formBuilder.group({
      'firstName': ['', Validators.required],
      'middleName': [''],
      'lastName': ['', Validators.required],
      'qualification': [''],
      'age': ['', Validators.required],
      'isDependent': [''],
      'relationshipId': ['', Validators.required],
      'genderId': ['', Validators.required],
      'professionId': [''],
      'maritalStatusId': [''],
      'dateOfBirth': ['', Validators.required]
    });
  }

  /**
   * Submits the form and adds the family member
   */
  submit() {
    const prevDateOfBirth: Date = this.addFamilyMemberForm.value.dateOfBirth;
    // TODO: Update once language and date settings are setup
    const dateFormat = this.settingsService.dateFormat;
    this.addFamilyMemberForm.patchValue({
      dateOfBirth: this.datePipe.transform(prevDateOfBirth as Date, dateFormat)
    });
    const familyMemberData = this.addFamilyMemberForm.value;
    familyMemberData.locale = this.settingsService.language.code;
    familyMemberData.dateFormat = dateFormat;
    this.clientsService.addFamilyMember(this.clientId, familyMemberData).subscribe(res => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

}
