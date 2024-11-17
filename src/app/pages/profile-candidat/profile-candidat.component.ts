import { Component } from '@angular/core';
import { ButtonContactCandidatComponent } from './button-contact-candidat/button-contact-candidat.component';
@Component({
  selector: 'app-profile-candidat',
  // standalone: true,
  // imports: [],
  templateUrl: './profile-candidat.component.html',
  styleUrl: './profile-candidat.component.scss'
})

export class ProfileCandidatComponent {
  showEditSection: boolean = false;
  showInfos: boolean = true;

  onTabEdit(){
    this.showEditSection=true;
    this.showInfos = false;
  }
  user = {
    nomUser: 'inas',
    emailUser: 'inas@gmail.com',
    telUser: '0744740609',
    adresseUser: 'saint priest',
    disponibilitesUser: ['Lundi', 'Mardi', 'Mercredi'],
    descriptionUser:
      'Retrouvez toutes les offres d’emploi, de stage et d’alternance d’EDF, ainsi que toutes les actualités liées au recrutement au sein du Groupe.',
    formationsUser: [
      {
        dateDebutFormation: '2022',
        dateFinFormation: '2023',
        nomFormation: 'master1',
        etablissementFormation: 'université lyon 2',
      },
      {
        dateDebutFormation: '2023',
        dateFinFormation: '2024',
        nomFormation: 'master2',
        etablissementFormation: 'université lyon 2',
      },
    ],
    competencesUser: ['autonome', "esprit d'équipe", 'responsabilité'],
    experiencesUser: [
      {
        poste: 'Employé polyvalent',
        structure: 'Lidl',
        debutExperience: '2024',
        finExperience: '2025',
      },
      {
        poste: 'Employé polyvalent',
        structure: 'Carrefour',
        debutExperience: '2023',
        finExperience: '2024',
      },
    ],
    linkdin: 'inas.hakkou',
  };

}
