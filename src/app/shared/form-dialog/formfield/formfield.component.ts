import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormfieldBase } from './model/formfield-base';

@Component({
  standalone: false,
  selector: 'mifosx-formfield',
  templateUrl: './formfield.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./formfield.component.scss']
})
export class FormfieldComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() formfield: FormfieldBase;

  constructor() { }

  ngOnInit() {
  }

}
