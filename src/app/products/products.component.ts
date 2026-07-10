/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/**
 * Products component.
 */
@Component({
  standalone: false,
  selector: 'mifosx-products',
  templateUrl: './products.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
