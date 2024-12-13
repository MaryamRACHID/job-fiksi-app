import {Component, EventEmitter, Input, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {FilterComponent} from '../filter/filter.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accueil-header',
  templateUrl: './accueil-header.component.html',
  styleUrl: './accueil-header.component.scss'
})
export class AccueilHeaderComponent {
  searchValue: string = '';
  @Input() userType!: string | null;

  constructor(private dialog: MatDialog, private router: Router) {}

  onSearch(): void {
    console.log('Rechercher :', this.searchValue);
  }
  openFilter(): void {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: '400px',
      data: { userType: this.userType }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Filtres appliqués :', result);
      }
    });
  }

}
