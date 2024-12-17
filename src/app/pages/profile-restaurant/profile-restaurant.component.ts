import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {Candidat, Restaurant} from '../accueil/accueil.component';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-profile-restaurant',
  templateUrl: './profile-restaurant.component.html',
  styleUrl: './profile-restaurant.component.scss',
  animations: [
    trigger('slideToggle', [
      state('void', style({ height: '0px', opacity: 0 })),
      state('*', style({ height: '*', opacity: 1 })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ])
  ]
})
export class ProfileRestaurantComponent{
  showTitle: boolean = false;
  showInfos: boolean=true;
  showPlanning : boolean = false;
  showOffreSection: boolean = false;
  showEditSection : boolean = false;
  showButtonEdit : boolean = true;
  showDescription = false;
  showDetails: boolean = false;
  showContrat=false;
  showProfile: boolean=true;
  job: any;
  infos: any = {};


  restaurant: Restaurant | null = null;
  id: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  async ngOnInit(): Promise<void> {
    this.id = localStorage.getItem('userId');
    this.restaurant = await this.userService.getUserProfile(Number(this.id));
  }

  // ngOnInit(): void {
  //   this.restaurantService.getRestaurantProfile().subscribe(
  //     (data) => {
  //       this.infos = data;
  //       console.log(this.infos);
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la récupération des données:', error);
  //     }
  //   );
  // }
  onTabEdit(){
    this.showEditSection=true;
    this.showProfile = false;
  }
  onTabChange(event: MatTabChangeEvent) {
    if(event.index === 0){
      this.showInfos = true;
      this.showOffreSection = false;
      this.jobList.forEach(job => job.show = false);
      this.showTitle = false;
      this.showPlanning = false;
      this.showButtonEdit = true;
      console.log(this.showInfos, this.showOffreSection, this.showTitle, this.showPlanning);
    }else if(event.index === 1){
      this.showInfos = false;
      this.showOffreSection = false;
      this.showTitle = true;
      this.showPlanning = false;
      this.showButtonEdit = false;
      console.log(this.showInfos, this.showOffreSection, this.showTitle, this.showPlanning);

    }else if(event.index === 2){
      this.showInfos = false;
      this.showOffreSection = false;
      this.jobList.forEach(job => job.show = false);
      this.showTitle = false;
      this.showPlanning = true;
      this.showButtonEdit = false;
      console.log(this.showInfos, this.showOffreSection, this.showTitle, this.showPlanning);

    }
  }

  toggleDescription() {
    this.showDescription = !this.showDescription;
  }
  // Méthode pour revenir à la liste des offres
  backToJobList() {
    this.jobList.forEach(job => job.show = false); // Réinitialiser `show` pour tous les jobs
    this.showOffreSection = false;                  // Afficher la section offres
    this.showTitle = true;
  }
  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  // Méthode pour afficher uniquement les candidatures de l'offre sélectionnée
  viewJobApplications(selectedJob: any) {
    this.jobList.forEach(job => job.show = false); // Réinitialiser `show` pour tous les jobs
    selectedJob.show = true;                       // Activer `show` pour le job sélectionné
    this.showOffreSection = true;           // Cacher la section offres
  }
  handleCancel() {
    this.showEditSection = false;
    this.showProfile = true;
  }

  jobList = [
    // Exemple 1 : Livraison
    {
      title: 'Livreur H/F',
      typePoste: 'Temps partiel',
      lieu: 'Marseille',
      nombreCandidature: '15',
      datePublication: '05/12/2021',
      show: false,
      candidatures: [
        { name: 'Alex Dupuis', Cv: 'cv', Email: 'alex@example.com', Telephone: '074412345', Disponibilite: ['Mercredi', 'Vendredi'], _Statut: 'En cours', DateEntretien: '', HeureEntretien: '' },
        { name: 'Marie Lemoine', Cv: 'cv', Email: 'marie@example.com', Telephone: '075567890', Disponibilite: ['Lundi', 'Samedi'], _Statut: 'Refusé', DateEntretien: '', HeureEntretien: '' },
        { name: 'Hugo Tremblay', Cv: 'cv', Email: 'hugo@example.com', Telephone: '076678901', Disponibilite: ['Mardi', 'Jeudi'], _Statut: 'Accepté', DateEntretien: '', HeureEntretien: '' }
      ]
    },
    // Exemple 2 : Plongeur en restauration
    {
      title: 'Plongeur H/F',
      typePoste: 'Temps plein',
      lieu: 'Nice',
      nombreCandidature: '8',
      datePublication: '01/12/2021',
      show: false,
      candidatures: [
        { name: 'Camille Robert', Cv: 'cv', Email: 'camille@example.com', Telephone: '077789012', Disponibilite: ['Lundi', 'Dimanche'], _Statut: 'Non évalué', DateEntretien: '', HeureEntretien: '' },
        { name: 'Jules Perrot', Cv: 'cv', Email: 'jules@example.com', Telephone: '078890123', Disponibilite: ['Vendredi', 'Samedi'], _Statut: 'En cours', DateEntretien: '2024-11-28', HeureEntretien: '10:30' },
        { name: 'Sarah Lefevre', Cv: 'cv', Email: 'sarah@example.com', Telephone: '079901234', Disponibilite: ['Mardi', 'Jeudi'], _Statut: 'Accepté', DateEntretien: '', HeureEntretien: '' }
      ]
    },
    // Exemple 3 : Responsable de salle
    {
      title: 'Responsable de salle',
      typePoste: 'Temps plein',
      lieu: 'Bordeaux',
      nombreCandidature: '12',
      datePublication: '28/11/2021',
      show: false,
      candidatures: [
        { name: 'Nina Caron', Cv: 'cv', Email: 'nina@example.com', Telephone: '070012346', Disponibilite: ['Mardi', 'Samedi'], _Statut: 'En cours', DateEntretien: '2024-11-30', HeureEntretien: '15:00' },
        { name: 'Thomas Martin', Cv: 'cv', Email: 'thomas@example.com', Telephone: '071123457', Disponibilite: ['Mercredi', 'Dimanche'], _Statut: 'Refusé', DateEntretien: '', HeureEntretien: '' },
        { name: 'Eva Dupont', Cv: 'cv', Email: 'eva@example.com', Telephone: '072234568', Disponibilite: ['Lundi', 'Vendredi'], _Statut: 'Non évalué', DateEntretien: '', HeureEntretien: '' }
      ]
    },
    // Exemple 4 : Barista
    {
      title: 'Barista',
      typePoste: 'Temps partiel',
      lieu: 'Lille',
      nombreCandidature: '18',
      datePublication: '20/11/2021',
      show: false,
      candidatures: [
        { name: 'Chloé Lambert', Cv: 'cv', Email: 'chloe@example.com', Telephone: '073345679', Disponibilite: ['Mercredi', 'Jeudi'], _Statut: 'Accepté', DateEntretien: '', HeureEntretien: '' },
        { name: 'Antoine Girard', Cv: 'cv', Email: 'antoine@example.com', Telephone: '074456790', Disponibilite: ['Mardi', 'Samedi'], _Statut: 'Non évalué', DateEntretien: '', HeureEntretien: '' },
        { name: 'Manon Rousseau', Cv: 'cv', Email: 'manon@example.com', Telephone: '075567801', Disponibilite: ['Vendredi', 'Dimanche'], _Statut: 'En cours', DateEntretien: '', HeureEntretien: '' }
      ]
    }
  ];

  contrat=[
    {
      nom: 'inas',
      fichier_contrat: 'inas_contrat.pdf',
    },
    {
      nom: 'jules',
      fichier_contrat: 'jules_contrat.pdf',
    },
    {
      nom: 'camille',
      fichier_contrat: 'camille_contrat.pdf',
    },
    {
      nom: 'sarah',
      fichier_contrat: 'sarah_contrat.pdf',
    },
    {
      nom: 'nina',
      fichier_contrat: 'nina_contrat.pdf',
    }
  ];
  RestaurantInfos = {
    nomEntreprise:'Burger King',
    email:'burger@gmail.com',
    tel:'0674859612',
    adresse:'Lyon, 69003',
    horaireRestaurant:'10h-23h',
    typeRestaurant:'Fast-Food',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    avantages:["Tickes restaurants","Congé payés", "assurance"],
    siteInternet:'site.com',
    linkdin:'prifil-linkdin',
    offreEmploi:this.jobList,
    contratResto:this.contrat,
  }
  activeTab: string = 'informations';

  changeTab(tab: string): void {
    this.activeTab = tab;
    console.log(`Onglet actif : ${tab}`);
  }

  afficheOffre(){
    this.showTitle = true;
    this.showPlanning=false;
    this.showContrat=false;
  }
  afficheInfo(){
    this.showTitle = false;
    this.showPlanning=false;
    this.showContrat=false;
  }
  affichePlanning(){
    this.showTitle=false;
    this.showPlanning=true;
    this.showContrat=false;

  }
  afficheContrat(){
    this.showContrat=true;
    this.showTitle=false;
    this.showPlanning=false;
  }



}


