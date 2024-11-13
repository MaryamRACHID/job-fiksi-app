import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  title: string = 'Paramètres'; // Vous pouvez modifier cela dynamiquement selon la page

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back(); // Cette fonction permet de revenir à la page précédente
  }
}
