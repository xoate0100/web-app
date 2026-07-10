/** Angular Imports */
import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';

/** Custom Components */
import { LoanAccountTableComponent } from '../loan-account-table/loan-account-table.component';
import { SavingsAccountTableComponent } from '../savings-account-table/savings-account-table.component';
import { MatCardHeader, MatCardTitleGroup, MatCardTitle, MatCardSubtitle, MatCardContent } from '@angular/material/card';
import { LayoutDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatTooltip } from '@angular/material/tooltip';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { NgIf, DatePipe } from '@angular/common';
import { StatusLookupPipe } from '../../pipes/status-lookup.pipe';


@Component({
    selector: 'mifosx-group-navigation',
    templateUrl: './group-navigation.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./group-navigation.component.scss'],
    imports: [MatCardHeader, LayoutDirective, LayoutGapDirective, FaIconComponent, MatCardTitleGroup, MatCardTitle, MatTooltip, MatCardSubtitle, MatCardContent, MatTabGroup, MatTab, FlexDirective, NgIf, LoanAccountTableComponent, SavingsAccountTableComponent, DatePipe, StatusLookupPipe]
})
export class GroupNavigationComponent implements OnInit {

  @ViewChild(LoanAccountTableComponent) loanAccountTableComponent: LoanAccountTableComponent;
  @ViewChild(SavingsAccountTableComponent) savingsAccountTableComponent: SavingsAccountTableComponent;

  @Input() groupData: any;
  @Input() groupAccountsData: any;
  @Input() clientData: any;

  constructor() { }

  ngOnInit() {
  }

}
