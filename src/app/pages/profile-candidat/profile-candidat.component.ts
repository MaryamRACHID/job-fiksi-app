import { Component } from '@angular/core';
import {Candidat} from '../accueil/accueil.component';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {UserService} from '../../services/user.service';
// import { ButtonContactCandidatComponent } from './button-contact-candidat/button-contact-candidat.component';
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
  handleCancel(){
    this.showEditSection=false;
    this.showInfos = true;
  }
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
  id: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  async ngOnInit(): Promise<void> {
    this.id = localStorage.getItem('userId');
    this.candidat = await this.userService.getUserProfile(Number(this.id));
  }
isAvailable(day: string): boolean {
  return this.user.disponibilitesUser.includes(day);
}
}
