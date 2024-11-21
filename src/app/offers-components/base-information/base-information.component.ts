import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-information',
  templateUrl: './base-information.component.html',
  styleUrl: './base-information.component.scss'
})
export class BaseInformationComponent {
  step: number = 1;
  restaurantTypes: string[] = [
    'Italien',
    'Indien',
    'Chinois',
    'Mexicain',
    'Oriental',
    'Autre'
  ];

  constructor(private router: Router) {}

  goToNextStep() {
    // Logique pour abandonner
    this.router.navigate(['/addPost/jobInformation']);

  }
}
