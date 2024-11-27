import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  @Input() candidat: any; // Données du candidat
  stars: number[] = Array(5).fill(0); // Tableau pour afficher 5 étoiles
  rating: number = 0; // Note actuelle
  candidates: { id: number; name: string; note: number }[] = [
    { id: 1, name: 'Candidat 1', note: 0 },
    { id: 2, name: 'Candidat 2', note: 0 }
  ];
  // // Méthode appelée lorsqu'on clique sur une étoile
  // rate(starIndex: number): void {
  //   this.rating = starIndex;
  //   console.log(`Nouvelle note : ${this.rating}`);
  //   // Vous pouvez également ajouter la note dans la table des candidats ici
  // }

  rate(starIndex: number): void {
    this.rating = starIndex;
  
    // Ajouter la note au candidat (exemple pour le premier candidat)
    const candidateId = 1; // Remplacez par l'ID du candidat concerné
    const candidate = this.candidates.find(c => c.id === candidateId);
    if (candidate) {
      candidate.note = this.rating;
      console.log(
        `Note enregistrée pour ${candidate.name} : ${candidate.note}`
      );
    }
}
}