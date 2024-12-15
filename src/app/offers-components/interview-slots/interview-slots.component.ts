import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-interview-slots',
  templateUrl: './interview-slots.component.html',
  styleUrl: './interview-slots.component.scss'
})
export class InterviewSlotsComponent {

  slots: string[] = ['', '', '', ''];

  constructor(private router: Router) {}

  editSlot(index: number) {
    this.router.navigate(['/addPost/chooseSlot', { slotIndex: index }]);
  }

  goToNextStep() {
    this.router.navigate(['/addPost/jobAvantages']);
  }

  goToPreviousStep() {
    this.router.navigate(['/addPost/prerequisites']);
  }
}
