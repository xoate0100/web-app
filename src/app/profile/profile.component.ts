/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';

/** Custom Services */
import { AuthenticationService } from 'app/core/authentication/authentication.service';
import { ChangePasswordDialogComponent } from 'app/shared/change-password-dialog/change-password-dialog.component';
import { UserService } from 'app/self-service/users/user.service';
import { SecuritySettingsComponent } from './security-settings/security-settings.component';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard } from '@angular/material/card';

/**
 * Profile Component.
 */
@Component({
    selector: 'mifosx-profile',
    templateUrl: './profile.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./profile.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatButton, RouterLink, FaIconComponent, MatCard, FlexDirective, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, SecuritySettingsComponent]
})
export class ProfileComponent implements OnInit {

  /** Profile Data */
  profileData: any;
  /** Language, TODO: Update when df, locale settings are setup */
  language = 'English';

  /** Roles Table Datasource */
  dataSource = new MatTableDataSource();
  /** Columns to be displayed in user roles table. */
  displayedColumns: string[] = ['role', 'description'];

  /**
   * @param {AuthenticationService} authenticationService Authentication Service
   * @param {UserService} userService Users Service
   * @param {Router} router Router
   * @param {MatDialog} dialog Mat Dialog
   */
  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private router: Router,
              public dialog: MatDialog) {
    this.profileData = authenticationService.getCredentials()!;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.profileData.roles);
  }

  /**
   * Change Password of the user.
   */
  changeUserPassword() {
    const changeUserPasswordDialogRef = this.dialog.open(ChangePasswordDialogComponent, {
      width: '400px',
      height: '300px'
    });
    changeUserPasswordDialogRef.afterClosed().subscribe((response: any) => {
      if (response.password && response.repeatPassword) {
        const password = response.password;
        const repeatPassword = response.repeatPassword;
        const data = {password: password, repeatPassword: repeatPassword};
        this.userService.changePassword(this.profileData.userId, data).subscribe(() => {
          this.router.navigate(['/home']);
        });
      }
    });
  }

}
