import { Component } from '@angular/core';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrl: './postuler.component.scss'
})
export class PostulerComponent {

  // creneaux=['10h00','11h00','12h00','14h00','15h00'];
  jours = [
    {
      nom: 'Lundi',
      creneaux: [
        { heure: '10h00', isHighlighted: false },
        { heure: '11h00', isHighlighted: false },
        { heure: '12h00', isHighlighted: false },
        { heure: '14h00', isHighlighted: false },
        { heure: '15h00', isHighlighted: false }
      ]
    },
    {
      nom: 'Mardi',
      creneaux: [
        { heure: '10h00', isHighlighted: false },
        { heure: '11h00', isHighlighted: false },
        { heure: '12h00', isHighlighted: false },
        { heure: '14h00', isHighlighted: false },
        { heure: '15h00', isHighlighted: false }
      ]
    },
    {
      nom: 'Mercredi',
      creneaux: [
        { heure: '10h00', isHighlighted: false },
        { heure: '11h00', isHighlighted: false },
        { heure: '12h00', isHighlighted: false },
        { heure: '14h00', isHighlighted: false },
        { heure: '15h00', isHighlighted: false }
      ]
    }
  ]
    toggleClass(jour: any, cren: any) {
      cren.isHighlighted = !cren.isHighlighted; // Inverse l'état pour le créneau cliqué du jour spécifique
    }

}
