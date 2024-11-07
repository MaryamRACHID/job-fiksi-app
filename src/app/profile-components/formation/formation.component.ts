import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.scss'
})
export class FormationComponent {
  @Output() formationInfoChange = new EventEmitter<any>();
  @Input() userType: string | null = null; // Propriété pour recevoir le type de profil

  education = { level: '', certifications: '' };
  educationLevels = ['Bac', 'Licence', 'Master', 'Doctorat'];
  diplomas = [
    { name: '', institution: '', startDate: '', endDate: '' }
  ];

  addDiploma() {
    this.diplomas.push({ name: '', institution: '', startDate: '', endDate: '' });
  }

  save() {
    this.formationInfoChange.emit({ education: this.education, diplomas: this.diplomas });
  }

  onFormationUpdate() {
    this.formationInfoChange.emit({ education: this.education, diplomas: this.diplomas });
  }
}
