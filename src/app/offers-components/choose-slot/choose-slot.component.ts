import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-choose-slot',
  templateUrl: './choose-slot.component.html',
  styleUrl: './choose-slot.component.scss'
})
export class ChooseSlotComponent {
  date: string = '';
  startTime: string = '';
  endTime: string = '';

  constructor(private router: Router) {}

  saveSlot() {
    this.router.navigate(['/addPost/interviewSlots']);
  }

  goToNextStep() {
    this.router.navigate(['/addPost/jobAvantages']);
  }

  goToPreviousStep() {
    this.router.navigate(['/addPost/interviewSlots']);
  }
}
