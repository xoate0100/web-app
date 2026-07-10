/** Angular Imports */
import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';

/** Custom Components */
import { LoanAccountTableComponent } from '../loan-account-table/loan-account-table.component';
import { SavingsAccountTableComponent } from '../savings-account-table/savings-account-table.component';


@Component({
  standalone: false,
  selector: 'mifosx-center-navigation',
  templateUrl: './center-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./center-navigation.component.scss']
})
export class CenterNavigationComponent implements OnInit {

  @ViewChild(LoanAccountTableComponent) loanAccountTableComponent: LoanAccountTableComponent;
  @ViewChild(SavingsAccountTableComponent) savingsAccountTableComponent: SavingsAccountTableComponent;

  @Input() centerData: any;
  @Input() centerAccountsData: any;
  @Input() centerSummaryData: any;
  @Input() groupData: any;

  constructor() { }

  ngOnInit() {
  }

}
