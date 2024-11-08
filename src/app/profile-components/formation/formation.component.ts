import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.scss'
})
export class FormationComponent {
  @Output() formationInfoChange = new EventEmitter<any>();
  @Input() userType: string | null = null; // Propriété pour recevoir le type de profil

  diplomas = [
    { name: '', institution: '', startDate: '', endDate: '' }
  ];

  education = { level: '', certificates: '' };  // Valeur de niveau d'éducation saisie
  educationLevels = ['Bac', 'Bac+2', 'Bac+3', 'Bac+5', 'Doctorat'];  // Liste des niveaux d'éducation
  filteredEducationLevels: string[] = [...this.educationLevels];  // Villes filtrées selon la saisie
  showDropdown: boolean = false;  // Contrôle l'affichage de la liste déroulante

  // Méthode de filtrage pour la liste déroulante
  filterEducationLevels() {
    const searchTerm = this.education.level.toLowerCase();
    this.filteredEducationLevels = this.educationLevels.filter(level =>
      level.toLowerCase().includes(searchTerm)
    );
    this.showDropdown = this.filteredEducationLevels.length > 0;
  }

  // Méthode pour sélectionner un niveau d'éducation
  selectLevel(level: string) {
    this.education.level = level;
    this.showDropdown = false;  // Masquer la dropdown après sélection
  }

  // Masquer la dropdown quand l'input perd le focus
  hideDropdown() {
    setTimeout(() => { this.showDropdown = false; }, 100);  // Petit délai pour permettre à l'utilisateur de sélectionner un élément
  }

  importLinkedInData() {
    console.log('Importation des données via LinkedIn');
    // Ajouter votre logique pour importer les données via LinkedIn
  }

  importIndeedData() {
    console.log('Importation des données via Indeed');
    // Ajouter votre logique pour importer les données via Indeed
  }

  addDiploma() {
    this.diplomas.push({ name: '', institution: '', startDate: '', endDate: '' });
  }

  save() {
    this.formationInfoChange.emit({ education: this.education, diplomas: this.diplomas });
  }

  onFormationUpdate() {
    this.formationInfoChange.emit({ education: this.education, diplomas: this.diplomas });
    this.formationInfoChange.emit(this.userType);
  }
}
