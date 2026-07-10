/** Angular Imports */
import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { LayoutDirective, FlexFillDirective, FlexDirective, LayoutAlignDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { MatDivider } from '@angular/material/divider';
import { NgIf, NgFor, DatePipe } from '@angular/common';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription } from '@angular/material/expansion';
import { MatButton } from '@angular/material/button';
import { MatStepperPrevious } from '@angular/material/stepper';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { FindPipe } from '../../../pipes/find.pipe';

/**
 * Client Preview Step Component
 */
@Component({
    selector: 'mifosx-client-preview-step',
    templateUrl: './client-preview-step.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./client-preview-step.component.scss'],
    imports: [LayoutDirective, FlexFillDirective, MatDivider, FlexDirective, NgIf, MatAccordion, NgFor, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, LayoutAlignDirective, LayoutGapDirective, MatButton, MatStepperPrevious, FaIconComponent, RouterLink, DatePipe, FindPipe]
})
export class ClientPreviewStepComponent {

  /** Client Address field configuration */
  @Input() clientAddressFieldConfig: any;
  /** Client Template */
  @Input() clientTemplate: any;
  /** Client Object */
  @Input() client: any;

  /** Form submission event */
  @Output() submit = new EventEmitter();

  constructor() { }

  /**
   * Utilized in address preview.
   * Find pipe doesn't work with accordian.
   * @param {any} fieldName Field Name
   * @param {any} fieldId Field Id
   */
  getSelectedValue(fieldName: any, fieldId: any) {
    return (this.clientTemplate.address[0][fieldName].find((fieldObj: any) => fieldObj.id === fieldId));
  }

  /**
   * Utilized in address preview to check if field is enabled in configuration.
   * @param {any} fieldName Field Name
   */
  isFieldEnabled(fieldName: any) {
    return (this.clientAddressFieldConfig.find((fieldObj: any) => fieldObj.field === fieldName))?.isEnabled;
  }

}
