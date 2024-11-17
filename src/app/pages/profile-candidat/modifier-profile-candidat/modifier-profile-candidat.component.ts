import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ProfileCandidatComponent } from '../profile-candidat.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modifier-profile-candidat',
  // standalone: true,
  // imports: [],
  templateUrl: './modifier-profile-candidat.component.html',
  styleUrls: ['./modifier-profile-candidat.component.scss','../profile-candidat.component.scss']
})
export class ModifierProfileCandidatComponent {
selectedDateEntretien: any;
  constructor(private dialog: MatDialog) {}
  @ViewChild('editDialog') editDialog!: TemplateRef<any>;

  @Input()
  user! :any;
openEditDialog(user:any) {
  this.dialog.open(this.editDialog);
}
}
