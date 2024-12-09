import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FilterComponent } from '../../offers-components/filter/filter.component';
import { animate, state, transition, trigger } from '@angular/animations';
import { FilterForCandidatComponent } from './filter-for-candidat/filter-for-candidat.component';

@Component({
  selector: 'app-recherche-des-candidats',
  templateUrl: './recherche-des-candidats.component.html',
  styleUrl: './recherche-des-candidats.component.scss'
})
export class RechercheDesCandidatsComponent {
  constructor(private dialog: MatDialog, private router: Router) {}

  toggleFilter(): void {
    console.log("coucou");
    const dialogRef = this.dialog.open(FilterForCandidatComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
    });
  }
  emplois= [
    {
      logo:'/assets/BurKing.jpg',
      titre: 'Chef cuisinier',
      poste: 'Responsable de cuisine',
      adresse: 'lyon, france',
      entreprise: 'Le Gourmet Parisien',
      description: 'Superviser l’équipe en cuisine et élaborer des menus raffinés.',
      competences: ['Créativité culinaire', 'Gestion d’équipe', 'Maîtrise des techniques culinaires'],
      prixParHeure: '20£',
      disponibilites:['Lundi', 'Mardi'],
      avantages: ['tickets resto','congé']
    },
    {
      logo:'/assets/MCD.png',
      titre: 'Serveur',
      poste: 'Service en salle',
      adresse: 'lyon, france',
      entreprise: 'MCD',
      description: 'Accueillir les clients, prendre les commandes et assurer un service de qualité.',
      competences: ['Esprit d’équipe', 'Service client', 'Rapidité'],
      prixParHeure: '15£',
      disponibilites:['Lundi', 'Jeudi'],
      avantages: ['tickets resto','congé']
    },
    {
      logo:'/assets/otacos.jpg',
      titre: 'Barman',
      poste: 'Préparateur de boissons',
      adresse: 'lyon, france',
      entreprise: 'Otacos',
      description: 'Préparer des cocktails et servir les clients dans une ambiance conviviale.',
      competences: ['Créativité', 'Communication', 'Gestion du stress'],
      prixParHeure: '18£',
      disponibilites:['Lundi', 'Mardi','Jeurdi','Samedi'],
      avantages: ['tickets resto','congé']
    },
    {
      logo:'/assets/BurKing.jpg',
      titre: 'Plongeur',
      poste: 'Hygiène et propreté',
      adresse: 'lyon, france',
      entreprise: 'Burger King',
      description: 'Assurer le nettoyage de la vaisselle et des équipements de cuisine.',
      competences: ['Rigueur', 'Rapidité', 'Organisation'],
      prixParHeure: '12£',
      disponibilites:['Lundi', 'Mardi'],
      avantages: ['tickets resto','congé']


    },
    {
      logo:'/assets/MCD.png',
      titre: 'Assistant Manager',
      poste: 'Gestion opérationnelle',
      adresse: 'lyon, france',
      entreprise: 'MCD',
      description: 'Coordonner les équipes, gérer les stocks et veiller à la satisfaction client.',
      competences: ['Leadership', 'Gestion des stocks', 'Polyvalence'],
      prixParHeure: '22£',
      disponibilites:['Lundi', 'Mardi', 'Mercredi'],
      avantages: ['tickets resto','congé']

    }
  ];

  toggleAccueil(): void {
    // Rediriger vers /accueil
    this.router.navigate(['/accueil']);
  }
}
function style(arg0: {
  transform: string; // Complètement en bas
  opacity: number;
}): import("@angular/animations").AnimationStyleMetadata {
  throw new Error('Function not implemented.');
}

