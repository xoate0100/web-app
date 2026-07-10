import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutDirective, FlexFillDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { NgIf, DecimalPipe, DatePipe } from '@angular/common';

@Component({
    selector: 'mifosx-account-details',
    templateUrl: './account-details.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./account-details.component.scss'],
    imports: [LayoutDirective, FlexFillDirective, FlexDirective, NgIf, DecimalPipe, DatePipe]
})
export class AccountDetailsComponent implements OnInit {

  loanDetails: any;
  dataObject: {
    property: string,
    value: string
  }[];

  constructor(private route: ActivatedRoute) {
    this.route.parent!.data.subscribe((data: any) => {
      this.loanDetails = data.loanDetailsData;
    });
  }

  ngOnInit() {
  }

}
