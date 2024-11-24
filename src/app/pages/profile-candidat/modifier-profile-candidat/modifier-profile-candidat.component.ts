import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';

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


  @Input() user!:any; // Définir le type correctement
  @ViewChild('editDialog') editDialog!: TemplateRef<any>;
  @Output() cancelEdit = new EventEmitter<void>();

  showPopupformationedit = false; // Gestion de la visibilité du popup formation edit
  showPopupexperienceedit = false; // Gestion de la visibilité du popup experience edit
  showPopupformationadd = false; // Gestion de la visibilité du popup formation add
  showPopupexperienceadd = false; // Gestion de la visibilité du popup experience add
  showdeletePopup=false;

  selectedFormation: any = null; // Formation actuellement éditée
  selectedExperience: any = null; // Experience actuelle éditée

  // Variables pour les champs du formulaire formation
  selectedNomFormation: string = '';
  selectedDateDebutFormation: string | null = new Date().toISOString().split('T')[0];
  selectedDateFinFormation: string | null = new Date().toISOString().split('T')[0];
  selectedetablissementFormation: string = '';

  //variables pour les champs du formulaire experience
  selectedStructureExperience: string = '';
  selectedPosteExperience: string='';
  selectedDateFinExperience: string | null = new Date().toISOString().split('T')[0];
  selectedDateDebutExperience: string | null = new Date().toISOString().split('T')[0];



  constructor(private dialog: MatDialog) {}

  // Ouvrir le popup pour modifier une formation
  editFormation(formation: any) {
    this.showPopupformationedit = true;
    this.selectedFormation = { ...formation }; // Cloner les données pour éviter des modifications directes

    // Convertir les dates en format 'yyyy-MM-dd'
    this.selectedDateDebutFormation = formation.dateDebutFormation
    ? new Date(this.selectedFormation.dateDebutFormation).toISOString().split('T')[0]
    : null;

    this.selectedDateFinFormation = this.selectedFormation.dateFinFormation
      ? new Date(this.selectedFormation.dateFinFormation).toISOString().split('T')[0]
      : null;

    this.selectedetablissementFormation = this.selectedFormation.etablissementFormation || '';
    this.selectedNomFormation = this.selectedFormation.nomFormation || '';

    console.log('Modifier la formation', this.selectedFormation);
  }

  editExperience(experience:any) {
    this.showPopupexperienceedit = true;
    this.selectedExperience = { ...experience }; // Cloner les données pour éviter des modifications directes

    // Convertir les dates en format 'yyyy-MM-dd'
    this.selectedDateDebutExperience = experience.debutExperience
    ? new Date(this.selectedExperience.debutExperience).toISOString().split('T')[0]
    : null;

    this.selectedDateFinExperience = this.selectedExperience.finExperience
      ? new Date(this.selectedExperience.finExperience).toISOString().split('T')[0]
      : null;

    this.selectedPosteExperience = this.selectedExperience.poste || '';
    this.selectedStructureExperience = this.selectedExperience.structure || '';

    console.log('Modifier la formation', this.selectedExperience);
    }
  // Fermer le popup et réinitialiser les données
  closePopup(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.showPopupformationedit = false;
    this.showPopupexperienceedit = false;
    this.showPopupformationadd = false;
    this.showPopupexperienceadd = false;
    this.selectedFormation = null; // Réinitialisation
  }

  // Sauvegarder les modifications et mettre à jour la liste
  saveFormation() {
    if (!this.selectedFormation) return;

    const index = this.user.formationsUser.findIndex(
      (f: any) =>
        f.nomFormation = this.selectedNomFormation
    );

    if (index !== -1) {
      // Mise à jour des données de la formation avec le bon format de date
      this.user.formationsUser[index] = {
        ...this.selectedFormation,
        nomFormation: this.selectedNomFormation,
        etablissementFormation: this.selectedetablissementFormation,
        dateDebutFormation: this.selectedDateDebutFormation,
        dateFinFormation: this.selectedDateFinFormation,
      };
    }

    this.closePopup(); // Fermer le popup
  }

  saveExperience(){
    if (!this.selectedExperience) return;

    const index = this.user.experiencesUser.findIndex(
      (f: any) =>
        f.poste = this.selectedPosteExperience
    );

    if (index !== -1) {
      // Mise à jour des données de la formation avec le bon format de date
      this.user.experiencesUser[index] = {
        ...this.selectedExperience,
        poste: this.selectedPosteExperience,
        structure: this.selectedStructureExperience,
        debutExperience: this.selectedDateDebutExperience,
        finExperience: this.selectedDateFinExperience,
      };
    }

    this.closePopup(); // Fermer le popup
  }

  selectedNewNomFormation:string  | null= '';
  selectedNewDateDebutFormation: string | null = new Date().toISOString().split('T')[0];
  selectedNewDateFinFormation: string | null = new Date().toISOString().split('T')[0];
  selectedNewEtablissementFormation: string|null = '';
  selectedNewFormation: any = { nomFormation: '', etablissementFormation: '', dateDebutFormation: '', dateFinFormation: '' };

  showPopUpAddFormation(){
    this.showPopupformationadd=true;
  }
  addFormation(user: any) {
    if (
      this.selectedNewNomFormation &&
      this.selectedNewDateDebutFormation &&
      this.selectedNewDateFinFormation &&
      this.selectedNewEtablissementFormation
    ) {
        // Initialiser un nouvel objet pour selectedNewFormation
      this.selectedNewFormation = {
        nomFormation: this.selectedNewNomFormation,
        etablissementFormation: this.selectedNewEtablissementFormation,
        dateDebutFormation: this.selectedNewDateDebutFormation,
        dateFinFormation: this.selectedNewDateFinFormation,
      };

      // Ajouter la nouvelle formation à l'utilisateur
      user.formationsUser.push(this.selectedNewFormation);

      console.log('Formation ajoutée :', this.selectedNewFormation);
      console.log('Toutes les formations :', user.formationsUser);
    }

    this.closePopup(); // Fermer le popup
  }

  selectedNewPosetExperience:string  | null= '';
  selectedNewDateDebutExperience: string | null = new Date().toISOString().split('T')[0];
  selectedNewDateFinExperience: string | null = new Date().toISOString().split('T')[0];
  selectedNewStructureExperience: string|null = '';
  selectedNewExperience: any = { poste: '', structure: '', debutExperience: '', finExperience: '' };

  showPopUpAddExperience(){
    this.showPopupexperienceadd=true;
  }
  addExperience(user: any) {
    if (
      this.selectedNewPosetExperience &&
      this.selectedNewDateDebutExperience &&
      this.selectedNewDateFinExperience &&
      this.selectedNewStructureExperience
    ) {

        // Initialiser un nouvel objet pour selectedNewFormation
      this.selectedNewExperience = {
        poste: this.selectedNewPosetExperience,
        structure: this.selectedNewStructureExperience,
        debutExperience: this.selectedNewDateDebutExperience,
        finExperience: this.selectedNewDateFinExperience,
      }

      // Ajouter la nouvelle formation à l'utilisateur
      user.experiencesUser.push(this.selectedNewExperience);

      console.log('Experience ajoutée :', this.selectedNewExperience);
      console.log('Toutes les experience :', user.experiencesUser);
    }

    this.closePopup(); // Fermer le popup
  }

  cancel() {
    // Navigue vers la page `restaurant-infos.html`
    // this.router.navigate(['/profile-restaurant']);
    this.cancelEdit.emit();
  }
  save(){
    // Navigue vers la page `restaurant-infos.html`
    // this.router.navigate(['/profile-restaurant']);
    this.cancelEdit.emit();
  }

  openPopupDelete(){
    this.showdeletePopup = true;
  }


  closePopupDelete() {
    this.showdeletePopup=false;
  }
  confirmDelete(formation: any) {
    const index = this.user.formationsUser.findIndex(
      (f: any) =>
        f.nomFormation == formation.nomFormation &&
        f.etablissementFormation == formation.etablissementFormation &&
        f.dateDebutFormation == formation.dateDebutFormation &&
        f.dateFinFormation == formation.dateFinFormation
      );

    if (index !== -1) {
      // Mise à jour des données de la formation avec le bon format de date
      this.user.formationsUser.splice(index, 1);
    }
    this.closePopupDelete();
  }

  selectedFile: File | null = null; // Stockera le fichier sélectionné
  imagePreview: string | ArrayBuffer | null = null;

  // Simule un clic sur le champ fichier
  openFilePicker(fileInput: HTMLInputElement): void {
    fileInput.click(); // Ouvre le gestionnaire de fichiers
  }

  // Gère le fichier sélectionné
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      // Générer un aperçu de l'image
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result; // Contient les données de l'image en base64
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  daysOfWeek: string[] = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];


// Disponibilités de l'utilisateur

// Vérifie si un jour est dans les disponibilités de l'utilisateur
isAvailable(day: string): boolean {
  return this.user.disponibilitesUser.includes(day);
}

toggleAvailability(day: string): void {
  // const abbreviation = this.jours[day];

  // Vérifie si le jour est déjà dans les disponibilités
  if (this.user.disponibilitesUser.includes(day)) {
    // Retire le jour des disponibilités
    this.user.disponibilitesUser = this.user.disponibilitesUser.filter((d: string) => d !== day);
  } else {
    // Ajoute le jour aux disponibilités
    this.user.disponibilitesUser.push(day);
  }
}
}
