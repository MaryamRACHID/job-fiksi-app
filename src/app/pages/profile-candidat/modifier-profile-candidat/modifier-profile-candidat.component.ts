import { Component } from '@angular/core';

@Component({
  selector: 'app-modifier-profile-candidat',
  // standalone: true,
  // imports: [],
  templateUrl: './modifier-profile-candidat.component.html',
  styleUrls: ['./modifier-profile-candidat.component.scss', '../profile-candidat.component.scss']
})
export class ModifierProfileCandidatComponent {
  educations = [ { years: '2020 - 2022', degree: 'Baccalauréat', school: 'Lycée Inconnu' }, { years: '2020 - 2022', degree: 'Baccalauréat', school: 'Lycée Inconnu' } ];
  editEducation() { // Logic to edit education
    }
    deleteEducation() { // Logic to delete education
      }
  addEducation() { // Logic to add education
    }
}
