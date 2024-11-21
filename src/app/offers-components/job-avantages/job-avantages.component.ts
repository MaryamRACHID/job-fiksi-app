import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-job-avantages',
  templateUrl: './job-avantages.component.html',
  styleUrl: './job-avantages.component.scss'
})
export class JobAvantagesComponent {
  salary: string = '';
  hours: string = '';
  advantages: string[] = ['Tickets restaurant', 'Assurance', 'Congés', 'Autres'];
  selectedAdvantages: { [key: string]: boolean } = {};

  constructor(private router: Router) {}

  goToNextStep() {
    this.router.navigate(['/addPost/jobPage']);
  }

  goToPreviousStep() {
    this.router.navigate(['/addPost/interviewSlots']);
  }
}
