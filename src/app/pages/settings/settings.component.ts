import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  notificationsEnabled: boolean = true;
  publicProfileEnabled: boolean = true;

  constructor(private router: Router) {}

  navigateTo(route: string) {
    // Replace with your actual navigation logic
    console.log(`Navigating to ${route}`);
    // Example: this.router.navigate([`/${route}`]);
  }
}
