import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig  } from '@angular/material/dialog';
import { FilterComponent } from '../../offers-components/filter/filter.component';

interface Candidate {
  name: string;
  location: string;
}

@Component({
  selector: 'app-accueil-restaurant',
  templateUrl: './accueil-restau.component.html',
  styleUrls: ['./accueil-restau.component.scss']
})
export class AccueilRestaurantComponent implements OnInit {
  candidates: Candidate[] = [];
  isFilterVisible = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    console.log('init : AccueilRestaurantComponent');
    this.candidates = [
      { name: 'John Doe', location: 'Lyon 69003' },
      { name: 'Jane Doe', location: 'Lyon 69004' },
      { name: 'Alice Smith', location: 'Lyon 69005' }
    ];
  }

  toggleFilter(): void {
    const dialogRef = this.dialog.open(FilterComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
    });
}

  
}
