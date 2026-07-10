import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
declare var particlesJS: any;

@Component({
  standalone: false,
  selector: 'mifosx-not-found',
  templateUrl: './not-found.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    particlesJS.load('particles-js', '/assets/particles.json');
  }

}
