import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mes-favories-candidats',
  templateUrl: './mes-favories-candidats.component.html',
  styleUrl: './mes-favories-candidats.component.scss'
})
export class MesFavoriesCandidatsComponent {
  @Input() details:any;
  // @Output() viewDetails = new EventEmitter<void>();
  isSelected: boolean = false;
  constructor(private router: Router) {}

  users=[
    {
      logo: '/assets/inas.png',
      nom: 'inas hakkou',
      adresse:'lyon, France',
      email: 'john.doe@example.com',
      telephone: '06 12 34 56 78',
      description:'hello world world  world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world',
      competences:['responsabilité', 'autonomie','esprie équipe']
    },
    {
      logo: '/assets/inas.png',
      nom: 'john Doe',
      adresse:'lyon, France',
      email: 'john.doe@example.com',
      telephone: '06 12 34 56 78',
      description:'hello world',
      competences:['responsabilité', 'autonomie','esprie équipe'],
    },
    {
      logo: '/assets/inas.png',
      nom: 'jane Doe',
      adresse:'lyon, France',
      email: 'jane.doe@example.com',
      telephone: '06 98 76 54 32',
      description:'hello world',
      competences:['responsabilité', 'autonomie','esprie équipe'],
    }
  ]
  toggleSelection() {
    this.isSelected = !this.isSelected; // Change l'état entre true et false
  }
  showPosteDetails() {
    this.router.navigate(['/details'], { queryParams: this.details });
  }
}
