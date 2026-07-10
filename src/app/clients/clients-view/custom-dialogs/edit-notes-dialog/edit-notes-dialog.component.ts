/** Angular Imports */
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'mifosx-edit-notes-dialog',
    templateUrl: './edit-notes-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-notes-dialog.component.scss'],
    imports: [MatDialogTitle, ReactiveFormsModule, MatFormField, MatInput, MatDialogActions, MatButton, MatDialogClose]
})
export class EditNotesDialogComponent implements OnInit {
  noteForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditNotesDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.createNoteForm();
  }

  createNoteForm() {
    this.noteForm = this.formBuilder.group({
      'note': [this.data.noteContent, Validators.required]
    });
  }
}
