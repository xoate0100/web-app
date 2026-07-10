/** Angular Imports */
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatCardHeader, MatCardTitleGroup, MatCardTitle, MatCardSubtitle, MatCardContent } from '@angular/material/card';
import { LayoutDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatTooltip } from '@angular/material/tooltip';
import { NgIf, DatePipe } from '@angular/common';

@Component({
    selector: 'mifosx-staff-navigation',
    templateUrl: './staff-navigation.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./staff-navigation.component.scss'],
    imports: [MatCardHeader, LayoutDirective, LayoutGapDirective, FaIconComponent, MatCardTitleGroup, MatCardTitle, MatTooltip, MatCardSubtitle, MatCardContent, FlexDirective, NgIf, DatePipe]
})
export class StaffNavigationComponent implements OnInit {

  @Input() employeeData: any;
  @Input() centerData: any;

  constructor() { }

  ngOnInit() {
  }

}
