import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRestaurantComponent } from '../profile-restaurant.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Url } from 'url';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-offre-description',
  // standalone: true,
  // imports: [CommonModule, CandidatDescriptionComponent],
  templateUrl: './offre-description.component.html',
  styleUrls: ['./offre-description.component.scss'],
  animations: [
    trigger('slideToggle', [
      state('void', style({ height: '0px', opacity: 0 })),
      state('*', style({ height: '*', opacity: 1 })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ])
  ]
})

export class OffreDescriptionComponent {
  @Input()
  job!: { title: string; typePoste: string, lieu: string, nombreCandidature: string, datePublication: string, show:boolean,candidatures: { name: string; Cv:string, Email:string, Telephone:string, Disponibilite:string[], _Statut:string, DateEntretien:string, HeureEntretien:string}[]};
  isOpen: boolean = false;
  showDetails: boolean = false
  showApplications: boolean = false;
  showOffre:boolean=true;
  candidate : any;
  @Output() viewCandidatures = new EventEmitter<void>();
  showEditOffre: boolean = false;
  @ViewChild('editDialogEntretien') editDialogEntretien!: TemplateRef<any>;
  constructor(private dialog: MatDialog) {}

showCandidatures() {
  this.viewCandidatures.emit(); // Émettre l'événement pour afficher les candidatures
}
showCandidatureContainer: any;
  toggleDescription() {
    this.isOpen = !this.isOpen;
  }


  goBackToOffers() {
    this.showApplications = false;
    this.showOffre = true;

    // this.backToOffers.emit();
  }
  editOffre(){}

  showPopupEditOffre(){
    this.dialog.open(this.editDialogEntretien);
    console.log("test");
  }
}
