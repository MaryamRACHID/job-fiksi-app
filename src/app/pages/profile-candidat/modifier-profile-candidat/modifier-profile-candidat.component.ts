import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-modifier-profile-candidat',
  templateUrl: './modifier-profile-candidat.component.html',
  styleUrls: ['./modifier-profile-candidat.component.scss', '../profile-candidat.component.scss'],
  animations: [
    trigger('slideToggle', [
      state('void', style({ height: '0px', opacity: 0 })),
      state('*', style({ height: '*', opacity: 1 })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class ModifierProfileCandidatComponent {
  @Input() user!: any; // Utilisateur contenant les formations
  @ViewChild('editDialog') editDialog!: TemplateRef<any>;

  showPopup = false; // Gestion de la visibilité du popup
  selectedFormation: any = null; // Formation actuellement éditée

  constructor(private dialog: MatDialog) {}

  // Ouvrir le popup pour modifier une formation
  editFormation(formation: any) {
    this.showPopup = true;
    this.selectedFormation = { ...formation }; // Cloner les données de la formation pour éviter les modifications directes
    console.log('Modifier la formation', this.selectedFormation);
    console.log('Date de début', this.selectedFormation.dateDebutFormation);
    console.log('Date de fin', this.selectedFormation.dateFinFormation);

    // Conversion des dates en objets Date pour le datepicker
    if (this.selectedFormation.dateDebutFormation) {
      this.selectedFormation.dateDebutFormation = new Date(
        this.selectedFormation.dateDebutFormation
      );
      console.log('Date de début', this.selectedFormation.dateDebutFormation);
    }
    if (this.selectedFormation.dateFinFormation) {
      this.selectedFormation.dateFinFormation = new Date(
        this.selectedFormation.dateFinFormation
      );
      console.log('Date de fin', this.selectedFormation.dateFinFormation);
    }
  }

  // Fermer le popup et réinitialiser les données
  closePopup(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.showPopup = false;
    this.selectedFormation = null; // Réinitialisation
  }

  // Sauvegarder les modifications et mettre à jour la liste
  saveFormation() {
    if (!this.selectedFormation) return;

    const index = this.user.formationsUser.findIndex(
      (f: any) =>
        f.nomFormation === this.selectedFormation.nomFormation &&
        f.etablissementFormation === this.selectedFormation.etablissementFormation
    );

    if (index !== -1) {
      // Mise à jour des données de la formation
      this.user.formationsUser[index] = {
        ...this.selectedFormation,
        dateDebutFormation: this.selectedFormation.dateDebutFormation.toISOString().split('T')[0],
        dateFinFormation: this.selectedFormation.dateFinFormation.toISOString().split('T')[0],
      };
    }

    this.closePopup(); // Fermer le popup
  }
}
