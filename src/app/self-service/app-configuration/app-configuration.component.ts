/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { LayoutDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { FileUploadComponent } from '../../shared/file-upload/file-upload.component';

/**
 * Self service app configuration component.
 *
 * TODO: Complete functionality once API is available.
 */
@Component({
    selector: 'mifosx-app-configuration',
    templateUrl: './app-configuration.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./app-configuration.component.scss'],
    imports: [MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, LayoutDirective, MatFormField, MatLabel, MatInput, MatSelect, NgFor, MatOption, FileUploadComponent]
})
export class AppConfigurationComponent implements OnInit {

  /** Placeholder for languages. */
  languages: any;
  /** Placeholder for date formats. */
  dateFormats: any;
  /** Placeholder for mobile app themes. */
  mobileAppThemes: any;
  /** Placeholder for mobile app fonts. */
  mobileAppFonts: any;
  /** Placeholder for online banking app themes. */
  onlineBankingAppThemes: any;
  /** Placeholder for online banking app fonts. */
  onlineBankingAppFonts: any;

  constructor() { }

  ngOnInit() {
  }

}
