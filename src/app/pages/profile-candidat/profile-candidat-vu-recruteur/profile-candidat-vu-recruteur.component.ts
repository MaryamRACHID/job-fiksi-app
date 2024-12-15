import { Component, Input } from '@angular/core';
import { ProfileCandidatComponent } from '../../profile-candidat/profile-candidat.component';
import {Annonce, Candidat, Restaurant} from '../../accueil/accueil.component';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../../services/data.service';
import {UserService} from '../../../services/user.service';
@Component({
  selector: 'app-profile-candidat-vu-recruteur',
  templateUrl: './profile-candidat-vu-recruteur.component.html',
  styleUrls: ['./profile-candidat-vu-recruteur.component.scss','../profile-candidat.component.scss',]
})
export class ProfileCandidatVuRecruteurComponent {
  user = {
    nomUser: 'inas',
    emailUser: 'inas@gmail.com',
    telUser: '0744740609',
    adresseUser: 'saint priest',
    disponibilitesUser: ['Lun', 'Mer','Ven'],
    descriptionUser:
      'Retrouvez toutes les offres d’emploi, de stage et d’alternance d’EDF, ainsi que toutes les actualités liées au recrutement au sein du Groupe.',
    formationsUser: [
      {
        dateDebutFormation: '01-09-2022',
        dateFinFormation: '2023-09-01',
        nomFormation: 'master1',
        etablissementFormation: 'université lyon 2',
      },
      {
        dateDebutFormation: '2023-09-01',
        dateFinFormation: '2024-09-01',
        nomFormation: 'master2',
        etablissementFormation: 'université lyon 2',
      },
    ],
    competencesUser: ['autonome', "esprit d'équipe", 'responsabilité'],
    experiencesUser: [
      {
        poste: 'Employé polyvalent',
        structure: 'Lidl',
        debutExperience: '2024-07-12',
        finExperience: '2025-02-03',
      },
      {
        poste: 'Employé polyvalent',
        structure: 'Carrefour',
        debutExperience: '2023-06-17',
        finExperience: '2024-12-31',
      },
    ],
    linkdin: 'inas.hakkou',
  };

  candidat: Candidat | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  async ngOnInit(): Promise<void> {
    this.candidat = this.dataService.getCandidat();
  }


}
