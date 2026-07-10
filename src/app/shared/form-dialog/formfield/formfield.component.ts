import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { FormfieldBase } from './model/formfield-base';
import { FlexFillDirective } from '@ngbracket/ngx-layout/flex';
import { NgIf, NgFor } from '@angular/common';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
    selector: 'mifosx-formfield',
    templateUrl: './formfield.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./formfield.component.scss'],
    imports: [FlexFillDirective, ReactiveFormsModule, NgIf, MatFormField, MatLabel, MatInput, MatSelect, NgFor, MatOption, MatError, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatCheckbox]
})
export class FormfieldComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() formfield: FormfieldBase;

  constructor() { }

  ngOnInit() {
  }

}
