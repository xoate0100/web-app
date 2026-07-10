/** Angular Imports */
import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';

/** Custom Components */
import { LoanAccountTableComponent } from '../loan-account-table/loan-account-table.component';
import { SavingsAccountTableComponent } from '../savings-account-table/savings-account-table.component';
import { ShareAccountTableComponent } from '../share-account-table/share-account-table.component';
import { MemberGroupsComponent } from '../member-groups/member-groups.component';
import { MatCardHeader, MatCardTitleGroup, MatCardTitle, MatCardSubtitle, MatCardContent } from '@angular/material/card';
import { LayoutDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatTooltip } from '@angular/material/tooltip';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { NgIf, DatePipe } from '@angular/common';
import { StatusLookupPipe } from '../../pipes/status-lookup.pipe';

@Component({
    selector: 'mifosx-client-navigation',
    templateUrl: './client-navigation.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./client-navigation.component.scss'],
    imports: [MatCardHeader, LayoutDirective, LayoutGapDirective, FaIconComponent, MatCardTitleGroup, MatCardTitle, MatTooltip, MatCardSubtitle, MatCardContent, MatTabGroup, MatTab, NgIf, FlexDirective, LoanAccountTableComponent, SavingsAccountTableComponent, ShareAccountTableComponent, MemberGroupsComponent, DatePipe, StatusLookupPipe]
})
export class ClientNavigationComponent implements OnInit {

  @ViewChild(LoanAccountTableComponent) loanAccountTableComponent: LoanAccountTableComponent;
  @ViewChild(SavingsAccountTableComponent) savingsAccountTableComponent: SavingsAccountTableComponent;
  @ViewChild(ShareAccountTableComponent) shareAccountTableComponent: ShareAccountTableComponent;
  @ViewChild(MemberGroupsComponent) memberGroupsComponent: MemberGroupsComponent;

  @Input() clientData: any;
  @Input() clientAccountsData: any;

  constructor() { }

  ngOnInit() {
  }

}
