import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {
    this.candidates = [
      { name: 'John Doe', location: 'Lyon 69003' },
      { name: 'Jane Doe', location: 'Lyon 69004' },
      { name: 'Alice Smith', location: 'Lyon 69005' }
    ];
  }

  toggleFilter() {
    this.isFilterVisible = !this.isFilterVisible;
  }
}
