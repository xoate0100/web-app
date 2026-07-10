/** Angular Imports */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { LayoutDirective, LayoutGapDirective, FlexDirective, FlexAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

/**
 * Custom file upload component based on angular material.
 */
@Component({
    selector: 'mifosx-file-upload',
    templateUrl: './file-upload.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./file-upload.component.scss'],
    imports: [LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatInput, FlexAlignDirective, MatButton, FaIconComponent]
})
export class FileUploadComponent {

  /** Form field flex dimension */
  @Input() flex: any;
  /** Selected file name */
  fileName: File;

  constructor() { }

  /**
   * Sets the file name.
   * @param {any} event File input change event.
   */
  onFileSelect($event: any) {
    this.fileName = $event.target.files[0].name;
  }

}
