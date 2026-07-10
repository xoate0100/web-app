/** Angular Imports */
import { Component, Inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

/** Custom Services */
import { ClientsService } from 'app/clients/clients.service';
import { NgIf } from '@angular/common';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';

/**
 * View signature dialog component.
 */
@Component({
    selector: 'mifosx-view-signature-dialog',
    templateUrl: './view-signature-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./view-signature-dialog.component.scss'],
    imports: [MatDialogTitle, NgIf, CdkScrollable, MatDialogContent, MatDialogActions, MatButton, MatDialogClose]
})
export class ViewSignatureDialogComponent implements OnInit {

  /** Id of client signature in documents */
  signatureId: any;
  /** Signature Image */
  signatureImage: any;
  /** Client Id */
  clientId: any;

  /**
   * @param {MatDialogRef} dialogRef Component reference to dialog.
   * @param {any} data Documents data
   */
  constructor(public dialogRef: MatDialogRef<ViewSignatureDialogComponent>,
              private clientsService: ClientsService,
              private sanitizer: DomSanitizer,
              @Inject(MAT_DIALOG_DATA) public data: { documents: any[], id: string }) {
    const signature = this.data.documents.find((document: any) => document.name === 'clientSignature') || {};
    this.signatureId = signature.id;
    this.clientId = this.data.id;
    console.log(this.clientId);
  }

  ngOnInit() {
    if (this.signatureId) {
      this.clientsService.getClientSignatureImage(this.clientId, this.signatureId).subscribe(
        (base64Image: any) => {
          this.signatureImage = this.sanitizer.bypassSecurityTrustResourceUrl(base64Image);
        }, (error: any) => {}
      );
    }
  }

}
