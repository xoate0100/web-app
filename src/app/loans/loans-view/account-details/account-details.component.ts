import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: false,
  selector: 'mifosx-account-details',
  templateUrl: './account-details.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  loanDetails: any;
  dataObject: {
    property: string,
    value: string
  }[];

  constructor(private route: ActivatedRoute) {
    this.route.parent.data.subscribe((data: { loanDetailsData: any, }) => {
      this.loanDetails = data.loanDetailsData;
    });
  }

  ngOnInit() {
  }

}
