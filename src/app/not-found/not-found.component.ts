import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/** Optional global from a same-origin particles script when present (SEC-09: no CDN). */
declare const particlesJS: { load: (id: string, configPath: string) => void } | undefined;

@Component({
    selector: 'mifosx-not-found',
    templateUrl: './not-found.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Decorative only — safe if the script is not bundled.
    if (typeof particlesJS !== 'undefined' && typeof particlesJS?.load === 'function') {
      particlesJS.load('particles-js', '/assets/particles.json');
    }
  }

}
