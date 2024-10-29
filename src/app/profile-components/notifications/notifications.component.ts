import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  notificationsPreference: string = 'yes'; // Default value
  publicProfile: string = 'no'; // Default value

  notifications: any = {};

  constructor() {}

  onFinishRegistration() {
    // Handle finish registration action, e.g., save data or finalize the registration process
    console.log('Notifications Preference:', this.notificationsPreference);
    console.log('Public Profile:', this.publicProfile);
  }

  updateNotifications(notifications: any) {
    this.notifications = notifications;
  }
}
