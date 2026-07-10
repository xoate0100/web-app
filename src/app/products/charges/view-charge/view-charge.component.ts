/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

/** Custom Services */
import { ProductsService } from 'app/products/products.service';

/** Custom Components */
import { DeleteDialogComponent } from '../../../shared/delete-dialog/delete-dialog.component';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatCard, MatCardContent } from '@angular/material/card';
import { NgIf } from '@angular/common';

/**
 * View Charge Component.
 */
@Component({
    selector: 'mifosx-view-charge',
    templateUrl: './view-charge.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-charge.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, HasPermissionDirective, MatButton, RouterLink, FaIconComponent, MatCard, MatCardContent, FlexDirective, NgIf]
})
export class ViewChargeComponent implements OnInit {

  /** Charge data. */
  chargeData: any;

  /**
   * Retrieves the charge data from `resolve`.
   * @param {ProductsService} productsService Products Service.
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {MatDialog} dialog Dialog reference.
   */
  constructor(private productsService: ProductsService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog) {
    this.route.data.subscribe((data: any) => {
      this.chargeData = data.charge;
    });
  }

  ngOnInit() {
  }

  /**
   * Deletes the charge and redirects to charges.
   */
  deleteCharge() {
    const deleteChargeDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `charge ${this.chargeData.id}` }
    });
    deleteChargeDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.productsService.deleteCharge(this.chargeData.id)
          .subscribe(() => {
            this.router.navigate(['/products/charges']);
          });
      }
    });
  }

}
