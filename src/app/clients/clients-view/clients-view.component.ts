/** Angular Imports */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';

/** Custom Dialogs */
import { UnassignStaffDialogComponent } from './custom-dialogs/unassign-staff-dialog/unassign-staff-dialog.component';
import { UploadSignatureDialogComponent } from './custom-dialogs/upload-signature-dialog/upload-signature-dialog.component';
import { ViewSignatureDialogComponent } from './custom-dialogs/view-signature-dialog/view-signature-dialog.component';
import { DeleteSignatureDialogComponent } from './custom-dialogs/delete-signature-dialog/delete-signature-dialog.component';
import { DeleteDialogComponent } from 'app/shared/delete-dialog/delete-dialog.component';
import { UploadImageDialogComponent } from './custom-dialogs/upload-image-dialog/upload-image-dialog.component';
import { CaptureImageDialogComponent } from './custom-dialogs/capture-image-dialog/capture-image-dialog.component';

/** Custom Services */
import { ClientsService } from '../clients.service';
import { MatCard, MatCardHeader, MatCardTitleGroup, MatCardMdImage, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardContent } from '@angular/material/card';
import { LayoutDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { HasPermissionDirective } from '../../directives/has-permission/has-permission.directive';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { NgClass, NgFor, NgIf, DatePipe } from '@angular/common';
import { ClassDirective } from '@ngbracket/ngx-layout/extended';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { MatTabNav, MatTabLink } from '@angular/material/tabs';
import { StatusLookupPipe } from '../../pipes/status-lookup.pipe';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'mifosx-clients-view',
    templateUrl: './clients-view.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./clients-view.component.scss'],
    imports: [FaIconComponent, MatCard, MatCardHeader, LayoutDirective, MatCardTitleGroup, MatCardMdImage, LayoutAlignDirective, HasPermissionDirective, MatButton, MatTooltip, MatCardTitle, NgClass, ClassDirective, MatCardSubtitle, NgFor, NgIf, MatCardActions, RouterLink, MatMenuTrigger, MatMenu, MatMenuItem, MatCardContent, MatTabNav, MatTabLink, RouterLinkActive, RouterOutlet, DatePipe, StatusLookupPipe]
})
export class ClientsViewComponent implements OnInit {

  clientViewData: any;
  clientDatatables: any;
  clientImage: any;
  clientTemplateData: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clientsService: ClientsService,
              private _sanitizer: DomSanitizer,
              public dialog: MatDialog) {
    this.route.data.subscribe((data: any) => {
      this.clientViewData = data.clientViewData;
      this.clientDatatables = data.clientDatatables;
      this.clientTemplateData = data.clientTemplateData;
    });
  }

  ngOnInit() {
    this.clientsService.getClientProfileImage(this.clientViewData.id).subscribe(
      (base64Image: any) => {
        this.clientImage = this._sanitizer.bypassSecurityTrustResourceUrl(base64Image);
      }, (error: any) => {}
    );
  }

  /**
   * Performs action button/option action.
   * @param {string} name action name.
   */
  doAction(name: string) {
    switch (name) {
      case 'Assign Staff':
      case 'Close':
      case 'Survey':
      case 'Reject':
      case 'Activate':
      case 'Withdraw':
      case 'Update Default Savings':
      case 'Transfer Client':
      case 'Undo Transfer':
      case 'Accept Transfer':
      case 'Reject Transfer':
      case 'Reactivate':
      case 'Undo Rejection':
      case 'Add Charge':
      case 'Create Self Service User':
      case 'Client Screen Reports':
        this.router.navigate([`actions/${name}`], { relativeTo: this.route });
        break;
       case 'Unassign Staff':
        this.unassignStaff();
        break;
      case 'Delete':
        this.deleteClient();
        break;
      case 'View Signature':
        this.viewSignature();
        break;
      case 'Upload Signature':
        this.uploadSignature();
        break;
      case 'Delete Signature':
        this.deleteSignature();
        break;
      case 'Capture Image':
        this.captureProfileImage();
        break;
      case 'Upload Image':
        this.uploadProfileImage();
        break;
      case 'Delete Image':
        this.deleteProfileImage();
        break;
      case 'Create Standing Instructions':
        const createStandingInstructionsQueryParams: any = { officeId: this.clientViewData.officeId, accountType: 'fromsavings' };
        this.router.navigate(['standing-instructions/create-standing-instructions'], { relativeTo: this.route, queryParams: createStandingInstructionsQueryParams });
        break;
      case 'View Standing Instructions':
        const viewStandingInstructionsQueryParams: any = { officeId: this.clientViewData.officeId, accountType: 'fromsavings' };
        this.router.navigate(['standing-instructions/list-standing-instructions'], { relativeTo: this.route, queryParams: viewStandingInstructionsQueryParams });
        break;
    }
  }


  /**
   * Refetches data for the component
   * TODO: Replace by a custom reload component instead of hard-coded back-routing.
   */
  reload() {
    const url: string = this.router.url;
    this.router.navigateByUrl(`/clients`, {skipLocationChange: true})
      .then(() => this.router.navigate([url]));
  }

  /**
   * Deletes the client
   */
  private deleteClient() {
    const deleteClientDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `client with id: ${this.clientViewData.id}` }
    });
    deleteClientDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.clientsService.deleteClient(this.clientViewData.id).subscribe(() => {
          this.router.navigate(['/clients'], { relativeTo: this.route });
        });
      }
    });
  }

  /**
   * Unassign's the client's staff.
   */
  private unassignStaff() {
    const unAssignStaffDialogRef = this.dialog.open(UnassignStaffDialogComponent);
    unAssignStaffDialogRef.afterClosed().subscribe((response: { confirm: any }) => {
      if (response.confirm) {
        this.clientsService.executeClientCommand(this.clientViewData.id, 'unassignStaff', { staffId: this.clientViewData.staffId })
          .subscribe(() => {
            this.reload();
          });
      }
    });
  }

  /**
   * Shows client signature in a dialog
   */
  private viewSignature() {
    this.clientsService.getClientDocuments(this.clientViewData.id).subscribe((documents: any) => {
      const viewSignatureDialogRef = this.dialog.open(ViewSignatureDialogComponent, {
        data: {
          documents: documents,
          id: this.clientViewData.id
        }
      });
      viewSignatureDialogRef.afterClosed().subscribe((response: any) => {
        if (response.upload) {
          this.uploadSignature();
        } else if (response.delete) {
          this.deleteSignature();
        }
      });
    });
  }

  /**
   * Uploads client signature
   */
  private uploadSignature() {
    const uploadSignatureDialogRef = this.dialog.open(UploadSignatureDialogComponent);
    uploadSignatureDialogRef.afterClosed().subscribe((signature: any) => {
      if (signature) {
        this.clientsService.uploadClientSignatureImage(this.clientViewData.id, signature)
          .subscribe(() => {
            this.reload();
          });
      }
    });
  }

  /**
   * Deletes client signature
   */
  private deleteSignature() {
    this.clientsService.getClientDocuments(this.clientViewData.id).subscribe((documents: any) => {
      const deleteSignatureDialogRef = this.dialog.open(DeleteSignatureDialogComponent, {
        data: documents
      });
      deleteSignatureDialogRef.afterClosed().subscribe((response: any) => {
        if (response.delete) {
          this.clientsService.deleteClientDocument(this.clientViewData.id, response.id)
            .subscribe(() => {
              this.reload();
            });
        } else if (response.upload) {
          this.uploadSignature();
        }
      });
    });
  }

  /**
   * Captures clients profile image.
   */
  private captureProfileImage() {
    const captureImageDialogRef = this.dialog.open(CaptureImageDialogComponent);
    captureImageDialogRef.afterClosed().subscribe((imageURL: string) => {
      if (imageURL) {
        this.clientsService.uploadCapturedClientProfileImage(this.clientViewData.id, imageURL)
          .subscribe(() => {
            this.reload();
          });
      }
    });
  }

  /**
   * Uploads the clients image.
   */
  private uploadProfileImage() {
    const uploadImageDialogRef = this.dialog.open(UploadImageDialogComponent);
    uploadImageDialogRef.afterClosed().subscribe((image: any) => {
      if (image) {
        this.clientsService.uploadClientProfileImage(this.clientViewData.id, image)
          .subscribe(() => {
            this.reload();
          });
      }
    });
  }

  /**
   * Deletes the client image.
   */
  private deleteProfileImage() {
    const deleteClientImageDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `the profile image of ${this.clientViewData.displayName}` }
    });
    deleteClientImageDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.clientsService.deleteClientProfileImage(this.clientViewData.id)
          .subscribe(() => {
            this.reload();
          });
      }
    });
  }

}
