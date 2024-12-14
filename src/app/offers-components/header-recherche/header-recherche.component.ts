import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FilterComponent } from '../../offers-components/filter/filter.component';

@Component({
  selector: 'app-header-recherche',
  templateUrl: './header-recherche.component.html',
  styleUrl: './header-recherche.component.scss'
})
export class HeaderRechercheComponent {
  toggleFilter(): void {
    console.log("coucou");
    const dialogRef = this.dialog.open(FilterComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
    });
  }

  toggleAccueil(): void {
    // Rediriger vers /accueil
    this.router.navigate(['/accueil']);
  }
  constructor(private dialog: MatDialog, private router: Router) {}

}
