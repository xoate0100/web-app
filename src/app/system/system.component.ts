import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'mifosx-system',
  templateUrl: './system.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
