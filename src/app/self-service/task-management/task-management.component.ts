import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'mifosx-task-management',
    templateUrl: './task-management.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./task-management.component.scss']
})
export class TaskManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
