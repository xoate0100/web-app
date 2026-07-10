/** Angular Imports */
import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, RouterLink } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/** Custom Services */
import { AuthenticationService } from '../../authentication/authentication.service';
import { MatToolbar } from '@angular/material/toolbar';
import { LayoutDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { NgIf } from '@angular/common';
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { ShowHideDirective } from '@ngbracket/ngx-layout/extended';
import { MatTabNav, MatTabLink } from '@angular/material/tabs';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { SearchToolComponent } from '../../../shared/search-tool/search-tool.component';
import { LanguageSelectorComponent } from '../../../shared/language-selector/language-selector.component';
import { ThemePickerComponent } from '../../../shared/theme-picker/theme-picker.component';
import { NotificationsTrayComponent } from '../../../shared/notifications-tray/notifications-tray.component';
import { MatIcon } from '@angular/material/icon';

/**
 * Toolbar component.
 */
@Component({
    selector: 'mifosx-toolbar',
    templateUrl: './toolbar.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./toolbar.component.scss'],
    imports: [MatToolbar, LayoutDirective, NgIf, MatIconButton, MatTooltip, FaIconComponent, ShowHideDirective, MatTabNav, MatTabLink, MatMenuTrigger, RouterLink, FlexDirective, SearchToolComponent, LanguageSelectorComponent, ThemePickerComponent, NotificationsTrayComponent, MatMenu, MatMenuItem, MatIcon]
})
export class ToolbarComponent implements OnInit {

  /** Subscription to breakpoint observer for handset. */
  isHandset$: Observable<boolean>;

  /** Sets the initial state of sidenav as collapsed. Not collapsed if false. */
  sidenavCollapsed = true;

  /** Instance of sidenav. */
  @Input() sidenav: MatSidenav;
  /** Sidenav collapse event. */
  @Output() collapse = new EventEmitter<boolean>();

  /**
   * @param {BreakpointObserver} breakpointObserver Breakpoint observer to detect screen size.
   * @param {Router} router Router for navigation.
   * @param {AuthenticationService} authenticationService Authentication service.
   */
  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router,
              private authenticationService: AuthenticationService,
              private dialog: MatDialog) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches)
      );
  }

  /**
   * Subscribes to breakpoint for handset.
   */
  ngOnInit() {
    this.isHandset$.subscribe(isHandset => {
      if (isHandset && this.sidenavCollapsed) {
        this.toggleSidenavCollapse(false);
      }
    });
  }

  /**
   * Toggles the current state of sidenav.
   */
  toggleSidenav() {
    this.sidenav.toggle();
  }

  /**
   * Toggles the current collapsed state of sidenav.
   */
  toggleSidenavCollapse(sidenavCollapsed?: boolean) {
    this.sidenavCollapsed = sidenavCollapsed || !this.sidenavCollapsed;
    this.collapse.emit(this.sidenavCollapsed);
  }

  /**
   * Logs out the authenticated user and redirects to login page.
   */
  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  /**
   * Opens Mifos JIRA Wiki page.
   */
  help() {
    window.open('https://mifosforge.jira.com/wiki/spaces/docs/pages/52035622/User+Manual', '_blank');
  }

}
