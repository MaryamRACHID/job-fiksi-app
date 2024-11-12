import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { OffreDescriptionComponent } from './offre-description/offre-description.component';
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-profile-restaurant',
  // standalone: true,
  // imports: [
  //   MatIconModule,
  //   MatChipsModule,
  //   MatIconModule,
  //   MatToolbarModule,
  //   MatTabsModule,
  //   BrowserAnimationsModule
  // ],
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

  job: any;

  onTabChange(event: MatTabChangeEvent) {
    // Affiche le titre seulement quand l'onglet "Mes offres" est sélectionné
    // this.showTitle = event.index === 1;
    // this.showInfos = event.index === 0;
    // this.showPlanning = event.index === 2;
    // L'index 1 correspond au deuxième onglet }
    if(event.index === 0){
      this.showInfos = true;
      this.showOffreSection = false;
      this.jobList.forEach(job => job.show = false);
      this.showTitle = false;
      this.showPlanning = false;
      console.log(this.showInfos, this.showOffreSection, this.showTitle, this.showPlanning);
    }else if(event.index === 1){
      this.showInfos = false;
      this.showOffreSection = false;
      this.showTitle = true;
      this.showPlanning = false;
      console.log(this.showInfos, this.showOffreSection, this.showTitle, this.showPlanning);

    }else if(event.index === 2){
      this.showInfos = false;
      this.showOffreSection = false;
      this.jobList.forEach(job => job.show = false);
      this.showTitle = false;
      this.showPlanning = true;
      console.log(this.showInfos, this.showOffreSection, this.showTitle, this.showPlanning);

    }
  }
  showDescription = false;
  showDetails: boolean = false;

  // showCandidatureContainer: boolean = false;
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
    this.showOffreSection = true;
    // this.showTitle = !this.showTitle;               // Cacher la section offres
  }
  // cacheContentOffre(){
  //   this.showOffreSection = false;
  // }

  jobList = [
    {
      title: 'Serveur H/F',
      typePoste: 'Temps partiel',
      lieu: 'Lyon',
      nombreCandidature: '20',
      datePublication: '20/12/2021',
      show:false,
      candidatures: [
        { name: 'Alice Dupont', Cv: 'cv.pdf', Email: 'alice@example.com', Telephone: '074474748', Disponibilite: 'Lundi, Mardi', _Statut: 'Non évalué',DateEntretien:'2024-11-12', HeureEntretien:'08h00' },
        { name: 'Jean Martin', Cv: 'cv', Email: 'jean@example.com', Telephone: '075577889', Disponibilite: 'Mercredi, Vendredi', _Statut: 'En cours',DateEntretien:'2024-11-12', HeureEntretien:'09h00' },
        { name: 'Claire Bernard', Cv: 'cv', Email: 'claire@example.com', Telephone: '076688990', Disponibilite: 'Mardi, Jeudi', _Statut: 'Accepté',DateEntretien:'2024-11-14' , HeureEntretien:'10h00'},
        { name: 'Pierre Durand', Cv: 'cv', Email: 'pierre@example.com', Telephone: '077799001', Disponibilite: 'Lundi, Mercredi, Vendredi', _Statut: 'Non évalué' ,DateEntretien:'2024-11-13', HeureEntretien:''},
        { name: 'Sophie Leroy', Cv: 'cv', Email: 'sophie@example.com', Telephone: '078800112', Disponibilite: 'Jeudi, Samedi', _Statut: 'En cours',DateEntretien:'', HeureEntretien:'' },
        { name: 'Marc Dupuis', Cv: 'cv', Email: 'marc@example.com', Telephone: '079911223', Disponibilite: 'Mardi, Vendredi', _Statut: 'Non évalué',DateEntretien:'', HeureEntretien:'' },

      ]
    },
    {
      title: 'Cuisinier',
      typePoste: 'Temps plein',
      lieu: 'Paris',
      nombreCandidature: '10',
      datePublication: '15/11/2021',
      show:false,
      candidatures: [
        { name: 'Isabelle Laurent', Cv: 'cv', Email: 'isabelle@example.com', Telephone: '070012345', Disponibilite: 'Lundi, Mardi, Jeudi', _Statut: 'Refusé' ,DateEntretien:'', HeureEntretien:''},
        { name: 'Lucas Garnier', Cv: 'cv', Email: 'lucas@example.com', Telephone: '071123456', Disponibilite: 'Mercredi, Vendredi', _Statut: 'En cours',DateEntretien:'' , HeureEntretien:''},
        { name: 'Emma Roche', Cv: 'cv', Email: 'emma@example.com', Telephone: '072234567', Disponibilite: 'Lundi, Samedi', _Statut: 'Accepté',DateEntretien:'', HeureEntretien:'' },
        { name: 'Paul Millet', Cv: 'cv', Email: 'paul@example.com', Telephone: '073345678', Disponibilite: 'Jeudi, Dimanche', _Statut: 'Non évalué',DateEntretien:'' , HeureEntretien:''}
      ]
    },
    // autres postes
  ];


}
