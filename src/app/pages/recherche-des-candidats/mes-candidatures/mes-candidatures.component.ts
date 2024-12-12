import { Component } from '@angular/core';

@Component({
  selector: 'app-mes-candidatures',
  templateUrl: './mes-candidatures.component.html',
  styleUrl: './mes-candidatures.component.scss'
})
export class MesCandidaturesComponent {
  mesCandidatures = [
    {
      id: 1,
      logo:'/assets/OIP.jpg',
      titre: 'Serveur',
      entreprise: 'Burger King',
      adresse:'Lyon, France',
      date: '01/01/2022',
      disponibilites:['Lundi', 'Mardi','Jeudi'],
      prix:'12£',
      etat: 'Candidature en cours'
    },
    {
      id: 2,
      logo:'/assets/MCD.png',
      titre: 'Serveur',
      entreprise: 'McDonald\'s',
      adresse:'Paris, France',
      date: '02/02/2022',
      disponibilites:['Lundi', 'Mardi','Jeudi'],
      prix:'15£',
      etat: 'Candidature refusée'
    },
    {
      id: 3,
      logo:'/assets/MCD.png',
      titre: 'Serveur',
      entreprise: 'MCD',
      adresse:'Rennes, France',
      date: '03/03/2022',
      disponibilites:['Lundi', 'Mardi','Jeudi'],
      prix:'18£',
      etat: 'Candidature acceptée'
    }
  ]
}
