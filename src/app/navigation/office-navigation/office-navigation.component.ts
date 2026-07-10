
/** Angular Imports */
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatCardHeader, MatCardTitleGroup, MatCardTitle, MatCardSubtitle, MatCardContent } from '@angular/material/card';
import { LayoutDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { NgIf, DatePipe } from '@angular/common';

@Component({
    selector: 'mifosx-office-navigation',
    templateUrl: './office-navigation.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./office-navigation.component.scss'],
    imports: [MatCardHeader, LayoutDirective, LayoutGapDirective, FaIconComponent, MatCardTitleGroup, MatCardTitle, MatCardSubtitle, MatCardContent, FlexDirective, NgIf, DatePipe]
})
export class OfficeNavigationComponent implements OnInit {

  @Input() officeData: any;
  @Input() employeeData: any;

  constructor() { }

  ngOnInit() {
  }

}
