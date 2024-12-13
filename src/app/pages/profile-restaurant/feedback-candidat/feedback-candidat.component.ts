import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback-candidat',
  templateUrl: './feedback-candidat.component.html',
  styleUrl: './feedback-candidat.component.scss'
})
export class FeedbackCandidatComponent  implements OnInit{
  @Input() candidat: any; // Données du candidat
  stars: number[] = Array(5).fill(0); // Tableau pour afficher 5 étoiles
  rating: number = 0; // Note actuelle
  candidates: { id: number; name: string; note: number }[] = [
    { id: 1, name: 'Candidat 1', note: 0 },
    { id: 2, name: 'Candidat 2', note: 0 }
  ];

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

  candidateName: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.candidateName = params['name'];
    });
  }
}
