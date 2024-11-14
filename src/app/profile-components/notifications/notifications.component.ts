import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {

  notificationsPreference: string = 'yes'; // Default preference for notifications
  publicProfile: string = 'no'; // Default value for public profile visibility
  @Input() userType: string | null = null; // Receives user type

  notifications: any = {};

  constructor(private http: HttpClient) {}

  // Save notifications preferences (e.g., send data to server)
  saveNotifications() {
    const preferences = {
      notificationsPreference: this.notificationsPreference,
      publicProfile: this.publicProfile,
      userType: this.userType
    };

    // You can replace this with an actual HTTP call to save preferences on the server
    console.log('Saving preferences:', preferences);

    // Example of sending preferences to a server
    const apiUrl = 'https://your-api-endpoint.com/saveNotifications'; // Replace with your actual API endpoint

    this.http.post(apiUrl, preferences)
      .subscribe(
        response => {
          console.log('Preferences saved successfully:', response);
        },
        error => {
          console.error('Error saving preferences:', error);
        }
      );
  }
}
