/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { LayoutDirective, LayoutGapDirective } from '@ngbracket/ngx-layout/flex';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatActionList, MatListItem } from '@angular/material/list';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AmountDisbursedPieComponent } from './amount-disbursed-pie/amount-disbursed-pie.component';
import { ClientTrendsBarComponent } from './client-trends-bar/client-trends-bar.component';
import { AmountCollectedPieComponent } from './amount-collected-pie/amount-collected-pie.component';
import { UrlToStringPipe } from '../../pipes/url-to-string.pipe';

/**
 * Dashboard component.
 */
@Component({
    selector: 'mifosx-dashboard',
    templateUrl: './dashboard.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./dashboard.component.scss'],
    imports: [MatCard, LayoutDirective, LayoutGapDirective, MatCardHeader, FaIconComponent, MatCardContent, MatActionList, NgFor, MatListItem, RouterLink, AmountDisbursedPieComponent, ClientTrendsBarComponent, AmountCollectedPieComponent, UrlToStringPipe]
})
export class DashboardComponent implements OnInit {

  /** Array of all user activities */
  userActivity: string[];
  /** Array of most recent user activities */
  recentActivities: string[];
  /** Array of most frequent user activities */
  frequentActivities: string[];

  /**
   * Gets user activities from local storage.
   */
  constructor() {
    this.userActivity = JSON.parse(localStorage.getItem('mifosXLocation') ?? 'null');
  }

  ngOnInit() {
    this.recentActivities = this.getRecentActivities();
    this.frequentActivities = this.getFrequentActivities();
  }

  /**
   * Returns top eight recent activities.
   */
  getRecentActivities() {
    const reverseActivities = this.userActivity.reverse();
    const uniqueActivities: string[] = [];
    reverseActivities.forEach((activity: string) => {
      if (!uniqueActivities.includes(activity)) {
        uniqueActivities.push(activity);
      }
    });
    const topEightRecentActivities =
      uniqueActivities
        .filter((activity: string) => !['/', '/login', '/home', '/dashboard'].includes(activity))
        .slice(0, 8);
    return topEightRecentActivities;
  }

  /**
   * Returns top eight frequent activities.
   */
  getFrequentActivities() {
    const frequencyCounts: any  = {};
    let index  = this.userActivity.length;
    while (index) {
      frequencyCounts[this.userActivity[--index]] = (frequencyCounts[this.userActivity[index]] || 0) + 1;
    }
    const frequencyCountsArray = Object.entries(frequencyCounts);
    const topEigthFrequentActivities =
      frequencyCountsArray
        .sort((a: any, b: any) => b[1] - a[1])
        .map((entry: any[]) => entry[0])
        .filter((activity: string) => !['/', '/login', '/home', '/dashboard'].includes(activity))
        .slice(0, 8);
    return topEigthFrequentActivities;
  }

}
