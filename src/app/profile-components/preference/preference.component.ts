import { Component } from '@angular/core';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrl: './preference.component.scss'
})
export class PreferenceComponent {
  jobPreferences = {
    server: false,
    cook: false,
    dishwasher: false,
    other: false
  };

  locationPreference: string = '';
  salaryPreference: number = 1500; // Default value between 1000€ and 2000€
  preferences: any = {};

  constructor() {}

  onContinue() {
    // Handle continue action, for example save data or navigate to the next step
    console.log('Job Preferences:', this.jobPreferences);
    console.log('Location Preference:', this.locationPreference);
    console.log('Salary Preference:', this.salaryPreference);
  }

  updatePreferences(preferences: any) {
    this.preferences = preferences;
  }
}
