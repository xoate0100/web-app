/** Angular Imports */
import { Component, OnInit, ChangeDetectorRef, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

/** rxjs Imports */
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

/** Custom Services */
import { ProgressBarService } from '../progress-bar/progress-bar.service';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { NgClass, AsyncPipe } from '@angular/common';
import { ClassDirective } from '@ngbracket/ngx-layout/extended';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatProgressBar, ProgressBarMode } from '@angular/material/progress-bar';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from '../../shared/footer/footer.component';

/**
 * Shell component.
 */
@Component({
    selector: 'mifosx-shell',
    templateUrl: './shell.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./shell.component.scss'],
    imports: [MatSidenavContainer, MatSidenav, NgClass, ClassDirective, SidenavComponent, MatSidenavContent, ToolbarComponent, MatProgressBar, BreadcrumbComponent, ContentComponent, FooterComponent, AsyncPipe]
})
export class ShellComponent implements OnInit, OnDestroy {

  /** Subscription to breakpoint observer for handset. */
  isHandset$: Observable<boolean>;
  /** Sets the initial state of sidenav as collapsed. Not collapsed if false. */
  sidenavCollapsed = true;
  /** Progress bar mode. */
  progressBarMode: ProgressBarMode;
  /** Subscription to progress bar. */
  progressBar$: Subscription;

  /**
   * @param {BreakpointObserver} breakpointObserver Breakpoint Observer to detect screen size.
   * @param {ProgressBarService} progressBarService Progress Bar Service.
   * @param {ChangeDetectorRef} cdr Change Detector Ref.
   */
  constructor(private breakpointObserver: BreakpointObserver,
              private progressBarService: ProgressBarService,
              private cdr: ChangeDetectorRef) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches)
      );
  }

  /**
   * Subscribes to progress bar to update its mode.
   */
  ngOnInit() {
    this.progressBar$ = this.progressBarService.updateProgressBar.subscribe((mode: any) => {
      this.progressBarMode = mode;
      this.cdr.detectChanges();
    });
  }

  /**
   * Toggles the current collapsed state of sidenav according to the emitted event.
   * @param {boolean} event denotes state of sidenav
   */
  toggleCollapse($event: boolean) {
    this.sidenavCollapsed = $event;
    this.cdr.detectChanges();
  }

  /**
   * Unsubscribes from progress bar.
   */
  ngOnDestroy() {
    this.progressBar$.unsubscribe();
  }

}
