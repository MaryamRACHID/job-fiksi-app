import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-job-information',
  templateUrl: './job-information.component.html',
  styleUrl: './job-information.component.scss'
})
export class JobInformationComponent {

  jobTypes: string[] = [
    'Type1',
    'Type2',
    'Autre'
  ];

  constructor(private router: Router) {}

  goToNextStep() {
    // Logique pour abandonner
    this.router.navigate(['/addPost/prerequisites']);

  }
  goToPreviousStep() {
    this.router.navigate(['/addPost/base']);
  }
}
