/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

/** Custom Imports. */
import { activities } from './activities';

/** Custom Services */
import { AuthenticationService } from '../core/authentication/authentication.service';
import { LayoutAlignDirective, LayoutGapDirective, LayoutDirective } from '@ngbracket/ngx-layout/flex';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardImage } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatAutocompleteTrigger, MatAutocomplete, MatOption } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';

/**
 * Home component.
 */
@Component({
    selector: 'mifosx-home',
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./home.component.scss'],
    imports: [LayoutAlignDirective, LayoutGapDirective, LayoutDirective, MatButton, RouterLink, FaIconComponent, MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatFormField, MatLabel, MatInput, MatAutocompleteTrigger, ReactiveFormsModule, MatAutocomplete, NgFor, MatOption, MatCardImage, AsyncPipe]
})
export class HomeComponent implements OnInit {

  /** Username of authenticated user. */
  username: string;
  /** Activity Form. */
  activityForm: any;
  /** Search Text. */
  searchText: FormControl = new FormControl();
  /** Filtered Activities. */
  filteredActivities: Observable<any[]>;
  /** All User Activities. */
  allActivities: any[] = activities;

  /**
   * @param {AuthenticationService} authenticationService Authentication Service.
   * @param {FormBuilder} formBuilder Form Builder.
   */
  constructor(private authenticationService: AuthenticationService) { }

  /**
   * Sets the username of the authenticated user.
   * Set Form.
   */
  ngOnInit() {
    const credentials = this.authenticationService.getCredentials()!;
    this.username = credentials.username;
    this.setFilteredActivities();
  }

  /**
   * Sets filtered activities for autocomplete.
   */
  setFilteredActivities() {
    this.filteredActivities = this.searchText.valueChanges
    .pipe(
      map((activity: any) => typeof activity === 'string' ? activity : activity.activity),
      map((activityName: string) => activityName ? this.filterActivity(activityName) : this.allActivities));
  }

  /**
   * Filters activities.
   * @param activityName Activity name to filter activity by.
   * @returns {any} Filtered activities.
   */
  private filterActivity(activityName: string): any {
    const filterValue = activityName.toLowerCase();
    return this.allActivities.filter(activity => activity.activity.toLowerCase().indexOf(filterValue) === 0);
  }

}
