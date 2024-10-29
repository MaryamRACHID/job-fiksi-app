import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})

export class DescriptionComponent {
  @Output() descriptionInfoChange = new EventEmitter<any>();

  hasExperience: boolean = false;
  description: string = '';
  skills: string = '';

  save() {
    this.descriptionInfoChange.emit({
      hasExperience: this.hasExperience,
      description: this.description,
      skills: this.skills
    });
  }
}
