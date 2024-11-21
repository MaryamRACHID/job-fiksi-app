import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = ''; // Valeur par défaut

  constructor(
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Met à jour le titre lors de la navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateTitle();
    });

    // Met à jour le titre lors de l'initialisation du composant
    this.updateTitle();
  }

  // Méthode pour mettre à jour le titre en fonction de la route
  private updateTitle(): void {
    let route = this.activatedRoute.root;

    // Parcours de la hiérarchie des routes pour trouver un titre défini
    while (route.children.length > 0) {
      route = route.children[0];
    }

    // Si la route contient une donnée 'title', l'utiliser comme titre
    if (route.snapshot.data['title']) {
      this.title = route.snapshot.data['title'];
    } else {
      this.title = ''; // Valeur par défaut
    }
  }

  // Fonction pour revenir à la page précédente
  goBack(): void {
    this.location.back();
  }
}
