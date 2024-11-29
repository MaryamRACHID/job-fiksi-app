import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-profil-resto-vu-par-candidat',
  templateUrl: './profil-resto-vu-par-candidat.component.html',
  styleUrl: './profil-resto-vu-par-candidat.component.scss'
})
export class ProfilRestoVuParCandidatComponent {
  showInfos:boolean=true;
  showEmplois:boolean=false;
  onTabChange(event: MatTabChangeEvent) {
    if(event.index === 0){
      this.showInfos = true;
      this.showEmplois = false;
  
    }
    if(event.index === 1){
      this.showInfos = false;
      this.showEmplois = true;
    }
  }

  RestaurantInformations = {
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
    emplois:[ 
      {
        titre: 'Chef cuisinier',
        poste: 'Responsable de cuisine',
        adresse:'lyon, france',
        entreprise: 'Le Gourmet Parisien',
        description: 'Superviser l’équipe en cuisine et élaborer des menus raffinés.',
        competences: ['Créativité culinaire', 'Gestion d’équipe', 'Maîtrise des techniques culinaires'],
        prixParHeure: '20£'
      },
      {
        titre: 'Serveur',
        poste: 'Service en salle',
        entreprise: 'Café de la Place',
        description: 'Accueillir les clients, prendre les commandes et assurer un service de qualité.',
        competences: ['Esprit d’équipe', 'Service client', 'Rapidité'],
        prixParHeure: '15£'
      },
      {
        titre: 'Barman',
        poste: 'Préparateur de boissons',
        entreprise: 'Bar Lounge 21',
        description: 'Préparer des cocktails et servir les clients dans une ambiance conviviale.',
        competences: ['Créativité', 'Communication', 'Gestion du stress'],
        prixParHeure: '18£'
      },
      {
        titre: 'Plongeur',
        poste: 'Hygiène et propreté',
        entreprise: 'Restaurant Étoile',
        description: 'Assurer le nettoyage de la vaisselle et des équipements de cuisine.',
        competences: ['Rigueur', 'Rapidité', 'Organisation'],
        prixParHeure: '12£'
      },
      {
        titre: 'Assistant Manager',
        poste: 'Gestion opérationnelle',
        entreprise: 'Brasserie Lyonnaise',
        description: 'Coordonner les équipes, gérer les stocks et veiller à la satisfaction client.',
        competences: ['Leadership', 'Gestion des stocks', 'Polyvalence'],
        prixParHeure: '22£'
      }
    
    ]
  }
}

