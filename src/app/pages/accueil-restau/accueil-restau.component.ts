import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FilterComponent } from '../../offers-components/filter/filter.component';

interface Candidat {
  name: string;
  location: string;
}

@Component({
  selector: 'app-accueil-restaurant',
  templateUrl: './accueil-restau.component.html',
  styleUrls: ['./accueil-restau.component.scss']
})
export class AccueilRestaurantComponent implements OnInit {
  candidats: Candidat[] = [];
  isFilterVisible = false;

  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    console.log('init : AccueilRestaurantComponent');
    this.candidats = [
      { name: 'John Doe', location: 'Lyon 69003' },
      { name: 'Jane Doe', location: 'Lyon 69004' },
      { name: 'Alice Smith', location: 'Lyon 69005' }
    ];
  }

  toggleFilter(): void {
    console.log("coucou");
    const dialogRef = this.dialog.open(FilterComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
    });
    this.router.navigate(['/rechercheCandidat']);

  }

  toggleAccueil(): void {
    // Rediriger vers /accueil
    this.router.navigate(['/accueil']);
  }
}
