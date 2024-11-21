import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  styleUrl: './job-page.component.scss'
})
export class JobPageComponent {
  salary: string = '';
  hours: string = '';
  advantages: string[] = ['Tickets restaurant', 'Assurance', 'Congés', 'Autres'];
  selectedAdvantages: { [key: string]: boolean } = {};

  constructor(private router: Router) {}

  goToNextStep() {
    this.router.navigate(['/addPost/succeed']);
  }

  goToPreviousStep() {
    this.router.navigate(['/addPost/interviewSlots']);
  }
}
