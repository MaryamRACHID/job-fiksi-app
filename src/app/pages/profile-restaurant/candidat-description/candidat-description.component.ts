import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-candidat-description',
  templateUrl: './candidat-description.component.html',
  styleUrls: ['./candidat-description.component.scss'],
  animations: [
    trigger('slideToggle', [
      state('void', style({ height: '0px', opacity: 0 })),
      state('*', style({ height: '*', opacity: 1 })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ])
  ]
})
export class CandidatDescriptionComponent {
  @Input() candidate!: { name: string; Cv: string; Email: string; Telephone: string; Disponibilite: string[]; _Statut: string; DateEntretien: string;HeureEntretien:string };
  showCandidate: boolean = true;

  isOpen: any;
  @Input() job: any;
  @ViewChild('editDialog') editDialog!: TemplateRef<any>;
  selectedStatus: string = '';

  constructor(private dialog: MatDialog) {}

  toggleDescriptionCandidate() {
    this.isOpen = !this.isOpen;
  }

  openEditDialog(candidate: any) {
    // Assure que `selectedStatus` correspond au `_Statut` de `candidate` avant d'ouvrir le dialogue
    this.selectedStatus = candidate._Statut;
    this.dialog.open(this.editDialog);
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  updateStatus() {
    // Met à jour le statut du candidat lorsque l'utilisateur enregistre
    this.candidate._Statut = this.selectedStatus;
    this.closeDialog();
  }

  @ViewChild('editDialogEntretien') editDialogEntretien!: TemplateRef<any>;
  selectedStatusEntretien: string = '';
  selectedDateEntretien: Date | null = null; // Variable pour la date d'entretien sélectionnée
  selectedTimeEntretien: string = '';
  // constructor(private dialog: MatDialog) {}

  toggleDescriptionCandidate_entretien() {
    this.isOpen = !this.isOpen;
  }

  openEditDialog_entretien(candidate: any) {
    this.selectedStatusEntretien = candidate.DateEntretien;
    this.selectedDateEntretien = candidate.DateEntretien ? new Date(candidate.DateEntretien.split(' ')[0]) : null;
    this.selectedTimeEntretien = candidate.HeureEntretien ? candidate.HeureEntretien.split(' ')[1] : '';
    this.dialog.open(this.editDialogEntretien);
  }

  closeDialog_entretien() {
    this.dialog.closeAll();
  }
  accepterCandidat(candidate:any){}

  updateStatus_entretien() {
    console.log("test:\n")
    if (this.selectedDateEntretien && this.selectedTimeEntretien) {
      // var date = this.selectedDateEntretien.toLocaleDateString(); // Formate la date
      // const dateTime = `${date} ${this.selectedTimeEntretien}`; // Combine la date et l'heure

      this.candidate.DateEntretien = this.selectedDateEntretien.toLocaleDateString(); // Met à jour la date et l'heure de l'entretien
      this.candidate.HeureEntretien = this.selectedTimeEntretien;
      console.log(this.candidate);
    }else{
      this.candidate.DateEntretien = this.selectedStatusEntretien;
      if(this.candidate.DateEntretien == 'Entretien réalisé'){
        this.candidate.HeureEntretien = '';
      }
    }
    
    this.closeDialog();
  }
}
