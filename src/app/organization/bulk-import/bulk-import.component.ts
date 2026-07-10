/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/**
 * Bulk Import component.
 */
@Component({
  standalone: false,
  selector: 'mifosx-bulk-import',
  templateUrl: './bulk-import.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./bulk-import.component.scss']
})
export class BulkImportComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
